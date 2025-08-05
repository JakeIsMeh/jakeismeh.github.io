import slugify from 'slugify';
import { withoutTrailingSlash, withLeadingSlash } from 'ufo'

const SEMVER_REGEX = /^\d+(?:\.\d+)*(?:\.x)?$/

/**
 * Generate path from file name
 *
 * @param path file full path
 * @returns generated slug
 */
export const generatePath = (path: string, { forceLeadingSlash = true, slugifyOptions = {} } = {}): string => {
    path = path.split('/').map(part => slugify(refineUrlPart(part), slugifyOptions)).join('/')
    return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path
}

/**
 * Clean up special keywords from path part
 */
export function refineUrlPart(name: string): string {
    name = name.split(/[/:]/).pop()!
    
    // Match 1, 1.2, 1.x, 1.2.x, 1.2.3.x,
    if (SEMVER_REGEX.test(name)) {
        return name
    }

    return (
        name
            /**
             * Remove numbering
             */
            .replace(/(\d+\.)?(.*)/, '$2')
            /**
             * Remove index keyword
             */
            .replace(/^index(\.draft)?$/, '')
            /**
             * Remove draft keyword
             */
            .replace(/\.draft$/, '')
    )
}
