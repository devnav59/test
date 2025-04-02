import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native"

export function AddTask({ value, onChangeText, onSubmit }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="کار جدید را وارد کنید..."
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
        textAlign="right"
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>افزودن</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginRight: 10,
  },
  button: {
    backgroundColor: "#3498db",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})

