import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';

const MyStackNavigator = createStackNavigator({ 
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
        }),
    },
},
    {
        initialRouteName: 'Home'
    }
)
const HomeContainer = createAppContainer(MyStackNavigator)
export default HomeContainer