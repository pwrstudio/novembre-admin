export const AudioPreview = (props: any) => {
    const { value } = props

    const url = value.audio && value.audio.asset && value.audio.asset._ref ? 'https://cdn.sanity.io/files/gj963qwj/production/' + value.audio.asset._ref
        .replace('file-', '')
        .replace('-mp3', '.mp3') : ''

    return (
        <div style={{ width: '100%', padding: '40px', border: '0', borderRadius: '0px' }}>
            {value.audio ? <audio src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No audiofile selected'}
        </div >
    )
}

// import React from 'react'
// import PropTypes from 'prop-types'

// export default class SingleImage extends React.Component {
//     static propTypes = {
//         value: PropTypes.object
//     }
//     render() {
//         const { value } = this.props
//         console.dir(value)
//         const bgColor = value.backgroundColor ? value.backgroundColor.hex : '#f4f4f4'

//         const url = value.audio && value.audio.asset && value.audio.asset._ref ? 'https://cdn.sanity.io/files/gj963qwj/production/' + value.audio.asset._ref
//             .replace('file-', '')
//             .replace('-mp3', '.mp3') : ''


//         return (
//             <div style={{ width: '100%', padding: '40px', background: bgColor, border: '0', borderRadius: '0px' }}>
//                 {value.audio ? <audio src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No audiofile selected'}
//             </div >
//         )
//     }
// }
