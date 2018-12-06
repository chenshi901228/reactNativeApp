
import { createStackNavigator } from 'react-navigation'
import IndexScreen from '../views/index'
import LoginScreen from '../views/login_reg/login'
import RegScreen from '../views/login_reg/reg'
import ForgetpassScreen from '../views/login_reg/forgetpass'
import GoodsDetailsScreen from '../views/goodsDetails'
import StoreScreen from '../views/store'
import BuyNowScreen from '../views/nowbuy'
import AddressChangeScreen from '../views/addressChange'



const Routes = createStackNavigator({
    Home: { screen: LoginScreen },
    Index: { screen: IndexScreen },
    Reg: { screen: RegScreen },
    Forgetpass: { screen: ForgetpassScreen },
    GoodsDetails: { screen: GoodsDetailsScreen },
    Store: { screen: StoreScreen },
    BuyNow: { screen: BuyNowScreen },
    AddressChange: { screen: AddressChangeScreen },
}, {
        navigationOptions: () => ({
            header: null
        })
    })


export default Routes