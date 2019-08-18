import { createAppContainer, createStackNavigator } from 'react-navigation';

import InitialPage from './pages/InitialPage';
import ListPage from './pages/ListPage';

export default createAppContainer(
    createStackNavigator({
        InitialPage,
        ListPage,
    })
); 
  

