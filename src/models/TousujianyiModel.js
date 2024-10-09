import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 投诉建议
const TousujianyiModel = sequelize.define('TousujianyiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	biaotimingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '标题名称'
	},
	xiangxineirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '详细内容'
	},
	fankuileibie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '反馈类别'
	},
	jinjichengdu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '紧急程度'
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
	yezhushouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '业主手机'
	},
	tupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	chulizhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '处理状态'
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
	tableName: 'tousujianyi'
})

export default TousujianyiModel
