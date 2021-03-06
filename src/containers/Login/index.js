import React,{Component} from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/modules/auth";
import TipView from "../../components/Tips/TipView";

class Login extends Component{
    constructor(props){
        super(props);
         this.state = {
            form:{
              username:{valid:false,error:""},
              password:{valid:false,error:""}
            }
        }
    }
    componentDidMount(){
        window.dispatch = this.props.dispatch;
    }
    componentWillReceiveProps(nextprops){
      if(nextprops.logined){
        window.sessionStorage.logined = nextprops.logined;
        window.location.href = "#/home/automation";
        window.sessionStorage.active_li = '用户订阅管理';
        window.sessionStorage.open_key = 'automation';
      }
    }
    handleLogin(){
      let loginObj = {}
      loginObj.username = this.refs.username.value;
      loginObj.pwd = this.refs.password.value;
       if(!this.checkValidate("username",['required'])){return;}
       if(!this.checkValidate("password",['required'])){return;}
      this.props.loginKong(loginObj);
    }
    /*表单验证*/
    checkValidate(field,type){
        let val = this.refs[field].value;
        let validFlag = true;
        const {form} = this.state;
        type.map((item,index)=>{
            switch(item){
                  case "required":
                    let errInfo = '';
                    if(val==""){
                      validFlag = false;
                      errInfo = field+"不能为空";
                    }
                    this.setState({
                        form:{
                             ...form,
                            [field]:{valid:validFlag,error:errInfo}
                        }
                    });
                    break;
                default:
                    break;
            }
        });
        return validFlag;
    }
    render(){
       const {form: {username,password}} = this.state;
       window.sessionStorage.username = this.props.loginData?this.props.loginData.username:'';
        return (
            <section id="loginBox">
              <TipView tipText={this.props.tipText} tipShow={this.props.tipShow}/>
              <header className="panel-heading">
                  密码登录
              </header>
              <div className="panel-body">
                  <form className="form-horizontal" role="form">
                      <div className="form-group">
                          <label htmlFor="inputEmail1" className="col-lg-2 control-label">账户</label>
                          <div className="col-lg-10">
                              <input type="text" className="form-control" name="username" ref="username" placeholder="请输入账户名" onChange={this.checkValidate.bind(this,"username",['required'])}/>
                              {!username.valid && <label htmlFor="username" className="error">{username.error}</label>}
                          </div>
                      </div>
                      <div className="form-group">
                          <label htmlFor="inputPassword1" className="col-lg-2 control-label">密码</label>
                          <div className="col-lg-10">
                              <input type="password" className="form-control" name="password" ref="password" placeholder="请输入密码" onChange={this.checkValidate.bind(this,"password",['required'])}/>
                              {!password.valid && <label htmlFor="username" className="error">{password.error}</label>}
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="col-lg-offset-2 col-lg-10">
                              <button type="button" className="btn btn-danger" onClick={this.handleLogin.bind(this)}>登录</button>
                          </div>
                      </div>
                  </form>
              </div>
          </section>
        )
    }
}

function mapStateToProps(state){
    return{
      logined:state.auth.logined,
      loginData:state.auth.loginData,
      tipShow:state.global.tipShow,
      tipText:state.global.tipText,
    }
}
function mapDispatchToProps(dispatch){
    return{
      dispatch:dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
