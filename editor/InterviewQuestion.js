import React from 'react'
import PropTypes from 'prop-types'
import styles from './InterviewQuestion.css'

const InterviewQuestion = props => {
    return <p className={styles.question}>{props.children}</p>
}

InterviewQuestion.propTypes = {
    children: PropTypes.node.isRequired
}

export default InterviewQuestion