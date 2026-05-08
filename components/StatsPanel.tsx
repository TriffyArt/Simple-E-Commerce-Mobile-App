import { StyleSheet, View, Text } from "react-native";

interface Props {
  total: number;
  completed: number;
  pending: number;
}

export default function StatsPanel({
  total,
  completed,
  pending,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={[styles.card, styles.cardSpacing]}>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.value}>{total}</Text>
      </View>

      <View style={[styles.card, styles.cardSpacing]}>
        <Text style={styles.label}>Done</Text>
        <Text style={[styles.value, styles.doneValue]}>{completed}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Pending</Text>
        <Text style={[styles.value, styles.pendingValue]}>{pending}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e2e8f0",
    padding: 16,
    borderRadius: 28,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 28,
    padding: 16,
  },
  cardSpacing: {
    marginRight: 12,
  },
  label: {
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#64748b",
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0f172a",
  },
  doneValue: {
    color: "#16a34a",
  },
  pendingValue: {
    color: "#ea580c",
  },
});
