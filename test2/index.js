import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components"
import styles from "./index.module.less"
export default class Test extends Taro.Component {
  render() {
    return (
      <View className={styles.block}>
        <View className={styles.largeItem}></View>
      </View>
    )
  }
}
