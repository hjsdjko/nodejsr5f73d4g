import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 服务评价
const FuwupingjiaModel = sequelize.define('FuwupingjiaModel', {
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
	wuyeshoufei: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '物业收费'
	},
	weishengqingkuang: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '卫生情况'
	},
	lvhuachengdu: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '绿化程度'
	},
	anbaocuoshi: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '安保措施'
	},
	weixiuxiangying: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '维修响应'
	},
	gonggongsheshi: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '公共设施'
	},
	fuwutaidu: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '服务态度'
	},
	tousuchuli: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '投诉处理'
	},
	huanjingzhengjie: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '环境整洁'
	},
	zonghepingjia: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '综合评价'
	},
	pingjiashijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('pingjiashijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '评价时间'
	},
	pingjiatupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '评价图片'
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
	tableName: 'fuwupingjia'
})

export default FuwupingjiaModel
