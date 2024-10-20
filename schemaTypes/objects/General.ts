// TAXONOMY
export default {
    type: 'object',
    name: 'taxonomy',
    title: 'Taxonomy',
    options: { collapsible: true, collapsed: false },
    fields: [
        {
            title: 'Category',
            name: 'category',
            type: 'string',
            options: {
                list: [
                    { title: 'Magazine', value: 'magazine' },
                    { title: 'Bureau', value: 'bureau' }
                ]
            },
            validation: (Rule) => Rule.required().error('Category is required.')
        },
        {
            title: 'Subcategory',
            name: 'subCategory',
            type: 'string',
            options: {
                list: [
                    { title: 'Reportage', value: 'reportage' },
                    { title: 'Motion', value: 'motion' },
                    { title: 'Words', value: 'words' },
                    { title: 'Features', value: 'features' },
                    { title: 'Guest Features', value: 'guest-features' },
                    { title: 'Sounds', value: 'sounds' },
                    { title: 'Creative Direction', value: 'creative-direction' },
                    { title: 'Workshop', value: 'workshop' },
                    { title: 'Entertainment', value: 'entertainment' },
                ]
            }
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
    ],
}