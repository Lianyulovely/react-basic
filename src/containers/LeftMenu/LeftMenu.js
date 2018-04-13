import React,{Component} from "react";
import {connect} from 'react-redux';
import {changeActiveLi,setMenu} from "../../redux/modules/global.js";
import './leftMenu.css';
const $ = window.$;
const menus = [
	//{key:"config",route:'#/home/config',name:'关联盈通云配置',icon:"icon-certificate",childrens:[]},
	// {key:"user",route:'#/home/user',name:'用户管理',icon:"icon-user",childrens:[]},
	// {key:"api",route:'#/home/api',name:'Api管理',icon:"icon-key",childrens:[]},
	// {key:"plugin",route:'#/home/plugin',name:'插件管理',icon:"icon-puzzle-piece",childrens:[]},
	// {key:"plugin",route:'#/home/gateWayDic',name:'网关字典',icon:"icon-puzzle-piece",childrens:[]},
	{
      key:"access",route:'javascript:;',name:'接入管理',icon:"icon-puzzle-piece",
      childrens:[
        // {route:'#/home/monitor/all',name:'总览'},
        {route:'#/home/user',name:'接入授权'},
        {route:'#/home/api',name:'Api管理'},
        {route:'#/home/plugin',name:'令牌管理'},
        {route:'#/home/gateWayDic',name:'网关字典'},
      ]
    },
    {
	  key:"monitor",route:'javascript:;',name:'监控中心',icon:"icon-compass",
	  childrens:[
	    // {route:'#/home/monitor/all',name:'总览'},
	    {key:"fbs_list",route:'#/home/monitor/fbs_list',name:'分布式接口监控',childrens:[
	      {route:'#/home/monitor/api',name:'API网关'},
	      {route:'#/home/monitor/logical',name:'逻辑引擎'},
	      {route:'#/home/monitor/database',name:'数据库组件'},
	      {route:'#/home/monitor/monitorConfig',name:'监控配置'},
	    ]},
	  ]
	},
	{
		key:"resource",route:'javascript:;',name:'资源管理',icon:"icon-folder-open",
		childrens:[
			// {route:'#/home/resource/connect_list',name:'库连接管理'},
			{route:'#/home/resource/dictionary_list',name:'数据字典'},
			{route:'#/home/resource/module_list',name:'功能模块'},
			{route:'#/home/resource/keyValue_list',name:'键值参数'},
		]
	},
	{
		key:"automation",route:'javascript:;',name:'智能化业务管理平台',icon:"icon-th-large",
		childrens:[
			{route:'#/home/automation/management',name:'用户订阅管理'},
            {route:'#/home/automation/applyBuy',name:'用户申购管理'},
			{route:'#/home/automation/abnormal',name:'申购异常管理'},
			{route:'#/home/automation/set',name:'自动化业务设置'},
			// {route:'#/home/automation/bl_account',name:'对账统计管理'},
		]
	},
	{
		key:"limit",route:'javascript:;',name:'权限管理',icon:"icon-list-alt",
		childrens:[
			{route:'#/home/limit/depart',name:'部门管理'},
			{route:'#/home/limit/user',name:'用户管理'},
			{route:'#/home/limit/role',name:'角色管理'},
		]
	},
	{
		key:"mobileSecurities",route:'javascript:;',name:'移动证券',icon:"icon-desktop",
		childrens:[
			{
				key:"configManage",route:'javascript:;',name:'配置管理',
				childrens:[
					{route:'#/home/configManage/clientConfig',name:'客户端配置'},
					{route:'#/home/configManage/menuFuncLib',name:'菜单功能库'},
					{route:'#/home/configManage/stockDataConfig',name:'自选股数据配置'},
					{route:'#/home/configManage/paramConfigManage',name:'参数配置管理'},
					{route:'#/home/configManage/adConfig',name:'广告配置'},
					{route:'#/home/configManage/signProConfig',name:'签约协议配置'},
					{route:'#/home/configManage/quotationConfig',name:'行情管理'},
				]
			},
			{
				key:"monitorManage",route:'javascript:;',name:'监控管理',
				childrens:[
					{route:'#/home/monitorManage/monitorItem',name:'监控项配置'},
					{route:'#/home/monitorManage/site',name:'站点配置'},
					{route:'#/home/monitorManage/account',name:'帐号配置管理'},
					{route:'#/home/monitorManage/service',name:'服务管理'},
                    {route:'#/home/monitorManage/siteMarket',name:'行情分时(站点)'},
                    {route:'#/home/monitorManage/equipMarket',name:'行情分时(设备)'},
				]
			},
			{
				key:"operation",route:'javascript:;',name:'运营管理',
				childrens:[
					{route:'#/home/operation/systemNotice',name:'系统公告管理'},
					{route:'#/home/operation/advertising',name:'广告管理'},
					{route:'#/home/operation/activity',name:'活动管理'},
					{route:'#/home/operation/feedback',name:'用户反馈管理'},
					{route:'#/home/operation/message',name:'短信流水'},
					{route:'#/home/operation/terminalStat',name:'终端统计'},
				]
			},
			{
				key:"software",route:'javascript:;',name:'软件发布',
				childrens:[
					{route:'#/home/software/release',name:'软件发布'},
					{route:'#/home/software/clientSide',name:'客户端类型管理'},
					{route:'#/home/software/grayRelease',name:'灰度发布管理'},
					{route:'#/home/software/h5Page',name:'h5页面升级'},
				]
			},
			{
				key:"systemManage",route:'javascript:;',name:'系统管理',
				childrens:[
					{route:'#/home/systemManage/salesOffice',name:'营业部管理'},
					{route:'#/home/systemManage/operationRecord',name:'操作员操作记录'},
				]
			},
            {
                key:"homeConfigManage",route:'javascript:;',name:'首页配置',
                childrens:[
                    {route:'#/home/homeConfigManage/homeCardConfigManage',name:'首页卡片配置管理'},
                    {route:'#/home/homeConfigManage/cardTypeManage',name:'卡片类型管理'},
                    {route:'#/home/homeConfigManage/menuFnManage',name:'菜单功能管理'},
                    {route:'#/home/homeConfigManage/homeShortcutMenu',name:'首页快捷菜单'},
                ]
            },
            {
                key:"findManage",route:'javascript:;',name:'发现配置',
                childrens:[
                    {route:'#/home/findManage/findModuleManage',name:'发现管理'},
                ]
            },
		]
	},
	{
		key:"informationManage",route:'javascript:;',name:'资讯平台',icon:"icon-comments-alt",
		childrens:[
            {
               key:"fieldManage",route:'javascript:;',name:'字段管理',
               childrens:[
                  {route:'#/home/informationManage/fieldManage',name:'字段编辑'},
               ]
            },
            {
               key:"templateManage",route:'javascript:;',name:'模板管理',
               childrens:[
                  {route:'#/home/informationManage/templateConfig',name:'模板配置'},
               ]
            },
            {
               key:"infoEditorial",route:'javascript:;',name:'资讯采编',
               childrens:[
                  {route:'#/home/informationManage/information',name:'所有资讯'},
                  {route:'#/home/informationManage/custom',name:'自定义资讯'},
               ]
            },
            {
                key:"infoProcessing",route:'javascript:;',name:'资讯加工',
                childrens:[
                    {route:'#/home/programa/list',name:'资讯栏目'},
                    {route:'#/home/task/list',name:'资讯加工任务'},
                    // {route:'#/home/task/history',name:'任务执行记录'},
                    // {route:'#/home/task/result',name:'任务执行结果'},
                ]
            },
			{route:'#/home/resource/table_list',name:' 数据参考服务'},
		]
	},
]
class LeftMenu extends Component{
	constructor(props){
		super(props);
		this.state = {
			selectedName:'用户管理'
		}
	}
	componentDidMount(){
		$("#sidebar").niceScroll({styler:"fb",cursorcolor:"", cursorwidth: '10', cursorborderradius: '10px', background: '#404040', cursorborder: '1px solid #fff'});
		const  open_key = window.sessionStorage.open_key?window.sessionStorage.open_key:'user';
		const  active_li = window.sessionStorage.active_li?window.sessionStorage.active_li:'用户管理';
		/*设置默认选中*/
		this.setState({'selectedName':active_li});
		/*设置默认展开*/
		const result = this.changeExpended(open_key,false,menus);
		this.props.dispatch(setMenu(result));
	}
	handleMenu(item){
		const key = item.key?item.key:window.sessionStorage.open_key;
		this.setState({'selectedName':item.name})
		const expanded = item.expanded;
		const recMenus = $.extend(true, [], this.props.menus);
		if(item.key){
		const result = this.changeExpended(key,expanded,recMenus);
		this.props.dispatch(setMenu(result));
		}
		window.sessionStorage.active_li = item.name;
		window.sessionStorage.open_key = key;
	}
	/*改变展开状态*/
	changeExpended(key,expanded,recMenus){
		recMenus.map((item,index)=>{
			if(item.key==key){
				item.expanded = item.expanded?!item.expanded:true;
			}
			if(item.childrens&&item.childrens.length>0){
				this.changeExpended(key,expanded,item.childrens);
			}
		});
		return recMenus;
	}
  createLeftMenu(menuData){
      const {selectedName} = this.state;
      const _this  =  this;
      let menus =
      <div>
          <ul className="menuItem" style={{overflow:'hidden'}}>
          {menuData.map((item,index)=>{
            let classStr = item.expanded?'active ':'';
            let aCls = (item.name == selectedName)?'selected':'';
            const hasChild = item.childrens?(item.childrens.length>0?true:false):false;
            return <li className={classStr+""} key={item.name}>
                    <a href={item.route} className={aCls} onClick={()=>{
                            _this.handleMenu(item)
                          }}>
                        {
                          hasChild?<span className={item.expanded?"arrow open":"arrow"}  ></span>:''
                        }
                        <i className={item.icon+' menu-icon'}></i>
                        <span onClick={()=>{window.scrollTo(0,0)}}>{item.name}</span>
                    </a>
                    {
                      item.childrens?_this.createLeftMenu(item.childrens):null
                    }
                  </li>
            })
          }
          </ul>
        </div>
      return menus;
    }
	 render(){
        const _this = this;
        let openStyle = this.props.open?{marginLeft:"0",paddingBottom:'150px'}:{marginLeft:"-180px",paddingBottom:'150px'};
        const menus = this.props.menus||[];
        let recMenus  = this.createLeftMenu(menus);
        return(
            <div>
                <aside>
                  <div id="sidebar" className="nav-collapse " tabIndex="5000" style={openStyle}>
                    {recMenus}
                  </div>
              </aside>
            </div>
        )
  }
}

export default connect(
	(state)=>{
	  return {
	  // menustate:state.global.menustate,
	  menus:state.global.menus,
	}}
)(LeftMenu);
