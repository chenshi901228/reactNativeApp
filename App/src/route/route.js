
import { createStackNavigator } from 'react-navigation'
import IndexScreen from '../views/tab/index'
import LoginScreen from '../views/login_reg/login'
import RegScreen from '../views/login_reg/reg'
import ForgetpassScreen from '../views/login_reg/forgetpass'
import ClassifyScreen from '../views/classify/classify'
import GoodsDetailsScreen from '../views/goodsDetail/goodsDetails'
import BuyNowScreen from '../views/goodsDetail/nowbuy'
import StoreScreen from '../views/store/store'
import AddressChangeScreen from '../views/deliveryAddress/addressChange'
import NewAddressScreen from '../views/deliveryAddress/newAddress'
import EditAddressScreen from '../views/deliveryAddress/editAddress'
import OrderScreen from '../views/order/order' //我的订单
import DividendScreen from '../views/dividend/dividend' //分红中心
import MyfansScreen from '../views/partner/myfans' //我的粉丝
import LogisticsScreen from '../views/logistics/logistics' //查看物流



const Routes = createStackNavigator({
    Home: { screen: LoginScreen },
    Index: { screen: IndexScreen },
    Reg: { screen: RegScreen },
    Forgetpass: { screen: ForgetpassScreen },
    Classify: { screen: ClassifyScreen },
    GoodsDetails: { screen: GoodsDetailsScreen },
    Store: { screen: StoreScreen },
    BuyNow: { screen: BuyNowScreen },
    AddressChange: { screen: AddressChangeScreen },
    NewAddress: { screen: NewAddressScreen },
    EditAddress: { screen: EditAddressScreen },
    Order: { screen: OrderScreen },
    Dividend: { screen: DividendScreen },
    Myfans: { screen: MyfansScreen },
    Logistics: { screen: LogisticsScreen }
}, {
        navigationOptions: () => ({
            header: null
        })
    })


export default Routes