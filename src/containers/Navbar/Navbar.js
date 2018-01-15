import React,{Component} from "react";
import {connect} from 'react-redux';
import {setMenu} from "../../redux/modules/global.js";
import './Navbar.less';
import $ from 'jquery';
class Navbar extends Component{
    render(){
      const _self = this;
      let {menuState} = _self.props;
      const recMenuState = $.extend(true,{},menuState);
        return(
            <div>
                <header className="header white-bg">
            <div className="sidebar-toggle-box" onClick={e=>{this.props.changeOpen()}}>
                <div data-original-title="Toggle Navigation" data-placement="right" className="icon-reorder tooltips"></div>
            </div>
            <a href="javascript:;" className="logo"><img src="img/hualong.png" alt="" style={{width:'100px'}}/></a>
            <div className='top-menus'>
              <a href='#/home/undo' onClick={()=>{
                recMenuState.open_key = 'workbench';
                recMenuState.active_li = '待办事项';
                recMenuState.func_type = 'workbench';
                  _self.props.dispatch(setMenu(recMenuState));
              }}>工作台</a>
              <a href='#/home/account' onClick={()=>{
                recMenuState.open_key = 'system';
                recMenuState.active_li = '账号管理';
                recMenuState.func_type = 'system';
                  _self.props.dispatch(setMenu(recMenuState));
              }}>系统管理</a>
            </div>
            <div className="top-nav ">
                <ul className="nav pull-right top-menu">
                    <li>
                        <input type="text" className="form-control search" placeholder="Search"/>
                    </li>
                    <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="javascript:;">
                            <img alt="" src="img/avatar1_small.jpg"/>&nbsp;
                            <span className="username">{this.props.username}</span>
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu extended logout">
                            <div className="log-arrow-up"></div>
                            <li><a href="javascript:;"><i className=" icon-suitcase"></i>资料</a></li>
                            <li><a href="javascript:;"><i className="icon-cog"></i> 设置</a></li>
                            <li><a href="javascript:;"><i className="icon-bell-alt"></i> 提示</a></li>
                            <li><a href="javascript:;"><i className="icon-key"></i> 退出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
        </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {

    }
}
export default connect(
	(state)=>{
	  return {
			menuState:state.global.menuState,
		}}
)(Navbar);
