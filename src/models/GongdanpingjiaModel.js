import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 工单评价
const GongdanpingjiaModel = sequelize.define('GongdanpingjiaModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	baoxiumingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '报修名称'
	},
	wanchengtupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '完成图片'
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
	yezhushouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '业主手机'
	},
	pingjia: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '评价'
	},
	weixiuyuan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '维修员'
	},
	pingjianeirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '评价内容'
	},
	pingjiashijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('pingjiashijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '评价时间'
	},
	guanlizhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '管理账号'
	},
	guanlixingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '管理姓名'
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
	tableName: 'gongdanpingjia'
})

export default GongdanpingjiaModel
