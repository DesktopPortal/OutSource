import {takeEvery, takeLatest} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import ApiClient from '../../utils/apiClient'
import * as actionTypes from '../constants'
import {getTradePlanningListEnd} from '../actions'
import appUtils from '../../utils/appUtils'
import WebApiConfig from '../constants/webapiConfig';
import getApiResult from '../../utils/sagaUtil';
import { notification } from 'antd';

const actionUtils = appUtils(actionTypes.APPNAME)

function delay(interval) {
    return new Promise(function (resolve) {
        setTimeout(resolve, interval);
    });
}


//获取业态列表
export function* getPlanningListAsync(action) {
    let result = {isOk: false, extension: [], msg: '业态规划数据获取失败！'};
    let level = action.payload.level; //获取级别 1城市 2县区 3商圈
    let url, condition, parentCode;
    if (level !== 1) {
        parentCode = action.payload.parent; //上级区域编码
        url = WebApiConfig.area.ChildList + parentCode
    } else {
        condition = {levels: [level]};
        url = WebApiConfig.area.List;
    }
    try {
        let res;
        level !== 1 ? res = yield call(ApiClient.get, url) : res = yield call(ApiClient.post, url, condition);
        res.level = level;
        res.parent = parentCode;
        getApiResult(res, result);
        yield put(actionUtils.action(getTradePlanningListEnd, res));
    } catch (e) {
        result.msg = '业态规划列表查询接口异常!';
    }
    if (!result.isOk) {
        notification.error({
            description: result.msg,
            duration: 3
        });
    }
}

// 删除城市
export function* delAreaAsync(action) {
    let level = action.payload.level; //获取级别 1城市 2县区 3商圈
    let code = action.payload.code; //上级区域编码
    yield put(actionUtils.action(delAreaStart, {level: level, code: code}));
    let url = WebApiConfig.area.Delete;
    try {
        let res = yield call(ApiClient.post, url, [code])
        res.level = level;
        res.areaCode = code;
        yield put(actionUtils.action(delAreaFinish, res));
    } catch (e) {
        yield put(actionUtils.action(delAreaFinish, {code: '1', message: '失败', level: level, areaCode: code}));
    }

}

// 保存城市
export function* saveAreaAsync(action) {
    let areaGroup = action.payload.entity;
    let level = action.payload.level; //获取级别 1城市 2县区 3商圈
    let parent = action.payload.parent; //上级区域编码
    let op = action.payload.op; // 1 添加 2 修改
    let res;
    yield put(actionUtils.action(saveAreaStart, {level: level, entity: areaGroup}));
    let url = WebApiConfig.area.Base;
    try {
        let method = (op === 1 ? 'POST' : 'PUT');
        res = op === 1 ? yield call(ApiClient.post, url, areaGroup) : yield call(ApiClient.post, url + '/' + areaGroup.code, areaGroup, null, 'PUT')
        res.level = level;
        res.entity = areaGroup;
        yield put(actionUtils.action(saveAreaFinish, res));
    } catch (e) {
        yield put(actionUtils.action(saveAreaFinish, {code: '1', message: '失败', level: level}));
    }

}

export default function* run() {
    yield takeLatest(actionUtils.getActionType(actionTypes.TRADE_PLANNING_GETLIST), getPlanningListAsync);
    yield takeLatest(actionUtils.getActionType(actionTypes.AREA_DEL_ASYNC), delAreaAsync);
    yield takeLatest(actionUtils.getActionType(actionTypes.AREA_SAVE_ASYNC), saveAreaAsync);
}