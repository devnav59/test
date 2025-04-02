"use client"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Checkbox } from "./CheckBox"

export function TodoItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.text, task.completed && styles.completedText]} numberOfLines={2}>
          {task.text}
        </Text>
      </View>

      <Checkbox checked={task.completed} onToggle={onToggle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "right",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ff6b6b",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  deleteText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

