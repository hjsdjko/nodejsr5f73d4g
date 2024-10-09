import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 投诉处理
const TousuchuliModel = sequelize.define('TousuchuliModel', {
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
	chulijieguo: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '处理结果'
	},
	gaijincuoshi: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '改进措施'
	},
	chulishijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('chulishijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '处理时间'
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
	tableName: 'tousuchuli'
})

export default TousuchuliModel
