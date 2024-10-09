import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 报修工单
const BaoxiugongdanModel = sequelize.define('BaoxiugongdanModel', {
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
	jiequshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('jiequshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '接取时间'
	},
	gongdanjindu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '工单进度'
	},
	weixiuzhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '维修状态'
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
	weixiuyuan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '维修员'
	},
	weixiuyuanshouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '维修员手机'
	},
	yujishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('yujishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '预计时间'
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
	tableName: 'baoxiugongdan'
})

export default BaoxiugongdanModel
