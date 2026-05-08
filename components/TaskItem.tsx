import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";

import { Task } from "../types/task";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onToggle,
  onDelete,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Checkbox
          value={task.completed}
          onValueChange={() => onToggle(task.id)}
          style={styles.checkbox}
        />
        <Text style={[styles.title, task.completed && styles.completedTitle]}>
          {task.title}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Ionicons name="trash-outline" size={24} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 24,
    marginBottom: 12,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#0f172a",
  },
  completedTitle: {
    textDecorationLine: "line-through",
    opacity: 0.4,
  },
});
