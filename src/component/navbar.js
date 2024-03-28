import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Vicon from 'react-native-vector-icons/MaterialIcons';

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbarContainer}>
            <Vicon name="menu" size={30} />
            <Text style={styles.navbarTitle}>{title}</Text>
            <Icon name="search" size={30} />
        </View>
    );
};

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0', // Adjust background color as needed
    },
    navbarTitle: {
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    navigationButtons: {
        flexDirection: 'row',
    },
});

export default Navbar