import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 催缴
const CuijiaoModel = sequelize.define('CuijiaoModel', {
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
	jiaofeinianyue: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '缴费年月'
	},
	jiaofeileixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '缴费类型'
	},
	jiaofeijine: {
		type: DataTypes.DOUBLE,
		defaultValue: 0,
		allowNull: true,
		comment: '缴费金额'
	},
	piaoju: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '票据'
	},
	cuijiaoshijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('cuijiaoshijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '催缴时间'
	},
	cuijiaoneirong: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '催缴内容'
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
	tableName: 'cuijiao'
})

export default CuijiaoModel
