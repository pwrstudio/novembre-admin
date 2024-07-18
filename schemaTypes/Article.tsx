import { defineArrayMember } from 'sanity'
import { smallText, normalText, introductionText, interviewQuestion } from '../editor'
import striptags from 'striptags'
import { ImageGroupPreview } from '../components/ImageGroupPreview'
import { AudioPreview } from '../components/AudioPreview'
import { VideoPreview } from '../components/VideoPreview'

import { SingleImagePreview } from '../components/SingleImagePreview'

export default {
  title: 'Article',
  name: 'article',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      title: 'Publication date',
      name: 'publicationDate',
      type: 'datetime'
    },
    {
      title: 'Sticky post',
      name: 'stickied',
      type: 'boolean'
    },
    // TAXONOMY
    {
      type: 'taxonomy',
      name: 'taxonomy',
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
      type: 'object',
      name: 'relatedSlideshow',
      title: 'Related Posts slideshow',
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          },
        },
        {
          title: 'Text color',
          name: 'textColor',
          type: 'color',
        },
      ]
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'array',
      of: [
        {
          type: 'slideshow',
        },
        {
          type: 'textOnly',
        },
        {
          type: 'singleImage',
        },
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
          type: 'videoLoop',
          components: {
            block: (props) => {
              return (
                <VideoPreview {...props} />
              )
            },
          }
        }),
      ],
      validation: (Rule: any) => Rule.length(1)
    },
    {
      name: 'previewColors',
      type: 'previewColors',
    },
    // CONTENT
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {
              title: 'Normal',
              value: 'normal',
              component: normalText

            },
            {
              title: 'Introduction',
              value: 'introduction',
              component: introductionText
            },
            {
              title: 'Small text',
              value: 'small',
              component: smallText
            },
            {
              title: 'Question',
              value: 'interview-question',
              component: interviewQuestion

            },
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
                  { name: 'href', type: 'string', title: 'Url', validation: (Rule: any) => Rule.required() },
                  { name: 'previewImage', type: 'image', title: 'Preview Image' }
                ]
              }
            ]
          }
        },
        {
          type: 'slideshow'
        },
        {
          type: 'arbitraryEmbed'
        },
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
    // RELATED ARTICLES
    {
      title: 'Related articles',
      name: 'related',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article' }
          ]
        }
      ]
    },
    // AD TAG
    {
      title: 'Ad tag',
      name: 'adTag',
      type: 'text',
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publicationDate',
      image: 'mainImage',
      editorialState: 'editorialState'
    },
    prepare(selection) {
      const { title, date, image, editorialState } = selection
      // let image = '';
      // if (preview && preview[0]) {
      //   if (preview[0]._type === 'singleImage' && preview[0].image) {
      //     image = preview[0].image
      //   } else if (preview[0]._type === 'imageGroup' && preview[0].images) {
      //     image = preview[0].images[0]
      //   }
      // }

      const formattedDate = date ? date.substring(0, 10) : 'No date set'
      const strippedTitle = striptags(title)
      return {
        title: strippedTitle,
        description: formattedDate,
        subtitle: editorialState.toUpperCase(),
        media: image
      }
    }
  },
  orderings: [
    {
      title: 'Publication date',
      name: 'publicationDateDesc',
      by: [
        { field: 'publicationDate', direction: 'desc' }
      ]
    }
  ]
}
