import Image from "react-icons/lib/md/photo-size-select-actual"
import SingleImagePreview from '../../components/SingleImagePreview'

export default {
    type: 'object',
    name: 'singleImage',
    title: 'Single Image',
    icon: Image,
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
            title: 'Full-width',
            name: 'fullwidth',
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
            validation: Rule => Rule.max(100).min(50)
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
            image: 'image',
            caption: 'caption',
            alignment: 'alignment',
            fullwidth: 'fullwidth',
            backgroundColor: 'backgroundColor'
        },
        component: SingleImagePreview
    },
}