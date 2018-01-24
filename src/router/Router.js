import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Main from '../components/main/Main';
import Drawer from '../components/drawer/Drawer';


const Router = DrawerNavigator({
    HOME: {
        screen: Main
    },
},
    {
        contentComponent: () => <Drawer />
    }
);

export default Router;
