import { useContext } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

export default function HomeScreen() {
    const { addToCart, totalItems } = useContext(CartContext);
    const router = useRouter();
    const { width } = useWindowDimensions();
    const numColumns = width >= 1000 ? 3 : width >= 640 ? 2 : 1;

    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-gray-100 p-2">
            <TouchableOpacity
                onPress={() => router.push('/cart')}
                className="bg-blue-500 px-4 py-3 rounded-2xl mb-3"
            >
                <Text className="text-white text-center text-sm">Cart ({totalItems})</Text>
            </TouchableOpacity>
            <FlatList
                style={{ flex: 1 }}
                data={products}
                key={String(numColumns)}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={
                    numColumns > 1
                        ? {
                              justifyContent: "space-between",
                              marginBottom: 8,
                          }
                        : undefined
                }
                contentContainerStyle={{ paddingBottom: 16, flexGrow: 1 }}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onAdd={() => addToCart(item)}
                    />
                )}
            />
        </SafeAreaView>
    )
}