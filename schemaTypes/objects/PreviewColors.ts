// PREVIEW COLORS
export default {
    type: 'object',
    name: 'previewColors',
    title: 'Preview: colors',
    options: { collapsible: true, collapsed: false },
    fields: [
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        },
        {
            title: 'Text color',
            name: 'textColor',
            type: 'string',
            options: {
                list: [
                    { title: 'Black', value: 'black' },
                    { title: 'White', value: 'white' },
                    { title: 'Custom', value: 'custom' },
                ]
            }
        },
        {
            title: 'Custom text color',
            name: 'customTextColor',
            type: 'color',
        },
    ]
}