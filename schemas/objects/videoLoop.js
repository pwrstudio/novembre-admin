import Repeat from "react-icons/lib/md/repeat"
import VideoPreview from '../../components/VideoPreview'


export default {
    type: 'object',
    name: 'videoLoop',
    title: 'Video clip',
    icon: Repeat,
    fields: [
        {
            title: 'Video',
            name: 'video',
            type: 'file'
        },
        {
            title: 'Poster image',
            name: 'posterImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'Full-width',
            name: 'fullwidth',
            type: 'boolean'
        },
        {
            title: 'Autoplay',
            name: 'autoplay',
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
        },
    ],
    preview: {
        select: {
            video: 'video',
            backgroundColor: 'backgroundColor'
        },
        component: VideoPreview
    }
}