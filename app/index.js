import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* 標題 */}
      <Text style={styles.headerText}>123</Text>

      

     
      
      <Text style={styles.infoText}>321！</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 佔滿整個畫面
    justifyContent: 'center', // 垂直置中
    alignItems: 'center', // 水平置中
    backgroundColor: '#F7F7F7', // 輕微的背景色
    paddingTop: 0, // 稍微向下偏移
  },
  headerText: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  cabinet: {
    width: 300,
    height: 600,
    backgroundColor: '#A0522D', // 深棕色櫃子主體
    borderRadius: 8,
    borderWidth: 5,
    borderColor: '#8B4513', // 櫃子邊框
    overflow: 'hidden', // 確保內容不溢出
    alignItems: 'center', // 讓內部元素水平置中
    justifyContent: 'space-between', // 將頂部、架子、底部均勻分佈
    paddingVertical: 15,
  },
  cabinetTopBottom: {
    width: '90%', // 櫃子頂部和底部的木板
    height: 20,
    backgroundColor: '#8B4513', // 更深的木頭色
    borderRadius: 4,
  },
  shelf: {
    flexDirection: 'row', // 罐子水平排列
    justifyContent: 'space-around', // 罐子之間均勻分佈
    alignItems: 'flex-end', // 罐子底部對齊架子
    width: '90%',
    height: 100, // 架子的高度
    backgroundColor: '#CD853F', // 架子顏色
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 5, // 讓罐子看起來坐在架子上
  },
  jar: {
    width: 60,
    height: 80,
    borderRadius: 30, // 讓頂部是圓形，模擬罐子
    borderWidth: 2,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // 為了之後可能添加更多細節
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginTop: 30,
  }
});