import { useContext } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { CartContext } from "../context/CartContext";

export default function CartScreen() {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useContext(CartContext);
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-gray-500 p-4 rounded-lg mb-4"
      >
        <Text className="text-white text-center">Back</Text>
      </TouchableOpacity>
      <Text className="text-xl font-bold mb-4">Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="border-b border-gray-200 py-4">
            <Text className="font-bold text-lg">
              {item.name}
            </Text>

            <Text>Qty: {item.quantity}</Text>

            <Text>
              Subtotal: ₱
              {item.price * (item.quantity || 0)}
            </Text>

            <View className="flex-row gap-2 mt-2">
              <TouchableOpacity
                onPress={() => decreaseQuantity(item.id)}
                className="bg-yellow-500 px-4 py-2 rounded-lg"
              >
                <Text className="text-white">-1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                <Text className="text-white">Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View className="mt-4">
        <Text className="text-lg font-bold">
          Total Items: {totalItems}
        </Text>

        <Text className="text-xl font-bold text-green-600">
          Grand Total: ₱{totalPrice}
        </Text>
      </View>
    </View>
  );
}