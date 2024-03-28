
const initialState = {
    products: [{
        image: require('../../assest/beauty-skin-liquid.png'),
        id: 1,
        name: 'Jack Daniels',
        price: 'S$ 85.71',
        volume: '6 Bars',
        quantity: 0,
        isCart: false
    },
    {
        image: require('../../assest/vodka.jpg'),
        id: 2,
        name: 'Absolut Vodka',
        price: 'S$ 50.00',
        volume: '4 Bars',
        quantity: 0,
        isCart: false
    },
    {
        image: require('../../assest/gratis.png'),
        id: 3,
        name: "Handmade Vodka",
        price: 'S$ 66.01',
        volume: '5 Bars',
        quantity: 0,
        isCart: false
    },
    {
        image: require('../../assest/redWine.jpg'),
        id: 4,
        name: 'RedWine',
        price: 'S$ 60.00',
        volume: '6 Bars',
        quantity: 0,
        isCart: false
    }
    ],
    totalQuantity: 0

};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FROM_CART':
            return {
                ...state,
                products: state.products.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            isCart: true
                        };
                    }
                    return product;
                }),
            };
        case 'UPDATE_QUANTITY':
            const updatedCart = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, quantity: action.payload.quantity }
                    : product
            );
            const totalQuantity = state.products.reduce((acc, product) => acc + product.quantity, 1);
            return {
                ...state,
                products: updatedCart,
                totalQuantity: totalQuantity,
            };
        default:
            return state;

    }
};

export default cartReducer;
