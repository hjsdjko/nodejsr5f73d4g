import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 友情链接
const FriendlinkModel = sequelize.define('FriendlinkModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	name: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '名称'
	},
	picture: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	url: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '链接'
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
	tableName: 'friendlink'
})

export default FriendlinkModel
