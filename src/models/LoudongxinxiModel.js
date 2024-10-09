import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 楼栋信息
const LoudongxinxiModel = sequelize.define('LoudongxinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	loudongmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '楼栋名称'
	},
	loudongdanyuan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '楼栋单元'
	},
	jianzhumianji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '建筑面积'
	},
	tudizhenghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '土地证号'
	},
	cengshu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '层数'
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
	tableName: 'loudongxinxi'
})

export default LoudongxinxiModel
