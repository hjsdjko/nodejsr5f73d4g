import { version } from '../../package.json'
import { Router } from 'express'
import { Sequelize, Op,literal, QueryTypes } from 'sequelize'
import sequelize from '../models/sequelize'
import toRes from '../lib/toRes'
import BaoxiugongdanModel from '../models/BaoxiugongdanModel'
import util from '../lib/util'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import ConfigModel from '../models/ConfigModel'
import https from 'https'
import request from 'request'
import qs from 'querystring'
import path from 'path'
import fs from 'fs'
import config from '../config.json'
const redis = require('redis')




export default ({ config, db }) => {
	let api = Router()


	// 分页接口（后端）
	api.get('/page', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let baoxiumingcheng = req.query.baoxiumingcheng
			if (baoxiumingcheng) {

				if (baoxiumingcheng.indexOf('%') != -1) {
					where.baoxiumingcheng = {
						[Op.like]: baoxiumingcheng
					}
				} else {
					where.baoxiumingcheng = {
						[Op.eq]: baoxiumingcheng
					}
				}
			}
			let tupian = req.query.tupian
			if (tupian) {

				if (tupian.indexOf('%') != -1) {
					where.tupian = {
						[Op.like]: tupian
					}
				} else {
					where.tupian = {
						[Op.eq]: tupian
					}
				}
			}
			let yezhuzhanghao = req.query.yezhuzhanghao
			if (yezhuzhanghao) {

				if (yezhuzhanghao.indexOf('%') != -1) {
					where.yezhuzhanghao = {
						[Op.like]: yezhuzhanghao
					}
				} else {
					where.yezhuzhanghao = {
						[Op.eq]: yezhuzhanghao
					}
				}
			}
			let yezhuxingming = req.query.yezhuxingming
			if (yezhuxingming) {

				if (yezhuxingming.indexOf('%') != -1) {
					where.yezhuxingming = {
						[Op.like]: yezhuxingming
					}
				} else {
					where.yezhuxingming = {
						[Op.eq]: yezhuxingming
					}
				}
			}
			let yezhushouji = req.query.yezhushouji
			if (yezhushouji) {

				if (yezhushouji.indexOf('%') != -1) {
					where.yezhushouji = {
						[Op.like]: yezhushouji
					}
				} else {
					where.yezhushouji = {
						[Op.eq]: yezhushouji
					}
				}
			}
			let jiequshijian = req.query.jiequshijian
			if (jiequshijian) {

				if (jiequshijian.indexOf('%') != -1) {
					where.jiequshijian = {
						[Op.like]: jiequshijian
					}
				} else {
					where.jiequshijian = {
						[Op.eq]: jiequshijian
					}
				}
			}
			let gongdanjindu = req.query.gongdanjindu
			if (gongdanjindu) {

				if (gongdanjindu.indexOf('%') != -1) {
					where.gongdanjindu = {
						[Op.like]: gongdanjindu
					}
				} else {
					where.gongdanjindu = {
						[Op.eq]: gongdanjindu
					}
				}
			}
			let weixiuzhuangtai = req.query.weixiuzhuangtai
			if (weixiuzhuangtai) {

				if (weixiuzhuangtai.indexOf('%') != -1) {
					where.weixiuzhuangtai = {
						[Op.like]: weixiuzhuangtai
					}
				} else {
					where.weixiuzhuangtai = {
						[Op.eq]: weixiuzhuangtai
					}
				}
			}
			let guanlizhanghao = req.query.guanlizhanghao
			if (guanlizhanghao) {

				if (guanlizhanghao.indexOf('%') != -1) {
					where.guanlizhanghao = {
						[Op.like]: guanlizhanghao
					}
				} else {
					where.guanlizhanghao = {
						[Op.eq]: guanlizhanghao
					}
				}
			}
			let guanlixingming = req.query.guanlixingming
			if (guanlixingming) {

				if (guanlixingming.indexOf('%') != -1) {
					where.guanlixingming = {
						[Op.like]: guanlixingming
					}
				} else {
					where.guanlixingming = {
						[Op.eq]: guanlixingming
					}
				}
			}
			let weixiuyuan = req.query.weixiuyuan
			if (weixiuyuan) {

				if (weixiuyuan.indexOf('%') != -1) {
					where.weixiuyuan = {
						[Op.like]: weixiuyuan
					}
				} else {
					where.weixiuyuan = {
						[Op.eq]: weixiuyuan
					}
				}
			}
			let weixiuyuanshouji = req.query.weixiuyuanshouji
			if (weixiuyuanshouji) {

				if (weixiuyuanshouji.indexOf('%') != -1) {
					where.weixiuyuanshouji = {
						[Op.like]: weixiuyuanshouji
					}
				} else {
					where.weixiuyuanshouji = {
						[Op.eq]: weixiuyuanshouji
					}
				}
			}
			let yujishijian = req.query.yujishijian
			if (yujishijian) {

				if (yujishijian.indexOf('%') != -1) {
					where.yujishijian = {
						[Op.like]: yujishijian
					}
				} else {
					where.yujishijian = {
						[Op.eq]: yujishijian
					}
				}
			}
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'yezhu') {
				where.yezhuzhanghao = {
					[Op.eq]: req.session.userinfo === undefined ? jwt.decode(req.headers.token).yezhuzhanghao : req.session.userinfo.yezhuzhanghao
				}
				if (where['userid'] != undefined) {
					delete where.userid
				}
			}
			if(tableName == 'wuyeguanliyuan') {
				where.guanlizhanghao = {
					[Op.eq]: req.session.userinfo === undefined ? jwt.decode(req.headers.token).guanlizhanghao : req.session.userinfo.guanlizhanghao
				}
				if (where['userid'] != undefined) {
					delete where.userid
				}
			}

			let orders =[]
			const sortList = sort.split(",")
			const orderList = order.split(",")
			sortList.forEach((item, index) => {
				orders.push([item,orderList[index]])
			  });
			let result = await BaoxiugongdanModel.findAndCountAll({
				order: [orders],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			res.status(500).render(err)
			//toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	  // 分页接口（前端）
	api.get('/lists', async (req, res) => {

		try {
			let result = await BaoxiugongdanModel.findAll()
			toRes.record(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})

	// 查询单条记录（前端）
	api.get('/query', async (req, res) => {

		try {
			const dictionary = {};
			for (let key in req.query) {
				dictionary[key] = req.query[key];
			}
			let result = await BaoxiugongdanModel.findOne({where:dictionary})
			
			toRes.record(res, 0, result)
		} catch(err) {
			res.status(500).render(err)
		}
	})

    // 分页接口（前端）
	api.get('/list', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let baoxiumingcheng = req.query.baoxiumingcheng
			if (baoxiumingcheng) {

				if (baoxiumingcheng.indexOf('%') != -1) {
					where.baoxiumingcheng = {
						[Op.like]: baoxiumingcheng
					}
				} else {
					where.baoxiumingcheng = {
						[Op.eq]: baoxiumingcheng
					}
				}
			}
			let yezhuxingming = req.query.yezhuxingming
			if (yezhuxingming) {

				if (yezhuxingming.indexOf('%') != -1) {
					where.yezhuxingming = {
						[Op.like]: yezhuxingming
					}
				} else {
					where.yezhuxingming = {
						[Op.eq]: yezhuxingming
					}
				}
			}
			let weixiuzhuangtai = req.query.weixiuzhuangtai
			if (weixiuzhuangtai) {

				if (weixiuzhuangtai.indexOf('%') != -1) {
					where.weixiuzhuangtai = {
						[Op.like]: weixiuzhuangtai
					}
				} else {
					where.weixiuzhuangtai = {
						[Op.eq]: weixiuzhuangtai
					}
				}
			}


			let orders =[]
			const sortList = sort.split(",")
			const orderList = order.split(",")
			sortList.forEach((item, index) => {
				orders.push([item,orderList[index]])
			  });
			let result = await BaoxiugongdanModel.findAndCountAll({
				order: [orders],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})


	// 保存接口（后端）
	api.post('/save', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})



			const userinfo = await BaoxiugongdanModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 保存接口（前端）
	api.post('/add', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})

			if (jwt.decode(req.headers.token) == null) {
				toRes.session(res, 401, '请登录后再操作', '', 401)
			}





			const userinfo = await BaoxiugongdanModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 更新接口
	api.post('/update', async (req, res) => {

		try {


			await BaoxiugongdanModel.update(req.body, {
				where: {
				  id: req.body.id || 0
				}
			})


			toRes.session(res, 0, '编辑成功！')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 删除接口
	api.post('/delete', async (req, res) => {

		try {

			await BaoxiugongdanModel.destroy({
				where: {
				  id: {
					[Op.in]: req.body
				  }
				}
			})

			toRes.session(res, 0, '删除成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 详情接口（后端）
	api.all('/info/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await BaoxiugongdanModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})


    // 详情接口（前端）
	api.all('/detail/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await BaoxiugongdanModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取需要提醒的记录数接口
	api.get('/remind/:columnName/:type', async (req, res) => {

        let where = ' 1=1 '
		let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
        if(tableName == 'yezhu') {
            where += " AND yezhuzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
        }
        if(tableName == 'wuyeguanliyuan') {
            where += " AND guanlizhanghao = '" + jwt.decode(req.headers.token).username + "' ";
        }

		try {

			let sql = 'SELECT 0 AS count'
			
			if (req.params.type == 1) {
				if (req.query.remindstart) sql = "SELECT COUNT(*) AS count FROM baoxiugongdan WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "'"
				if (req.query.remindend) sql = "SELECT COUNT(*) AS count FROM baoxiugongdan WHERE " + where + " AND " + req.params.columnName + " <= '" + req.query.remindend + "'"

				if (req.query.remindstart && req.query.remindend) {
					sql = "SELECT COUNT(*) AS count FROM baoxiugongdan WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "' AND " + req.params.columnName + " <= '" + req.query.remindend + "'"
				}
			}

			if (req.params.type == 2) {
				if (req.query.remindstart) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM baoxiugongdan WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "'"
				}
				if (req.query.remindend) {
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM baoxiugongdan WHERE " + where + " AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}

				if (req.query.remindstart && req.query.remindend) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM baoxiugongdan WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "' AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}
			}

			const results = await sequelize.query(sql, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			})

			toRes.count(res, 0, results.count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})










	// 分组统计接口
	api.get('/group/:columnName', async (req, res) => {

		try {

			let sql = ""
			let columnName = req.params.columnName
			// let tableName = "baoxiugongdan"
			let where = " WHERE 1 = 1 "
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'yezhu') {
				where += " AND yezhuzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if(tableName == 'wuyeguanliyuan') {
				where += " AND guanlizhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			sql = "SELECT COUNT(*) AS total, " + columnName + " FROM baoxiugongdan " + where + " GROUP BY " + columnName 
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 统计指定字段
	api.get('/value/:xColumnName/:yColumnName', async (req, res) => {

		try {

			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let where = " WHERE 1 = 1 "
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(tableName == 'yezhu') {
				where += " AND yezhuzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if(tableName == 'wuyeguanliyuan') {
				where += " AND guanlizhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("baoxiugongdan" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

			sql = "SELECT " + xColumnName + ", SUM(" + yColumnName + ") AS total FROM baoxiugongdan " + where + " GROUP BY " + xColumnName + " DESC"
			
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// (按值统计）时间统计类型(多)
	api.get('/valueMul/:xColumnName', async (req, res) => {

		try {	
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.query.yColumnNameMul
			let tableName = "baoxiugongdan"
			let where = " WHERE 1 = 1 "
			let userTableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(userTableName == 'yezhu') {
				where += " AND yezhuzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if(userTableName == 'wuyeguanliyuan') {
				where += " AND guanlizhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			const promises = yColumnName.split(',').map(async(item)=>{
				sql = "SELECT " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY " + xColumnName;
				const results = await sequelize.query(sql, {
					plain: false,
					raw: true,
					type: QueryTypes.SELECT
				});
				return results;
			})
            	
			toRes.record(res, 0, await Promise.all(promises))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// (按值统计）时间统计类型(多)
	api.get('/valueMul/:xColumnName/:timeStatType', async (req, res) => {

		try {	
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.query.yColumnNameMul
			let timeStatType = req.params.timeStatType
			let tableName = "baoxiugongdan"
			let where = " WHERE 1 = 1 "
			let userTableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(userTableName == 'yezhu') {
				where += " AND yezhuzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if(userTableName == 'wuyeguanliyuan') {
				where += " AND guanlizhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}

			const promises = yColumnName.split(',').map(async(item)=>{
				sql = "SELECT " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY " + xColumnName;
				if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
            	    if (timeStatType == "日")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d')";
            	    if (timeStatType == "月")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')";
            	    if (timeStatType == "年")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')";
            	} else {
            	    if (timeStatType == "日")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)";
            	    if (timeStatType == "月")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)";
            	    if (timeStatType == "年")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)";
            	}
				const results = await sequelize.query(sql, {
					plain: false,
					raw: true,
					type: QueryTypes.SELECT
				});
				return results;
			})
            	
			toRes.record(res, 0, await Promise.all(promises))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 按日期统计
	api.get('/value/:xColumnName/:yColumnName/:timeStatType', async (req, res) => {

		try {
			
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let timeStatType = req.params.timeStatType
			let tableName = "baoxiugongdan"
			let where = " WHERE 1 = 1 "
			let userTableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(userTableName == 'yezhu') {
				where += " AND yezhuzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if(userTableName == 'wuyeguanliyuan') {
				where += " AND guanlizhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("baoxiugongdan" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

            if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d')";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')";
            } else {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)";
            }
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})















	return api
}
