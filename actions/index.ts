import { MdPreview } from "react-icons/md"

export function PreviewAction(props) { 
    return {
      label: 'Preview',
      icon: MdPreview,
      onHandle: () => {
        console.log('props', props)

        if(!props?.published) {
          window.alert('This document has not been published yet')
          return
        }

        const category = props.type === "product" ? "shop" : props.published.taxonomy?.category
        const slug = props.published.slug?.current

        if(!category || !slug) {
          window.alert('This document is missing a category or slug')
          return
        }

        const previewUrl = `https://preview--novembre.netlify.app/${category}/${slug}`
        window.open(previewUrl, '_blank', 'noopener,noreferrer')
      }    
    } 
  }