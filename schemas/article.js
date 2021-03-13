// import format from 'date-fns';
import IntroductionText from '../editor/IntroductionText'
import NormalText from '../editor/NormalText'
import SmallText from '../editor/SmallText'
import InterviewQuestion from '../editor/InterviewQuestion'
import striptags from 'striptags'

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
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200
      },
      validation: Rule => Rule.required()
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
          type: 'singleImage',
        },
        {
          type: 'imageGroup',
        },
        {
          type: 'videoLoop',
        },
        {
          type: 'slideshow',
        },
        {
          type: 'textOnly',
        }
      ],
      validation: Rule => Rule.length(1)
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
              title: 'Normal', value: 'normal', blockEditor: {
                render: NormalText
              }
            },
            {
              title: 'Introduction',
              value: 'introduction',
              blockEditor: {
                render: IntroductionText
              }
            },
            {
              title: 'Small text', value: 'small', blockEditor: {
                render: SmallText
              }
            },
            {
              title: 'Question', value: 'interview-question', blockEditor: {
                render: InterviewQuestion
              }
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
                  { name: 'href', type: 'string', title: 'Url', validation: Rule => Rule.required() },
                  { name: 'previewImage', type: 'image', title: 'Preview Image' }
                ]
              }
            ]
          }
        },
        {
          type: 'imageGroup'
        },
        {
          type: 'slideshow'
        },
        {
          type: 'video'
        },
        {
          type: 'videoLoop'
        },
        {
          type: 'audio'
        },
        {
          type: 'arbitraryEmbed'
        }
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
      title: 'Title',
      name: 'titleDesc',
      by: [
        { field: 'title', direction: 'desc' }
      ]
    },
    {
      title: 'Publication date',
      name: 'publicationDateDesc',
      by: [
        { field: 'publicationDate', direction: 'desc' }
      ]
    }
  ]
}
