
export function getImageURL(directory) {
    return new URL(directory, import.meta.url).href
}