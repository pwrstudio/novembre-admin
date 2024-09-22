import { MdVolumeUp } from "react-icons/md"
import { AudioPreview } from "../../components/AudioPreview"

export default {
    type: 'object',
    name: 'audio',
    title: 'Audio',
    icon: MdVolumeUp,
    components: {
        preview: AudioPreview
    }, 
    fields: [
        {
            title: 'Audio',
            name: 'audio',
            type: 'file',
            options: {
                accept: 'audio/*'
            }
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
        {
            title: 'Autoplay',
            name: 'autoplay',
            type: 'boolean'
        },
        {
            title: 'Hidden',
            name: 'hidden',
            type: 'boolean'
        },
    ],
    preview: {
        select: {
            audio: 'audio',
            backgroundColor: 'backgroundColor',
        },
        prepare(selection) {
            const { audio, backgroundColor } = selection
            return {
                title: 'Audio',
                audio: audio,
                backgroundColor // You can pass additional data here if needed
            }
        },
    }
}