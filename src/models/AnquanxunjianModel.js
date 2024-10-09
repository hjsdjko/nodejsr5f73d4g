import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 安全巡检
const AnquanxunjianModel = sequelize.define('AnquanxunjianModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	jianchariqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('jianchariqi')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '检查日期'
	},
	shebeizhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '设备状态'
	},
	yinhuanbuwei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '隐患部位'
	},
	yinhuanleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '隐患类型'
	},
	yinhuanchengdu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '隐患程度'
	},
	chuliyijian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '处理意见'
	},
	jianchabaogao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '检查报告'
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
		comment: '检查人员'
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
	tableName: 'anquanxunjian'
})

export default AnquanxunjianModel
