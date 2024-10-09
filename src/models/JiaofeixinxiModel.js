import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 缴费信息
const JiaofeixinxiModel = sequelize.define('JiaofeixinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	yezhuzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '业主账号'
	},
	yezhuxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '业主姓名'
	},
	loufanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '楼房号'
	},
	jiaofeinianyue: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '缴费年月'
	},
	jiaofeileixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '缴费类型'
	},
	jiaofeijine: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '缴费金额'
	},
	tianjiashijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('tianjiashijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '添加时间'
	},
	piaoju: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '票据'
	},
	feiyongmingxi: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '费用明细'
	},
	ispay: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否支付'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'jiaofeixinxi'
})

export default JiaofeixinxiModel
