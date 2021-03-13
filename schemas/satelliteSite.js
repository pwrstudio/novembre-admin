export default {
    title: 'Satellite site',
    name: 'satelliteSite',
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
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]

        },
    ],
    preview: {
        select: {
            title: 'title',
            image: 'mainImage',
            editorialState: 'editorialState',
            slug: 'slug'
        },
        prepare(selection) {
            const { title, image, editorialState, slug } = selection
            return {
                title: title,
                // subtitle: editorialState.toUpperCase(),
                media: image,
                subtitle: 'novembre.global/site/' + slug.current
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
