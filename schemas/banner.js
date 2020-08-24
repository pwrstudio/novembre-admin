export default {
    title: 'Banner',
    name: 'banner',
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
            title: 'Name',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        },
        {
            name: 'image',
            title: 'Image (main)',
            type: 'image',
        },
        {
            name: 'video',
            description: 'Video overrides image',
            title: 'Video (main)',
            type: 'file',
        },
        {
            name: 'imagePhone',
            title: 'Image (phone)',
            type: 'image',
        },
        {
            name: 'videoPhone',
            title: 'Video (phone)',
            type: 'file',
        },
        {
            title: 'Place banner in Menu',
            name: 'placeInMenu',
            type: 'boolean'
        },
        {
            title: 'Place banner in Feed',
            name: 'placeInFeed',
            type: 'boolean'
        },
        {
            title: 'Position in Feed',
            name: 'positionInFeed',
            type: 'number'
        },
        {
            title: 'Place as overlay',
            name: 'placeAsOverlay',
            type: 'boolean'
        },
        {
            title: 'Place as sidebar in all posts',
            name: 'placeAsSidebarInAll',
            type: 'boolean'
        },
        {
            title: 'Place as sidebar in selected posts',
            name: 'placeAsSidebarInSelected',
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
