import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 访客登记
const FangkedengjiModel = sequelize.define('FangkedengjiModel', {
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
	fangkexingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '访客姓名'
	},
	lianxifangshi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系方式'
	},
	laifangshiyou: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '来访事由'
	},
	linshitingchewei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '临时停车位'
	},
	diantiquanxian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '电梯权限'
	},
	fangketupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '访客图片'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '待审核',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
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
	tableName: 'fangkedengji'
})

export default FangkedengjiModel
