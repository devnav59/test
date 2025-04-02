'use client';

import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import { TodoItem } from './components/TodoItem';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { EmptyList } from './components/EmptyList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      Alert.alert('خطا', 'لطفا یک کار وارد کنید');
      return;
    }

    const task = {
      id: Date.now().toString(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    Alert.alert(
      'حذف کار',
      'آیا مطمئن هستید که می‌خواهید این کار را حذف کنید؟',
      [
        { text: 'لغو', style: 'cancel' },
        {
          text: 'حذف',
          onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
          style: 'destructive',
        },
      ]
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header tasksCount={tasks.length} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TodoItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<EmptyList />}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}>
        <AddTask value={newTask} onChangeText={setNewTask} onSubmit={addTask} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});
