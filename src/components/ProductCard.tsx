import {Image, Text, TouchableOpacity, View} from "react-native";
import {Product}  from "../types/Product";

interface Props {
    product: Product;
    onAdd: () => void;
}

export default function ProductCard ({product, onAdd}: Props) {
    return (
        <View className="flex-1 bg-white rounded-3xl p-2 mb-2 shadow-sm min-w-[150px] mx-1">
            <Image 
            source={{ uri: product.imageUrl }}
            className="w-full h-28 rounded-3xl"
            />
          
            <Text className="text-sm font-semibold mt-2 leading-snug">
                {product.name}
            </Text>

            <Text className="text-xs text-green-600 mt-1">
                ₱{product.price}
            </Text>

            <TouchableOpacity
            onPress={onAdd}
            className="bg-blue-500 mt-3 py-2 rounded-2xl"
            >
                <Text className="text-white text-center text-xs font-bold">
                    Add to Cart
                </Text>
            </TouchableOpacity>
        </View>
    );
}