import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home"
        component={Home}
        options={{ title: 'CompreTon' }}
      />
      <Drawer.Screen 
        name="Cart"
        component={Cart}
        options={{ title: 'Carinho' }}
      />
    </Drawer.Navigator>
  )
}

export default Routes;