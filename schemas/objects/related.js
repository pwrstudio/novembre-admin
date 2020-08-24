// RELATED ARTICLES
export default {
    type: 'object',
    name: 'related',
    title: 'Related Articles',
    options: { collapsible: true, collapsed: true },
    fields: [
        {
            title: 'Related articles',
            name: 'relatedArticles',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'article' }
                    ]
                }
            ]
        }
    ]
}