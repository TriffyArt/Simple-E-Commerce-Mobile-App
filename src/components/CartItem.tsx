import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Product } from "../types/Product";

interface Props {
  Product: Product;
  onDelete: (id: number) => void;
}

export default function CartItem({
  Product,
  onDelete,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.title}>
          {Product.name}
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
  title: {
    flex: 1,
    fontSize: 16,
    color: "#0f172a",
  },
});
