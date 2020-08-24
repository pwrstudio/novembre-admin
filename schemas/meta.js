export default {
    title: 'About & contact',
    name: 'meta',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'About',
            name: 'about',
            type: 'content'
        },
        {
            title: 'Credits',
            name: 'credits',
            type: 'object',
            fields: [
                {
                    title: 'Column 1',
                    name: 'columnOne',
                    type: 'content'
                },
                {
                    title: 'Column 2',
                    name: 'columnTwo',
                    type: 'content'
                },
                {
                    title: 'Column 3',
                    name: 'columnThree',
                    type: 'content'
                },
            ]
        },
        {
            title: 'Contact',
            name: 'contact',
            type: 'content'
        },
        {
            title: 'Social Media',
            name: 'socialMedia',
            type: 'content'
        },
        {
            title: 'Magazine introduction',
            name: 'magazine',
            type: 'content'
        },
        {
            title: 'Color: Magazine introduction',
            name: 'magazineColor',
            type: 'color'
        },
        {
            title: 'Bureau introduction',
            name: 'bureau',
            type: 'content'
        },
        {
            title: 'Color: Bureau introduction',
            name: 'bureauColor',
            type: 'color'
        },
        {
            title: 'Feed introduction',
            name: 'feed',
            type: 'content'
        },
        {
            title: 'Color: Feed introduction',
            name: 'feedColor',
            type: 'color'
        },
        {
            title: 'Stockists placeholder',
            name: 'stockistsPlaceholder',
            type: 'content'
        },
        {
            title: 'Show mailing list sign-up overlay',
            name: 'showMailingListOverlay',
            type: 'boolean'
        },
    ]
}
