export const ACTION_ROUTE = "HouseResourceIndex";
// 列表的展示切换
export const CHANGE_SHOW_GROUP = 'CHANGE_SHOW_GROUP';

//字典项获取
export const DIC_GET_PARLIST = 'DIC_GET_PARLIST';
export const DIC_GET_PARLIST_COMPLETE = 'DIC_GET_PARLIST_COMPLETE';


export const DIC_GET_AREA = 'DIC_GET_AREA';//获取片区信息
export const DIC_GET_AREA_COMPLETE = 'DIC_GET_AREA_COMPLETE';

//楼盘相关
export const BUILDING_GET_DETAIL = 'BUILDING_GET_DETAIL';//楼盘整体信息

export const BUILDING_BASIC_SAVE = 'BUILDING_BASIC_SAVE';//楼盘基础信息保存
export const BUILDING_BASIC_ADD = 'BUILDING_BASIC_ADD';//楼盘基础信息添加
export const BUILDING_BASIC_EDIT = 'BUILDING_BASIC_EDIT';//楼盘基础信息编辑
export const BUILDING_BASIC_VIEW = 'BUILDING_BASIC_VIEW';

export const BUILDING_SUPPORT_SAVE = 'BUILDING_SUPPORT_SAVE';//楼盘配套信息保存
export const BUILDING_SUPPORT_ADD = 'BUILDING_SUPPORT_ADD';
export const BUILDING_SUPPORT_EDIT = 'BUILDING_SUPPORT_EDIT';
export const BUILDING_SUPPORT_VIEW = 'BUILDING_SUPPORT_VIEW';

export const BUILDING_RELSHOP_SAVE = 'BUILDING_RELSHOP_SAVE';//楼盘商铺信息保存
export const BUILDING_RELSHOP_ADD = 'BUILDING_RELSHOP_ADD';
export const BUILDING_RELSHOP_EDIT = 'BUILDING_RELSHOP_EDIT';
export const BUILDING_RELSHOP_VIEW = 'BUILDING_RELSHOP_VIEW';

export const BUILDING_PROJECT_SAVE = 'BUILDING_PROJECT_SAVE';//楼盘项目简介保存
export const BUILDING_PROJECT_EDIT = 'BUILDING_PROJECT_EDIT';
export const BUILDING_PROJECT_VIEW = 'BUILDING_PROJECT_VIEW';

export const BUILDING_PICTURE_SAVE = 'BUILDING_PICTURE_SAVE';//附件图片保存
export const BUILDING_PICTURE_EDIT = 'BUILDING_PICTURE_EDIT';
export const BUILDING_PICTURE_VIEW = 'BUILDING_PICTURE_VIEW';

export const BUILDING_FILE_SAVE = 'BUILDING_PICTURE_SAVE';//附件文件保存
export const BUILDING_FILE_EDIT = 'BUILDING_PICTURE_EDIT';
export const BUILDING_FILE_VIEW = 'BUILDING_PICTURE_VIEW';

export const RULES_SAVE = 'RULES_SAVE';//报备规则保存
export const RULES_EDIT = 'RULES_EDIT';
export const RULES_VIEW = 'RULES_VIEW';

export const RULES_TEMPLATE_SAVE = 'RULES_TEMPLATE_SAVE';//报备模板保存
export const RULES_TEMPLATE_EDIT = 'RULES_TEMPLATE_EDIT';
export const RULES_TEMPLATE_VIEW = 'RULES_TEMPLATE_VIEW';

export const COMMISSION_SAVE = 'COMMISSION_SAVE';//佣金方案保存
export const COMMISSION_EDIT = 'COMMISSION_EDIT';
export const COMMISSION_VIEW = 'COMMISSION_VIEW';


// 商铺相关
export const SHOP_GET_DETAIL = 'SHOP_GET_DETAIL';//商铺整体信息

export const BUILDING_GET_LIST_ASYNC = 'BUILDING_GET_LIST_ASYNC';//楼盘列表
export const BUILDING_LIST_START = 'BUILDING_LIST_START';
export const BUILDING_LIST_FINISH = 'BUILDING_LIST_FINISH';

export const SHOP_BASIC_SAVE_ASYNC = 'SHOP_BASIC_SAVE_ASYNC';//商铺基础信息保存
export const SHOP_BASIC_SAVE_START = 'SHOP_BASIC_SAVE_START';
export const SHOP_BASIC_SAVE_FINISH = 'SHOP_BASIC_SAVE_FINISH';

export const SHOP_LEASE_SAVE_ASYNC = 'SHOP_LEASE_SAVE_ASYNC';//商铺租约信息保存
export const SHOP_LEASE_SAVE_START = 'SHOP_LEASE_SAVE_START';
export const SHOP_LEASE_SAVE_FINISH = 'SHOP_LEASE_SAVE_FINISH';

export const SHOP_SUPPORT_SAVE_ASYNC = 'SHOP_SUPPORT_SAVE_ASYNC';//商铺配套设施信息保存
export const SHOP_SUPPORT_SAVE_START = 'SHOP_SUPPORT_SAVE_START';
export const SHOP_SUPPORT_SAVE_FINISH = 'SHOP_SUPPORT_SAVE_FINISH';

export const SHOP_BASIC_EDIT = 'SHOP_BASIC_EDIT';//商铺基础信息编辑
export const SHOP_BASIC_VIEW = 'SHOP_BASIC_VIEW';

export const SHOP_LEASE_EDIT = 'SHOP_LEASE_EDIT';//商铺租约信息编辑
export const SHOP_LEASE_VIEW = 'SHOP_LEASE_VIEW';

export const SHOP_SUPPORT_EDIT = 'SHOP_SUPPORT_EDIT';//商铺配套设施信息编辑
export const SHOP_SUPPORT_VIEW = 'SHOP_SUPPORT_VIEW';


export const PICTURE_SAVE_ASYNC = 'PICTURE_SAVE_ASYNC'; // 附件(图片)信息

export const SHOPS_INFO_SUBMIT = 'SHOPS_INFO_SUBMIT'; // 提交商铺信息
export const SHOPS_INFO_SUBMIT_START = 'SHOPS_INFO_SUBMIT_START';
export const SHOPS_INFO_SUBMIT_FINISH = 'SHOPS_INFO_SUBMIT_FINISH';

export const SHOPS_GET_LIST_ASYNC = 'SHOPS_GET_LIST_ASYNC';//商铺列表
export const SHOPS_LIST_START = 'SHOPS_LIST_START';
export const SHOPS_LIST_FINISH = 'SHOPS_LIST_FINISH';

export const BUILDING_GET_MYLIST_ASYNC = 'BUILDING_GET_MYLIST_ASYNC'; // 自己负责的楼盘
export const BUILDING_MYLIST_START = 'BUILDING_MYLIST_START';
export const BUILDING_MYLIST_FINISH = 'BUILDING_MYLIST_FINISH';

export const GOTO_BUILD_PAGE = 'GOTO_BUILD_PAGE';
export const GOTO_SHOP_PAGE = 'GOTO_SHOP_PAGE';
export const GOTO_ADD_SHOP = 'GOTO_ADD_SHOP';
export const CHANGE_MYADD = 'CHANGE_MYADD';
export const GOTO_THIS_SHOP = 'GOTO_THIS_SHOP';
export const GOTO_THIS_SHOP_START = 'GOTO_THIS_SHOP_START';
export const GOTO_THIS_SHOP_FINISH = 'GOTO_THIS_SHOP_FINISH';
export const GOTO_THIS_BUILD = 'GOTO_THIS_BUILD';
export const GOTO_THIS_BUILD_START = 'GOTO_THIS_BUILD_START';
export const GOTO_THIS_BUILD_FINISH = 'GOTO_THIS_BUILD_FINISH';
export const GOTO_CHANGE_MYADD = 'GOTO_CHANGE_MYADD';

export const DELETE_SHOP = 'DELETE_SHOP';
export const DELETE_START = 'DELETE_START';
export const DELETE_FINISH = 'DELETE_FINISH';

export const BUILD_INFO_SUBMIT = 'BUILD_INFO_SUBMIT';
export const BUILD_INFO_SUBMIT_START = 'BUILD_INFO_SUBMIT_START';
export const BUILD_INFO_SUBMIT_FINISH = 'BUILD_INFO_SUBMIT_FINISH';

export const LOOK_MORE = 'LOOK_MORE';
export const ADD_ACTIVE = 'ADD_ACTIVE';
export const MYSEARCH_FINISH = 'MYSEARCH_FINISH';


export const SAVE_SELECTED_ROWS = 'SAVE_SELECTED_ROWS';
export const BATCH_BUILDING_SAVE_ASYNC = 'BATCH_BUILDING_SAVE_ASYNC'; // 保存楼栋批次信息
export const BATCH_BUILDING_SAVE__START = 'BATCH_BUILDING_SAVE__START';
export const BATCH_BUILDING_SAVE__FINISH = 'BATCH_BUILDING_SAVE__FINISH';
export const BATCH_BUILDING_EDIT = 'BATCH_BUILDING_EDIT'; //楼栋批次信息编辑
export const BATCH_BUILDING_VIEW = 'BATCH_BUILDING_VIEW';
export const BATCH_BUILDING_ADD = 'BATCH_BUILDING_ADD';

// 2017/11/23
export const COMFIRM_CREATE_BUDINGNO = 'COMFIRM_CREATE_BUDINGNO';
export const CHANGE_CELL = 'CHANGE_CELL';


export const SAVE_PICTURE_ASYNC = 'SAVE_PICTURE_ASYNC'; // 上传图片
export const UPLOAD_PIC_FINISH = 'UPLOAD_PIC_FINISH';
export const DELETE_PICTURE_ASYNC = 'DELETE_PICTURE_ASYNC'; // 删除图片


export const SHOP_PIC_VIEW = 'SHOP_PIC_VIEW';
export const SHOP_PIC_EDIT = 'SHOP_PIC_EDIT';

export const BUILDING_PIC_VIEW = 'BUILDING_PIC_VIEW';
export const BUILDING_PIC_EDIT = 'BUILDING_PIC_EDIT';
export const SAVE_COMPLETE_FILE_LIST = 'SAVE_COMPLETE_FILE_LIST';
export const SAVE_DELETE_PIC_LIST = 'SAVE_DELETE_PIC_LIST';


// 2017-11-28 驻场首页
export const GET_MYCUSTOMER_INFO = 'GET_MYCUSTOMER_INFO';
export const CHANGE_NOWLIST_INFO = 'CHANGE_NOWLIST_INFO';
export const SEARCH_MYBUILDING_LIST = 'SEARCH_MYBUILDING_LIST';
export const SEARCH_FINISH = 'SEARCH_FINISH';
export const GET_MYCUSTOMOR_TRANSACTIONS = 'GET_MYCUSTOMOR_TRANSACTIONS';
export const CUSTOMOR_TRANSACTIONS_FINISH = 'CUSTOMOR_TRANSACTIONS_FINISH';
export const GET_MYBUILDING_LIST = 'GET_MYBUILDING_LIST';
export const MYLIST_START = 'MYLIST_START';
export const MYLIST_FINISH = 'MYLIST_FINISH';

export const GET_THIS_BUILDING = 'GET_THIS_BUILDING';
export const GET_THIS_BUILDING_START = 'GET_THIS_BUILDING_START';
export const GET_THIS_BUILDING_FINISH = 'GET_THIS_BUILDING_FINISH';

export const COMFIRM_ASYNC = 'COMFIRM_ASYNC';
export const COMFIRM_FINISH = 'COMFIRM_FINISH';
export const LOOK_ASYNC = 'LOOK_ASYNC';
export const LOOK_FINISH = 'LOOK_FINISH';
export const REPORT_ASYNC = 'REPORT_ASYNC';
export const REPORT_FINISH = 'REPORT_FINISH';
export const STATUS_COUNT = 'STATUS_COUNT';
export const COUNT_FINISH = 'COUNT_FINISH';


// 2017-12-8 成交信息
export const SHOW_EDIT_MODAL = 'SHOW_EDIT_MODAL';
export const HIDE_EDIT_MODAL = 'HIDE_EDIT_MODAL';
export const CUSTOMER_DEAL_ASYNC = 'CUSTOMER_DEAL_ASYNC';
export const CUSTOMER_DEAL_ASYNC_START = 'CUSTOMER_DEAL_ASYNC_START';
export const CUSTOMER_DEAL_ASYNC_FINISH = 'CUSTOMER_DEAL_ASYNC_FINISH';

// 2017-12-9 销控中心
export const SHOW_TIME_DIALOG_MODAL = 'SHOW_TIME_DIALOG_MODAL';
export const CANCEL_TIME_DIALOG_MODAL = 'CANCEL_TIME_DIALOG_MODAL';
export const SAVE_TIME_ASYNC = 'SAVE_TIME_ASYNC';
export const SAVE_TIME_START = 'SAVE_TIME_START';
export const SAVE_TIME_FINISH = 'SAVE_TIME_FINISH';
export const GET_SHOPS_SALE_STATUS = 'GET_SHOPS_SALE_STATUS';
export const GET_SHOPS_SALE_STATUS_START = 'GET_SHOPS_SALE_STATUS_START';
export const GET_SHOPS_SALE_STATUS_FINISH = 'GET_SHOPS_SALE_STATUS_FINISH';
export const GET_CUSTOMER_DEAL = 'GET_CUSTOMER_DEAL';
export const GET_CUSTOMER_DEAL_START = 'GET_CUSTOMER_DEAL_START';
export const GET_CUSTOMER_DEAL_FINISH = 'GET_CUSTOMER_DEAL_FINISH';
export const GET_SALES_TATISTICS = 'GET_SALES_TATISTICS';
export const GET_SALES_TATISTICS_START = 'GET_SALES_TATISTICS_START';
export const GET_SALES_TATISTICS_FINISH = 'GET_SALES_TATISTICS_FINISH';
export const GET_MAKE_DEAL_CUSTOMER_INFO = 'GET_MAKE_DEAL_CUSTOMER_INFO';
export const GET_MAKE_DEAL_CUSTOMER_INFO_START = 'GET_MAKE_DEAL_CUSTOMER_INFO_START';
export const GET_MAKE_DEAL_CUSTOMER_INFO_END = 'GET_MAKE_DEAL_CUSTOMER_INFO_END';
export const GET_REPORT_CUSTOMER_DEAL = 'GET_REPORT_CUSTOMER_DEAL';
export const GET_REPORT_CUSTOMER_DEAL_START = 'GET_REPORT_CUSTOMER_DEAL_START';
export const GET_REPORT_CUSTOMER_DEAL_FINISH = 'GET_REPORT_CUSTOMER_DEAL_FINISH';

// 2017-12-11 驻场首页，批量向开发商报备
export const SHOW_BATCH_REPORT_MODAL = 'SHOW_BATCH_REPORT_MODAL';
export const HIDE_BATCH_REPORT_MODAL = 'HIDE_BATCH_REPORT_MODAL';
export const SHOW_TEMPLATE_MODAL = 'SHOW_TEMPLATE_MODAL';
export const HIDE_TEMPLATE_MODAL = 'HIDE_TEMPLATE_MODAL';
export const CHANGE_CHECKED = 'CHANGE_CHECKED';
export const SAVE_TEMPLATE_ROWS = 'SAVE_TEMPLATE_ROWS';
export const SEARCH_VALPHONE = 'SEARCH_VALPHONE';
export const SEARCH_VALPHONE_START = 'SEARCH_VALPHONE_START';
export const SEARCH_VALPHONE_END = 'SEARCH_VALPHONE_END';

// 2017-12-13 房源审核 
export const GET_HOUSE_AUDIT_BUILDING_LIST_ASYNC = 'GET_HOUSE_AUDIT_BUILDING_LIST_ASYNC';
export const GET_HOUSE_AUDIT_BUILDING_LIST_START = 'GET_HOUSE_AUDIT_BUILDING_LIST_START';
export const GET_HOUSE_AUDIT_BUILDING_LIST_FINISH = 'GET_HOUSE_AUDIT_BUILDING_LIST_FINISH';
export const GET_HOUSE_AUDIT_SHOPS_LIST_ASYNC = 'GET_HOUSE_AUDIT_SHOPS_LIST_ASYNC';
export const GET_HOUSE_AUDIT_SHOPS_LIST_START = 'GET_HOUSE_AUDIT_SHOPS_LIST_START';
export const GET_HOUSE_AUDIT_SHOPS_LIST_FINISH = 'GET_HOUSE_AUDIT_SHOPS_LIST_FINISH';

// 2017-12-19 驻场管理
export const EDIT_ZC_MANAGER = 'EDIT_ZC_MANAGER';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const SAVE_PERSON = 'SAVE_PERSON';
export const SAVE_PERSON_START = 'SAVE_PERSON_START';
export const SAVE_PERSON_FINISH = 'SAVE_PERSON_FINISH';
export const GET_BUILDING_SITE = 'GET_BUILDING_SITE';
export const GET_BUILDING_SITE_START = 'GET_BUILDING_SITE_START';
export const GET_BUILDING_SITE_END = 'GET_BUILDING_SITE_END';
export const GET_SITEUSER_LIST = 'GET_SITEUSER_LIST';
export const GET_SITEUSER_LIST_START = 'GET_SITEUSER_LIST_START';
export const GET_SITEUSER_LIST_END = 'GET_SITEUSER_LIST_END';
export const CHANGE_ARR = 'CHANGE_ARR';

 // 2017-12-20 房源动态
export const GOTO_SHOP_DETAIL_PAGE = 'GOTO_SHOP_DETAIL_PAGE';
export const GOTO_PROJECT_DETAIL_PAGE = 'GOTO_PROJECT_DETAIL_PAGE';
export const GOTO_SHOP_DETAIL_PAGE_START = 'GOTO_SHOP_DETAIL_PAGE_START';
export const GOTO_SHOP_DETAIL_PAGE_FINISH = 'GOTO_SHOP_DETAIL_PAGE_FINISH';
export const GOTO_PROJECT_DETAIL_PAGEE_START = 'GOTO_PROJECT_DETAIL_PAGEE_START';
export const GOTO_PROJECT_DETAIL_PAGE_FINISH = 'GOTO_PROJECT_DETAIL_PAGE_FINISH';
export const GET_ID = 'GET_ID';
export const GET_SHOPS = 'GET_SHOPS';
export const GET_SHOPS_START = 'GET_SHOPS_START';
export const GET_SHOPS_FINISH = 'GET_SHOPS_FINISH';
export const POST_CHECKED_ARR = 'POST_CHECKED_ARR';
export const DESCRIPTION_SET_VALUE = 'DESCRIPTION_SET_VALUE';
export const DESCRIPTION_CLEAR_VALUE = 'DESCRIPTION_CLEAR_VALUE';
export const DYNAMIC_SET_BUILDING_VALUE = 'DYNAMIC_SET_BUILDING_VALUE';
export const DYNAMIC_SET_BUILDING_VALUE_START = 'DYNAMIC_SET_BUILDING_VALUE_START';
export const DYNAMIC_SET_BUILDING_VALUE_END = 'DYNAMIC_SET_BUILDING_VALUE_END';
export const DYNAMIC_SUBMIT_DETAILS_VALUES = 'DYNAMIC_SUBMIT_DETAILS_VALUES';
export const DYNAMIC_SUBMIT_DETAILS_VALUES_START = 'DYNAMIC_SUBMIT_DETAILS_VALUES_START';
export const DYNAMIC_SUBMIT_DETAILS_VALUES_END = 'DYNAMIC_SUBMIT_DETAILS_VALUES_END';
export const GET_EXAMINES_STATUS = 'GET_EXAMINES_STATUS';
export const GET_EXAMINES_STATUS_START = 'GET_EXAMINES_STATUS_START';
export const GET_EXAMINES_STATUS_END = 'GET_EXAMINES_STATUS_END';
export const PRICE_EDIT = 'PRICE_EDIT';
export const PRICE_VIEW = 'PRICE_VIEW';
export const YOU_HUI_EDIT = 'YOU_HUI_EDIT';
export const YOU_HUI_VIEW = 'YOU_HUI_VIEW';
export const IS_USE_REPORT = 'IS_USE_REPORT';
export const GET_DYNAMIC_INFO_LIST = 'GET_DYNAMIC_INFO_LIST';
export const GET_DYNAMIC_INFO_DETAIL = 'GET_DYNAMIC_INFO_DETAIL';
export const GET_DYNAMIC_INFO_LIST_END = 'GET_DYNAMIC_INFO_LIST_END';
export const GET_PROJECT_DYNAMIC_INFO_DETAIL_END = 'GET_PROJECT_DYNAMIC_INFO_DETAIL_END';
export const GET_SHOP_DYNAMIC_INFO_DETAIL_END = 'GET_SHOP_DYNAMIC_INFO_DETAIL_END';
export const GET_DYNAMIC_STATUS_END = 'GET_DYNAMIC_STATUS_END';
export const GET_DYNAMIC_STATUS_START = 'GET_DYNAMIC_STATUS_START';

export const DYNAMIC_SET_SHOPS_VALUE = 'DYNAMIC_SET_SHOPS_VALUE';
export const DYNAMIC_SET_SHOPS_VALUE_END = 'DYNAMIC_SET_SHOPS_VALUE_END';
export const DYNAMIC_SET_SHOPS_VALUE_CLEAR = 'DYNAMIC_SET_SHOPS_VALUE_CLEAR';


//消息
export const SEND_BUILDING_MSG = 'SEND_BUILDING_MSG';//发送房源消息
export const SET_MSG_LOADING = 'SET_MSG_LOADING';//消息加载状态处理

// 新增房源楼盘列表商铺列表部分
export const GET_ADD_SHOP_LIST = 'GET_ADD_SHOP_LIST';
export const GET_ADD_SHOP_LIST_START = 'GET_ADD_SHOP_LIST_START';
export const GET_ADD_SHOP_LIST_END = 'GET_ADD_SHOP_LIST_END';

export const GET_ADD_BUILDING = 'GET_ADD_BUILDING';
export const GET_ADD_BUILDING_START = 'GET_ADD_BUILDING_START';
export const GET_ADD_BUILDING_END = 'GET_ADD_BUILDING_END';

export const DELETE_BUILDING = 'DELETE_BUILDING';
export const DELETE_BUILDING_START = 'DELETE_BUILDING_START';
export const DELETE_BUILDING_FINISH = 'DELETE_BUILDING_FINISH';

export const GET_CHANGE_BUILDING_LIST = 'GET_CHANGE_BUILDING_LIST';
export const GET_CHANGE_BUILDING_LIST_START = 'GET_CHANGE_BUILDING_LIST_START';
export const GET_CHANGE_BUILDING_LIST_END = 'GET_CHANGE_BUILDING_LIST_END';
export const GET_THIS_PROJECT_INDEX = 'GET_THIS_PROJECT_INDEX';

export const SET_TITLE = 'SET_TITLE';
export const TITLE_CLEAR_VALUE = 'TITLE_CLEAR_VALUE';
export const VIEW_SHOP_SUMMARY_INFO = 'VIEW_SHOP_SUMMARY_INFO';
export const EDIT_SHOP_SUMMARY_INFO = 'EDIT_SHOP_SUMMARY_INFO';
export const SAVE_SHOP_SUMMARY_INFO = 'SAVE_SHOP_SUMMARY_INFO';
export const SAVE_SHOP_SUMMARY_INFO_START = 'SAVE_SHOP_SUMMARY_INFO_START';
export const SAVE_SHOP_SUMMARY_INFO_END = 'SAVE_SHOP_SUMMARY_INFO_END';

export const GET_USER_TYPE_VALUE = 'GET_USER_TYPE_VALUE';
export const UPDATE_USER_TYPE_VALUE = 'UPDATE_USER_TYPE_VALUE';

export const LOADING_START_BASIC = 'LOADING_START_BASIC';
export const LOADING_END_BASIC = 'LOADING_END_BASIC';

export const LOADING_START_BATCH_BUILDING = 'LOADING_START_BATCH_BUILDING';
export const LOADING_END_BATCH_BUILDING = 'LOADING_END_BATCH_BUILDING';

export const LOADING_START_SUPPORT = 'LOADING_START_SUPPORT';
export const LOADING_END_SUPPORT = 'LOADING_END_SUPPORT';

export const LOADING_START_RELSHOP = 'LOADING_START_RELSHOP';
export const LOADING_END_RELSHOP = 'LOADING_END_RELSHOP';

export const LOADING_START_PROJECT = 'LOADING_START_PROJECT';
export const LOADING_END_PROJECT = 'LOADING_END_PROJECT';

export const LOADING_START_RULE = 'LOADING_START_RULE';
export const LOADING_END_RULE = 'LOADING_END_RULE';

export const LOADING_START_RULE_TEMPLATE = 'LOADING_START_RULE_TEMPLATE';
export const LOADING_END_RULE_TEMPLATE = 'LOADING_END_RULE_TEMPLATE';

export const LOADING_START_COMMISSION = 'LOADING_START_COMMISSION';
export const LOADING_END_COMMISSION = 'LOADING_END_COMMISSION';

export const LOADING_START_ATTCH = 'LOADING_START_ATTCH';
export const LOADING_END_ATTCH = 'LOADING_END_ATTCH';

export const LOADING_START_SHOP_BASIC = 'LOADING_START_SHOP_BASIC';
export const LOADING_END_SHOP_BASIC = 'LOADING_END_SHOP_BASIC';

export const LOADING_START_SHOP_LEASE = 'LOADING_START_SHOP_LEASE';
export const LOADING_END_SHOP_LEASE = 'LOADING_END_SHOP_LEASE';

export const LOADING_START_SHOP_SUPPORT = 'LOADING_START_SHOP_SUPPORT';
export const LOADING_END_SHOP_SUPORT = 'LOADING_END_SHOP_SUPPORT';

export const LOADING_START_SHOP_SUMMARY = 'LOADING_START_SHOP_SUMMARY';
export const LOADING_END_SHOP_SUMMARY = 'LOADING_END_SHOP_SUMMARY';

// 指派驻场审核列表
export const GET_EXAMINESLIST_LIST = 'GET_EXAMINESLIST_LIST';
export const GET_EXAMINESLIST_LIST_START = 'GET_EXAMINESLIST_LIST_START';
export const GET_EXAMINESLIST_LIST_END = 'GET_EXAMINESLIST_LIST_END';