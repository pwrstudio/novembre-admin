export default {
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
        {
            name: "editorialState",
            type: "string",
            options: {
                list: [
                    { title: "Preview", value: "preview" },
                    { title: "Live", value: "live" }
                ],
            }
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'mainImage',
            description: 'Used when sharing article on social media etc...',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            title: 'External product',
            name: 'isExternal',
            type: 'boolean'
        },
        {
            title: 'External product link',
            name: 'externalLink',
            type: 'string'
        },
        {
            title: 'External shop name',
            name: 'externalName',
            type: 'string'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]

        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            image: 'mainImage',
            editorialState: 'editorialState'
        },
        prepare(selection) {
            const { title, date, image, editorialState } = selection
            const formattedDate = date ? date.substring(0, 10) : 'No date set'
            return {
                title: title,
                description: formattedDate,
                subtitle: editorialState.toUpperCase(),
                media: image
            }
        }
    },
    orderings: [
        {
            title: 'Title',
            name: 'titleDesc',
            by: [
                { field: 'title', direction: 'desc' }
            ]
        }
    ]
}
