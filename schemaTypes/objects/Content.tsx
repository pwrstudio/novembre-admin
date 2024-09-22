import {
    MdDescription
} from "react-icons/md"
import { defineField, defineArrayMember } from 'sanity'
import { ImageGroupPreview } from '../../components/ImageGroupPreview'
import { AudioPreview } from '../../components/AudioPreview'
import { VideoPreview } from '../../components/VideoPreview'

export default defineField({
    type: 'object',
    name: 'content',
    icon: MdDescription,
    title: 'Content',
    options: { collapsible: true, collapsed: true },
    fields: [
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Introduction', value: 'introduction' },
                        { title: 'Small text', value: 'small' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [],
                    marks: {
                        decorators: [
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Strong', value: 'strong' }

                        ],
                        annotations: [
                            {
                                type: 'object',
                                name: 'link',
                                fields: [
                                    { name: 'href', type: 'string', title: 'Url', validation: (Rule: any) => Rule.required() }
                                ]
                            }
                        ]
                    }
                }),
                defineArrayMember({
                    type: 'arbitraryEmbed'
                }),
                defineArrayMember({
                    type: 'slideshow'
                }),
                defineArrayMember({
                    type: 'imageGroup',
                }),
                defineArrayMember({
                    type: 'video',
                }),
                defineArrayMember({
                    type: 'audio',
                }),
            ]
        },
    ]
})