import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Main from '../components/main/Main';
import Drawer from '../components/drawer/Drawer';
import SignIn from '../components/main/SignIn';
import ListCart from '../components/main/ListCart';
import ProductDetail from '../components/main/ProductDetail';

const Router = DrawerNavigator({
    HOME: {
        screen: Main
    },
},
    {
        contentComponent: props => <Drawer {...props} />
    }
);

const MainStack = StackNavigator({
    MAIN: {
        screen: Router,
        navigationOptions: {
            header: null
        }
    },
    SIGN_IN: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    LIST_CART: {
        screen: ListCart,
        navigationOptions: {
            header: null
        }
    },
    PRODUCT_DETAIL: {
        screen: ProductDetail,
        navigationOptions: {
            header: null
        }
    }
});

export default MainStack;
