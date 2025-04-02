import { StyleSheet, Text, View } from "react-native"

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>هیچ کاری اضافه نشده است</Text>
      <Text style={styles.subtext}>برای شروع، یک کار جدید اضافه کنید</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
})

