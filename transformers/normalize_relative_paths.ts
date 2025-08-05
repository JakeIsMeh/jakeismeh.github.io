import { defineTransformer } from '@nuxt/content';
import { generatePath } from '../utils/contentUrl';

export default defineTransformer({
  name: 'normalize_relative_paths',
  extensions: ['.md'], // File extensions to apply this transformer to
  transform(file) {

    let prefix_path = generatePath(file.id).split('/');
    prefix_path.shift(); // remove blank
    prefix_path.shift(); // remove content prefix
    prefix_path.pop();   // remove filename
    prefix_path = prefix_path.join('/');

    if (!!prefix_path) { prefix_path = '/' + prefix_path }

    map_ast(file.body!.value!, (x) => {
        if (Object.hasOwn(x[1], 'src') && x[1].src[0] !== '/' && !URL.canParse(x[1].src)) {

            x[1].src = prefix_path + generatePath(x[1].src);
        }
    })

    return {
      ...file,
    }
  },
})

function map_ast(tree: any[], fn: (node: any) => void) {

    if (!Array.isArray(tree)) { throw "you done goofed"; }

    fn(tree);

    // loop through each minimark node
    // format is: [element, props, children... (n number, node | string)]
    for (let i = 2; i < tree.length; i++) {
        if (Array.isArray(tree[i])) {
            map_ast(tree[i], fn);
        }
    }
}
