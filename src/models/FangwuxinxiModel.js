import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 房屋信息
const FangwuxinxiModel = sequelize.define('FangwuxinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	fangchanbianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '房产编号'
	},
	loudongmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '楼栋名称'
	},
	jianzaomianji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '建造面积(㎡)'
	},
	fangchanxingzhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '房产性质'
	},
	fanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '房号'
	},
	fangwuzhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '房屋状态'
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
	tableName: 'fangwuxinxi'
})

export default FangwuxinxiModel
