import fs from 'node:fs';
import { globby } from "globby";
import { generatePath } from '~~/utils/contentUrl';
import { defineEventHandler } from 'h3';
import mime from 'mime';

export default defineEventHandler(async (e) => {
  if (
    (e.method === 'GET' || e.method === 'HEAD') &&
    !(['/_', '/api'].some((x) => e.path.startsWith(x))) &&
    true
  ) {
    const cwd = process.cwd();

    const files = await globby(['content/**/*', '!(content/**/*.md)'], { cwd: cwd! });
    const hoisted_path = '/content' + e.path;
    for (const file of files) {
      if (generatePath(file) === hoisted_path) {
        setResponseHeaders(e, {
          'Content-Type': mime.getType(file) ?? '',
          'Cache-Control': 'no-store', // prerendering only
        })
        return fs.readFileSync(cwd + "/" + file);
      }
    }
  }
});

