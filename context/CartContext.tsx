import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';
import { Product } from '../types/Product';

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    totalItems: number;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType>(
    {} as CartContextType
);

export const CartProvider = ({
    children.
}: { 
    children: React.ReactNode }) => 
}) => {}