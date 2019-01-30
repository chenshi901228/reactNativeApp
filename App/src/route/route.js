
import { createStackNavigator } from 'react-navigation'
import IndexScreen from '../views/tab/index'
import LoginScreen from '../views/login_reg/login'
import RegScreen from '../views/login_reg/reg'
import ForgetpassScreen from '../views/login_reg/forgetpass'
import ClassifyScreen from '../views/classify/classify'
import GoodsDetailsScreen from '../views/goodsDetail/goodsDetails'
import BuyNowScreen from '../views/goodsDetail/nowbuy'
import StoreScreen from '../views/store/store'
import AddressChangeScreen from '../views/deliveryAddress/addressChange' //我的收获地址
import NewAddressScreen from '../views/deliveryAddress/newAddress'
import EditAddressScreen from '../views/deliveryAddress/editAddress'
import OrderScreen from '../views/order/order' //我的订单
import DividendScreen from '../views/dividend/dividend' //分红中心
import MyfansScreen from '../views/partner/myfans' //我的粉丝
import LogisticsScreen from '../views/logistics/logistics' //查看物流
import EarningScreen from '../views/earning/earning' //收益报表
import WithdrawScreen from '../views/earning/withdraw' //提现
import OrderDetailScreen from '../views/earning/orderDetail' //订单明细
import RecordScreen from '../views/earning/record' //提现记录
import SettingScreen from '../views/setting/setting' //设置
import PersonalInfoScreen from '../views/personalInfo/personalInfo' //个人资料
import NicknameChangeScreen from '../views/personalInfo/nicknameChange' //修改昵称



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
    Logistics: { screen: LogisticsScreen },
    Earning: { screen: EarningScreen },
    Withdraw: { screen: WithdrawScreen },
    OrderDetail: { screen: OrderDetailScreen },
    Record: { screen: RecordScreen },
    Setting: { screen: SettingScreen },
    PersonalInfo: { screen: PersonalInfoScreen },
    NicknameChange: { screen: NicknameChangeScreen }
}, {
        navigationOptions: () => ({
            header: null
        })
    })


export default Routes