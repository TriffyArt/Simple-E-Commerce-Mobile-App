import { StyleSheet, View, Text } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No tasks yet</Text>
      <Text style={styles.subtitle}>Add your first task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    opacity: 0.55,
    marginBottom: 8,
    color: "#334155",
  },
  subtitle: {
    color: "#64748b",
    opacity: 0.7,
  },
});
