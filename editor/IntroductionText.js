import React from 'react'
import PropTypes from 'prop-types'
import styles from './IntroductionText.css'

const IntroductionText = props => {
    return <p className={styles.introduction}>{props.children}</p>
}

IntroductionText.propTypes = {
    children: PropTypes.node.isRequired
}

export default IntroductionText