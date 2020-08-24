import React from 'react'
import PropTypes from 'prop-types'
import styles from './NormalText.css'

const NormalText = props => {
    return <p className={styles.normal}>{props.children}</p>
}

NormalText.propTypes = {
    children: PropTypes.node.isRequired
}

export default NormalText