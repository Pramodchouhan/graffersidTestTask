import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';

const Cartbar = () => {
    const { totalQuantity } = useSelector((state) => state.cart);
    return (
        <>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                top: 50
            }}>
                <View style={styles.navbarRightContainer}>
                    <View>
                        <Text style={{ fontSize: 25 }}>Filter</Text>
                    </View>
                    <View style={styles.navbarTitle}>
                        <TouchableOpacity>
                            <Icon name="shopping-cart" size={25} color="white" />
                            <View style={styles.navbarTitleText}><Text style={{ color: "white" }}>{totalQuantity}</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.navbarLeftContainer}>
                    <Text style={{ fontSize: 25 }}>Sort</Text>
                </View>
            </View >
        </>
    );
};

const styles = StyleSheet.create({
    navbarRightContainer: {
        width: 175,
        height: 60,
        borderTopRightRadius: 150,
        borderBottomStartRadius: 40,
        borderTopleftRadius: 40,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    navbarLeftContainer: {
        width: 175,
        height: 60,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 40,
        borderBottomEndRadius: 40,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    navbarTitle: {
        height: 60,
        width: 60,
        backgroundColor: '#c73447',
        zIndex: 999,
        marginLeft: 215,
        top: -65,
        borderRadius: 60 / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    navbarTitleText: {
        height: 25,
        width: 25,
        // backgroundColor: 'green',
        zIndex: 999,
        position: 'absolute',
        right: -15,
        fontSize: 80,
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60 / 2,
    },
    notificationCircle: {
        width: 25,
        backgroundColor: '#bbb',
        borderRadius: 25 / 2,
        zIndex: 999,
        marginLeft: 300,
        top: -40
    },
});

export default Cartbar