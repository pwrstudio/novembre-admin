export default {
    title: 'Stockist',
    name: 'stockist',
    type: 'document',
    fields: [
        {
            title: 'Name',
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
            title: 'Address',
            name: 'address',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'City',
            name: 'city',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Country',
            name: 'country',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Website',
            name: 'website',
            type: 'url'
        },
        {
            title: 'Location',
            name: 'loaction',
            type: 'geopoint'
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'city',
            description: 'country'
        }
    }
}
