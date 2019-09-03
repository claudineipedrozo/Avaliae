import { createAppContainer, createStackNavigator } from 'react-navigation';

import InitialPage from './pages/InitialPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';

export default createAppContainer(
    createStackNavigator({
        InitialPage: {
            screen: InitialPage,
            defaultNavigationOptions: {
                title: 'Avaliaê'
            }
        },
        ListPage: {
            screen: ListPage,
            defaultNavigationOptions: {
                title: 'Avaliaê'
            }
        },
        LoginPage: {
            screen: LoginPage,
            defaultNavigationOptions: {
                title: 'Avaliaê'
            }
        }
    })
); 
  

