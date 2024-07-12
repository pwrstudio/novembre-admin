export const smallText = (props: any) => (
    <p style={{ fontFamily: 'sans-serif', fontSize: '0.7em' }}>{props.children}</p>
)

export const normalText = (props: any) => (
    <p style={{ fontFamily: 'serif', fontSize: '1em' }}>{props.children}</p>
)

export const introductionText = (props: any) => (
    <p style={{ fontFamily: 'serif', fontSize: '1.3em', fontStyle: 'italic' }}>{props.children}</p>
)

export const interviewQuestion = (props: any) => (
    <p style={{ fontFamily: 'sans-serif', fontSize: '1em' }}>{props.children}</p>
)
