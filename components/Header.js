import { StyleSheet, Text, View } from "react-native"

export function Header({ tasksCount }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>لیست کارها</Text>
      <Text style={styles.subtitle}>
        {tasksCount > 0 ? `${tasksCount} کار برای انجام دارید` : "هیچ کاری برای انجام ندارید"}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
  },
})

