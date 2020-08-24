// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import article from './article'
import stockist from './stockist'
import meta from './meta'
import banner from './banner'
import product from './product'

// Objects
import general from './objects/general'
import previewColors from './objects/previewColors'
import content from './objects/content'
import related from './objects/related'
import slideshow from './objects/slideshow'
import textOnly from './objects/textOnly'
import singleImage from './objects/singleImage'
import imageGroup from './objects/imageGroup'
import video from './objects/video'
import audio from './objects/audio'
import videoLoop from './objects/videoLoop'



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([meta, videoLoop, article, product, stockist, content, related, general, slideshow, textOnly, singleImage, imageGroup, audio, video, previewColors, banner])
})