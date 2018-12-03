
import { createStackNavigator } from 'react-navigation'
import IndexScreen from '../views/index'
import LoginScreen from '../views/login_reg/login'
import MerchantScreen from '../views/login_reg/merchantLogin'
import PhoneScreen from '../views/login_reg/phoneLogin'
import RegScreen from '../views/login_reg/reg'
import Reg_1Screen from '../views/login_reg/reg_1'
import ForgetpassScreen from '../views/login_reg/forgetpass'
import VerfymessageScreen from '../views/login_reg/verfymessage'
import GoodsDetailsScreen from '../views/goodsDetails'



const Routes = createStackNavigator({
    Home: { screen: LoginScreen },
    Index: { screen: IndexScreen },
    Merchant_login: { screen: MerchantScreen },
    Phone_login: { screen: PhoneScreen },
    Reg: { screen: RegScreen },
    Reg_1: { screen: Reg_1Screen },
    forgetpass: { screen: ForgetpassScreen },
    verfymessage: { screen: VerfymessageScreen },
    goodsDetails: { screen: GoodsDetailsScreen }
}, {
        navigationOptions: () => ({
            header: null
        })
    })


export default Routes