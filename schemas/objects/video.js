// ICONS
import {
    MdVideocam
  } from "react-icons/md"

export default {
    type: 'object',
    name: 'video',
    title: 'Embeded video',
    icon: MdVideocam,
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