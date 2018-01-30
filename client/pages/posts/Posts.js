import React, { Component } from 'react'

import styles from './posts.less';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <button className={styles.btn}>Hello Posts</button>
      </div>
    );
  }
}
