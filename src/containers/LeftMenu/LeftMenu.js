import React,{Component} from "react";
import {connect} from 'react-redux';
import {setMenu} from "../../redux/modules/global.js";
import './leftMenu.css';
import $ from "jquery";
import 'jquery.nicescroll';
// const $ = window.$;
const menus_workbench = [
		{
      key:"workbench",route:'javascript:;',name:'我的工作台',icon:"icon-desktop",expanded:true,
      childrens:[
        {route:'#/home/undo',name:'待办事项'},
        {route:'#/home/checking',name:'审核中项目'},
        {route:'#/home/done',name:'已立项项目'},
        {route:'#/home/fail',name:'未立项项目'},
      ]
    },
    {
		  key:"message",route:'#/home/message',name:'消息通知',icon:"icon-comments-alt",
		  childrens:[ ]
		}
];
const menus_system = [
	{key:"account",route:'#/home/account',name:'账号管理',icon:"icon-comments-alt"},
	{key:"blacklist",route:'#/home/blacklist',name:'黑名单管理',icon:"icon-comments-alt"},
	{key:"archives",route:'#/home/archives',name:'档案管理',icon:"icon-comments-alt"},
	{key:"systemInfo",route:'#/home/systemInfo',name:'系统信息管理',icon:"icon-comments-alt"}
]
class LeftMenu extends Component{
	constructor(props){
		super(props);
		this.state = {
			selectedName:'待办事项',
			menus:[],
		}
	}
	componentDidMount(){
		$('#sidebar').niceScroll({styler:"fb",cursorcolor:"", cursorwidth: '10', cursorborderradius: '10px', background: '#404040', cursorborder: '1px solid #fff'});
		/*设置默认选中*/
		const menuState = {
			open_key:'workbench',
			active_li:'待办事项',
			func_type:'workbench',
		}
		const menus = menuState.func_type == 'workbench'?menus_workbench:menus_system;
		this.setState({menus:menus});
		/*设置默认展开*/
		this.props.dispatch(setMenu(menuState));
	}
	componentWillReceiveProps(nextprops){
		if(nextprops.menuState!=this.props.menuState){
			const menus = nextprops.menuState.func_type == 'workbench'?menus_workbench:menus_system;
			this.setState({menus:menus});
		}
	}
	handleMenu(item){
		const menuState = $.extend(true,[],this.props.menuState);
		menuState.active_li = item.name;
		this.props.dispatch(setMenu(menuState));
	}
  createLeftMenu(menuData){
      const {selectedName} = this.state;
			const {menuState} = this.props;
      const _this  =  this;
      let menu =
      <div>
          <ul className="menuItem" style={{overflow:'hidden'}}>
          {menuData.map((item,index)=>{
            let classStr = item.key==menuState.open_key?'active ':'';
						let arrowCls = item.key==menuState.open_key?'arrow open ':'arrow';
            let aCls = (item.name == menuState.active_li)?'selected':'';
            const hasChild = item.childrens?(item.childrens.length>0?true:false):false;
            return <li className={classStr+""} key={item.name}>
                    <a href={item.route} className={aCls} onClick={()=>{
                            _this.handleMenu(item)
                          }}>
                        {
                          hasChild?<span className={arrowCls}></span>:''
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
      return menu;
    }
	 render(){
        const _this = this;
        let openStyle = this.props.open?{marginLeft:"0",paddingBottom:'150px'}:{marginLeft:"-180px",paddingBottom:'150px'};
				const {menus} = this.state;
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
			menuState:state.global.menuState,
		}}
)(LeftMenu);
