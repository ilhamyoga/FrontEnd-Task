import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import EditTask from '../screens/editTask';

const MyStackNavigator = createStackNavigator({ 
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
        }),
    },
    EditTask: {
        screen: EditTask,
        navigationOptions:({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#092B51',
                elevation:0
            },
            headerTintColor: '#fff',
            title: 'TASK EDIT',
        })
    },
},
    {
        initialRouteName: 'Home'
    }
)
const HomeContainer = createAppContainer(MyStackNavigator)
export default HomeContainer