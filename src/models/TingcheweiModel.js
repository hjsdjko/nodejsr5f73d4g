import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 停车位
const TingcheweiModel = sequelize.define('TingcheweiModel', {
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
	yuyuezhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '预约状态'
	},
	cheweixiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '车位详情'
	},
	riqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('riqi')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '日期'
	},
	shijianduan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '时间段'
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
	tableName: 'tingchewei'
})

export default TingcheweiModel
