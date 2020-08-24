import React from 'react'
import PropTypes from 'prop-types'
import styles from './SmallText.css'

const SmallText = props => {
    return <p className={styles.small}>{props.children}</p>
}

SmallText.propTypes = {
    children: PropTypes.node.isRequired
}

export default SmallText