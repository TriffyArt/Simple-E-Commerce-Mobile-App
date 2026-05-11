import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";

import { Product } from "../types/Product";

interface Props {
  Product: Product;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ProductItem({
  Product,
  onToggle,
  onDelete,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Checkbox
          value={Product.stocks}
          onValueChange={() => onToggle(Product.id)}
          style={styles.checkbox}
        />
        <Text style={[styles.title, Product.stocks && styles.completedTitle]}>
          {Product.productName}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(Product.id)}>
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
