export default function resolveProductionUrl(document) {
    return `https://preview.novembre.global/${document.taxonomy.category}/${document.slug.current}`
}