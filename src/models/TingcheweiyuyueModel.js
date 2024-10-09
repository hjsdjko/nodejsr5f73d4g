import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 停车位预约
const TingcheweiyuyueModel = sequelize.define('TingcheweiyuyueModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	cheweimingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '车位名称'
	},
	cheweitupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '车位图片'
	},
	jiage: {
		type: DataTypes.DOUBLE,
		defaultValue: 0,
		allowNull: true,
		comment: '价格'
	},
	cheweididian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '车位地点'
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
	riqi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '日期'
	},
	shijianduan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '时间段'
	},
	quxiaozhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '取消状态'
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
	tableName: 'tingcheweiyuyue'
})

export default TingcheweiyuyueModel
