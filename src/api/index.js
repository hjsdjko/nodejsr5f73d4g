import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import WuyeguanliyuanController from './Wuyeguanliyuan'
import YezhuController from './Yezhu'
import JiaofeixinxiController from './Jiaofeixinxi'
import YezhubaoxiuController from './Yezhubaoxiu'
import BaoxiugongdanController from './Baoxiugongdan'
import GongdanpingjiaController from './Gongdanpingjia'
import LoudongxinxiController from './Loudongxinxi'
import FangwuxinxiController from './Fangwuxinxi'
import TousujianyiController from './Tousujianyi'
import AnquanxunjianController from './Anquanxunjian'
import CuijiaoController from './Cuijiao'
import TousuchuliController from './Tousuchuli'
import TingcheweiController from './Tingchewei'
import TingcheweiyuyueController from './Tingcheweiyuyue'
import FangkedengjiController from './Fangkedengji'
import JinchurenyuanController from './Jinchurenyuan'
import FuwupingjiaController from './Fuwupingjia'
import QuxiaocheweiController from './Quxiaochewei'
import ChatController from './Chat'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import AboutusController from './Aboutus'
import SystemintroController from './Systemintro'
import FriendlinkController from './Friendlink'
import DiscussnewsController from './Discussnews'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/wuyeguanliyuan', WuyeguanliyuanController({ config, db }))

	api.use('/yezhu', YezhuController({ config, db }))

	api.use('/jiaofeixinxi', JiaofeixinxiController({ config, db }))

	api.use('/yezhubaoxiu', YezhubaoxiuController({ config, db }))

	api.use('/baoxiugongdan', BaoxiugongdanController({ config, db }))

	api.use('/gongdanpingjia', GongdanpingjiaController({ config, db }))

	api.use('/loudongxinxi', LoudongxinxiController({ config, db }))

	api.use('/fangwuxinxi', FangwuxinxiController({ config, db }))

	api.use('/tousujianyi', TousujianyiController({ config, db }))

	api.use('/anquanxunjian', AnquanxunjianController({ config, db }))

	api.use('/cuijiao', CuijiaoController({ config, db }))

	api.use('/tousuchuli', TousuchuliController({ config, db }))

	api.use('/tingchewei', TingcheweiController({ config, db }))

	api.use('/tingcheweiyuyue', TingcheweiyuyueController({ config, db }))

	api.use('/fangkedengji', FangkedengjiController({ config, db }))

	api.use('/jinchurenyuan', JinchurenyuanController({ config, db }))

	api.use('/fuwupingjia', FuwupingjiaController({ config, db }))

	api.use('/quxiaochewei', QuxiaocheweiController({ config, db }))

	api.use('/chat', ChatController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/aboutus', AboutusController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	api.use('/friendlink', FriendlinkController({ config, db }))

	api.use('/discussnews', DiscussnewsController({ config, db }))

	return api
}
