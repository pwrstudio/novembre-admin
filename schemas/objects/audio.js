import Volume from "react-icons/lib/md/volume-up"
import AudioPreview from '../../components/AudioPreview'

export default {
    type: 'object',
    name: 'audio',
    title: 'Audio',
    icon: Volume,
    fields: [
        {
            title: 'Audio',
            name: 'audio',
            type: 'file'
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        },
        {
            title: 'Foreground Color',
            name: 'foregroundColor',
            type: 'color',
        },
    ],
    preview: {
        select: {
            audio: 'audio',
            backgroundColor: 'backgroundColor'
        },
        component: AudioPreview
    }
}