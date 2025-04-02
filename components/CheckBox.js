import { StyleSheet, TouchableOpacity, View } from "react-native"

export function Checkbox({ checked, onToggle }) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      {checked && <View style={styles.checkedInner} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#3498db",
  },
})

