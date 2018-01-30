import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './posts.less';

export default class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <button className={styles.btn}>Hello Posts</button>
      </div>
    );
  }
}
