import React, { Component } from "react"
import styles from "./index.less"
export default class Test extends Component {
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.largeItem}></div>
      </div>
    )
  }
}
