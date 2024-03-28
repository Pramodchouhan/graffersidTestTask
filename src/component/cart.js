import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './navbar';
import Icon from 'react-native-vector-icons/Entypo';
import Cartbar from './cartbar';




const Cart = () => {
    const dispatch = useDispatch();
    const { products, isCart } = useSelector((state) => state.cart);
    const AddToCart = (product) => {
        dispatch({ type: 'ADD_FROM_CART', payload: { id: product.id, isCart: !isCart } });
    };

    const updateQuantity = (product, newQuantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: product.id, quantity: newQuantity, prevQuantity: product.quantity },
        });
    };
    const LiquorItem = ({ item }) => {
        return (
            <View key={item.id} style={styles.listBox} >
                <View style={styles.boxContainer}>
                    <Image source={item.image} style={{ width: 100, height: 100 }} />
                    <Text style={styles.titlefont}>{item.name}</Text>
                    <Text style={{ color: "#c73447" }}>{item.price}</Text>
                    <Text>{item.volume}</Text>
                    <View style={styles.buttonContainer}>
                        {item.isCart ?
                            <>
                                <TouchableOpacity style={{ width: 40, top: 5 }} disabled={item.quantity <= 1} onPress={() => updateQuantity(item, item.quantity - 1)}>
                                    <Icon name="minus" size={25} color="#c73447" style={{ backgroundColor: item.quantity <= 1 ? '#d16674' : '#c73447', color: 'white', paddingLeft: 7, borderRadius: 5 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, top: 6, fontWeight: 'bold' }}>{item.quantity}</Text>
                                <TouchableOpacity style={{ width: 40, top: 5 }} onPress={() => updateQuantity(item, item.quantity + 1)}>
                                    <Icon name="plus" size={25} color="#c73447" style={styles.Button} />
                                </TouchableOpacity>
                            </>
                            :
                            <TouchableOpacity onPress={() => AddToCart(item)}>
                                <Text style={styles.addToCart}>Add to Cart</Text>
                            </TouchableOpacity>}
                    </View>
                </View>
            </View >
        );
    };
    return (
        <View style={{ padding: 10 }}>
            <Navbar title={"LIQUOR"} />
            <View style={styles.mainContainer}>
                {products.map((item) => (
                    <LiquorItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </View>
            <Cartbar />
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        justifyContent: 'space-between',
        width: '100%',

    },
    listBox: {
        width: '48%',
        marginBottom: 20,
        padding: 20,
        borderRadius: 5,
    },
    boxContainer: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    titlefont: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 9,
        top: 10
    },
    Button: {
        backgroundColor: '#c73447',
        color: 'white',
        paddingLeft: 7,
        borderRadius: 5
    },
    addToCart: {
        backgroundColor: '#c73447',
        color: 'white',
        padding: 10,
        textAlign: "center",
        width: 120,
        height: 40,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15

    }
});
export default Cart;
