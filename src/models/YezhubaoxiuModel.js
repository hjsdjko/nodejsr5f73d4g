import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 业主报修
const YezhubaoxiuModel = sequelize.define('YezhubaoxiuModel', {
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
	tupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	baoxiuneirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '报修内容'
	},
	baoxiuriqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('baoxiuriqi')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '报修日期'
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
	loufanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '楼房号'
	},
	zhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '状态'
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
	tableName: 'yezhubaoxiu'
})

export default YezhubaoxiuModel
