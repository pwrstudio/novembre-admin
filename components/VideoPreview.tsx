export const VideoPreview = (props: any) => {
    const { video, title, backgroundColor } = props

    const bgColor = backgroundColor ? backgroundColor.hex : '#f4f4f4'

    const url = video && video.asset && video.asset._ref ? 'https://cdn.sanity.io/files/gj963qwj/production/' + video.asset._ref
        .replace('file-', '')
        .replace('-mp4', '.mp4') : ''

    return (
        <div style={{ width: '100%', padding: '40px', background: bgColor, border: '0', borderRadius: '0px' }}>
            <div><strong>{title}</strong></div>
            {video ? <video src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No video selected'}
        </div >
    )
}