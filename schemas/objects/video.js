import VideoCam from "react-icons/lib/md/videocam"

export default {
    type: 'object',
    name: 'video',
    title: 'Embeded video',
    icon: VideoCam,
    fields: [
        {
            title: 'Video',
            name: 'video',
            type: 'url'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        }
    ]
}