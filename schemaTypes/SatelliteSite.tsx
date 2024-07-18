import { defineArrayMember } from 'sanity'
import { ImageGroupPreview } from '../components/ImageGroupPreview'
import { AudioPreview } from '../components/AudioPreview'
import { VideoPreview } from '../components/VideoPreview'


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
            validation: (Rule: any) => Rule.required()
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
            title: 'Use custom font',
            name: 'customFont',
            type: 'boolean'
        },
        {
            title: 'Landing page',
            name: 'landing',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [
                {
                    title: 'Enable landing page',
                    name: 'enabled',
                    type: 'boolean'
                },
                {
                    title: 'Show title',
                    name: 'showTitle',
                    type: 'boolean'
                },
                {
                    title: 'Image',
                    name: 'landingImage',
                    type: 'image',
                }
            ]
        },
        {
            title: 'Header',
            name: 'header',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [
                // {
                //     title: 'Show Novembre logo',
                //     name: 'showNovembreLogo',
                //     type: 'boolean'
                // },
                // {
                //     title: 'Show title',
                //     name: 'showTitle',
                //     type: 'boolean'
                // },
                {
                    title: 'Showcase external logo',
                    name: 'showExternalLogo',
                    type: 'boolean'
                },
                {
                    name: 'externalLogo',
                    title: 'External logo',
                    type: 'image',
                    hidden: ({ parent }) => !parent?.showExternalLogo
                },
                {
                    title: 'Use "Novembre presents:" layout',
                    name: 'usePresentsLayout',
                    type: 'boolean'
                },
                {
                    title: 'Right corner: presented by (Novembre logo)',
                    name: 'presentedByNovembre',
                    type: 'boolean'
                },
                {
                    title: 'Right corner: (Novembre logo) media partner"',
                    name: 'novembreMediaPartner',
                    type: 'boolean'
                },
                {
                    name: 'externalName',
                    title: 'Name of external partner',
                    description: 'To be used in the "Novembre presents:" layout',
                    type: 'string',
                    hidden: ({ parent }) => !parent?.usePresentsLayout
                },
            ]
        },
        {
            title: 'Background',
            name: 'background',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [
                {
                    title: 'Background image',
                    name: 'backgroundImage',
                    type: 'image',
                },
                {
                    title: 'Background color',
                    name: 'backgroundColor',
                    type: 'color'
                },
            ]
        },
        {
            title: 'Metadata',
            name: 'metadata',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [
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
                    type: 'text',
                },
            ]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'content',
                },
                {
                    type: 'singleImage',
                },
                {
                    type: 'slideshow',
                },
                {
                    type: 'flipshow',
                },
                {
                    type: 'map',
                },
                defineArrayMember({
                    type: 'thumbnailGroup',
                    components: {
                        block: (props) => {
                            return (
                                <ImageGroupPreview {...props} />
                            )
                        },
                    }
                }),
                defineArrayMember({
                    type: 'imageGroup',
                    components: {
                        block: (props) => {
                            return (
                                <ImageGroupPreview {...props} />
                            )
                        },
                    }
                }),
                defineArrayMember({
                    type: 'video',
                    components: {
                        block: (props) => {
                            return (
                                <VideoPreview {...props} />
                            )
                        },
                    }
                }),
                defineArrayMember({
                    type: 'videoLoop',
                    components: {
                        block: (props) => {
                            return (
                                <VideoPreview {...props} />
                            )
                        },
                    }
                }),
                defineArrayMember({
                    type: 'audio',
                    components: {
                        block: (props) => {
                            return (
                                <AudioPreview {...props} />
                            )
                        },
                    }
                }),
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200
            },
            validation: (Rule: any) => Rule.required()
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
