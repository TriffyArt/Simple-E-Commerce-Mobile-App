import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Task } from "../types/task";
import TaskItem from "../components/TaskItem";
import StatsPanel from "../components/StatsPanel";
import EmptyState from "../components/EmptyState";

export default function TaskBoardScreen() {
  const [taskText, setTaskText] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (!taskText.trim()) {
      Alert.alert("Error", "Task cannot be empty");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTasks(tasks.filter((task) => task.id !== id));
          },
        },
      ]
    );
  };

  const completeAllTasks = () => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        completed: true,
      }))
    );
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.header}>TaskFlow</Text>

        <StatsPanel
          total={tasks.length}
          completed={completedTasks}
          pending={pendingTasks}
        />

        <View style={styles.row}>
          <TextInput
            value={taskText}
            onChangeText={setTaskText}
            placeholder="Add task..."
            style={styles.input}
          />

          <TouchableOpacity
            onPress={addTask}
            disabled={!taskText.trim()}
            style={[taskText.trim() ? styles.addButton : styles.disabledButton, styles.inputButton]}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowFullWidth}>
          <TouchableOpacity
            onPress={completeAllTasks}
            style={styles.actionButton}
          >
            <Text style={styles.actionButtonText}>Complete All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={deleteCompletedTasks}
            style={[styles.actionButton, styles.deleteButton, styles.actionGap]}
          >
            <Text style={styles.actionButtonText}>Delete Completed</Text>
          </TouchableOpacity>
        </View>

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            style={styles.taskList}
            contentContainerStyle={styles.taskListContainer}
            renderItem={({ item }) => (
              <TaskItem
                task={item}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            )}
          />
        )}
      </View>

      <Text style={styles.footer}>© Psalm Salcedo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 64,
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: 720,
  },
  header: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 16,
    textAlign: "center",
    color: "#0f172a",
  },
  row: {
    flexDirection: "row",
    marginTop: 16,
  },
  rowFullWidth: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    width: "100%",
  },
  input: {
    flex: 1,
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    marginRight: 12,
  },
  inputButton: {
    justifyContent: "center",
  },
  addButton: {
    paddingHorizontal: 20,
    borderRadius: 24,
    justifyContent: "center",
    backgroundColor: "#2563eb",
  },
  disabledButton: {
    paddingHorizontal: 20,
    borderRadius: 24,
    justifyContent: "center",
    backgroundColor: "#cbd5e1",
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "700",
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#0f172a",
    borderRadius: 20,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#334155",
  },
  actionGap: {
    marginLeft: 12,
  },
  actionButtonText: {
    color: "#ffffff",
    fontWeight: "700",
  },
  taskList: {
    marginTop: 24,
    width: "100%",
  },
  taskListContainer: {
    paddingBottom: 36,
  },
  footer: {
    position: "absolute",
    bottom: 16,
    right: 16,
    fontSize: 12,
    color: "rgba(15, 23, 42, 0.5)",
  },
});
