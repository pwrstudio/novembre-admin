import { MdPhotoSizeSelectActual } from "react-icons/md"

export default {
    type: 'object',
    name: 'singleImage',
    title: 'Single Image',
    icon: MdPhotoSizeSelectActual,
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            title: 'No bottom margin',
            name: 'noBottomMargin',
            type: 'boolean'
        },
        {
            title: 'Link',
            name: 'linkUrl',
            type: 'url'
        },
        {
            title: 'Full-width',
            name: 'fullwidth',
            type: 'boolean'
        },
        {
            title: 'No crop on phone (header only)',
            description: 'When used as an article header, show the whole image on phones (full width, natural height) instead of cropping it.',
            name: 'noCropOnPhone',
            type: 'boolean'
        },
        {
            title: 'Alignment',
            name: 'alignment',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Center', value: 'center' },
                    { title: 'Right', value: 'right' }
                ]
            }
        },
        {
            title: 'Maximum height (in percents of window height)',
            name: 'maxHeight',
            type: 'number',
            validation: (Rule: any) => Rule.max(100).min(50)
        },
        {
            type: 'text',
            name: 'caption',
            title: 'Caption'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        }
    ],
    preview: {
        select: {
            title: 'Single image',
            image: 'image',
            caption: 'caption',
            alignment: 'alignment',
            fullwidth: 'fullwidth',
            backgroundColor: 'backgroundColor'
        },
    },
}