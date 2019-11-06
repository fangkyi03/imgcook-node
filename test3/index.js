import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components"
import styles from "./index.module.less"
export default class Test extends Taro.Component {
  render() {
    return (
      <View className={styles.box}>
        <View className={styles.hd}></View>
        <View className={styles.bd}>
          <View className={styles.layerWrap}>
            <View className={styles.layer}></View>
            <View className={styles.largeIcon}></View>
          </View>
          <View className={styles.entryPic}></View>
        </View>
        <View className={styles.row}>
          <View className={styles.pic}></View>
          <View className={styles.item}></View>
          <View className={styles.img}></View>
          <View className={styles.itemLong}></View>
        </View>
        <View className={styles.submain}>
          <View className={styles.productLong}></View>
          <View className={styles.itemLong_2}></View>
          <View className={styles.block}>
            <View className={styles.entryPic_2}></View>
            <View className={styles.entryPic_3}></View>
          </View>
        </View>
        <View className={styles.main}></View>
      </View>
    )
  }
}
