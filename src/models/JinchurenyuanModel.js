import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 进出人员
const JinchurenyuanModel = sequelize.define('JinchurenyuanModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
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
	jinrushijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('jinrushijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '进入时间'
	},
	likaishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('likaishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '离开时间'
	},
	renyuanxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '人员姓名'
	},
	renyuanleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '人员类型'
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
	tableName: 'jinchurenyuan'
})

export default JinchurenyuanModel
