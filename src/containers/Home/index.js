import React,{Component} from "react";
import {connect} from 'react-redux';
import Navbar from "../Navbar/Navbar";
import LeftMenu from "../LeftMenu/LeftMenu";
import TipView from "../../components/Tips/TipView";
import Loading from "../../components/Loading/Loading";
import AlertTip from "../../components/Tips/AlertTip";
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            leftOpen:true
        }
    }
    componentDidMount(){
        window.dispatch = this.props.dispatch;
    }
    changeLeftOpen(){
        let leftOpen = this.state.leftOpen;
        leftOpen = !leftOpen;
        this.setState({leftOpen:leftOpen})
    }
    render(){
        let contentStyle = this.state.leftOpen?{marginLeft:"180px"}:{marginLeft:"0px"};
        const _this = this;
        const username = window.sessionStorage.username?window.sessionStorage.username:"";
        return(
            <div>
                <Loading loadingMsg={this.props.loadingMsg} loadingShow={this.props.loadingShow}/>
                <Navbar changeOpen={this.changeLeftOpen.bind(_this)} username={username}/>
                <AlertTip alertText={this.props.alertText} alertShow={this.props.alertShow}/>
                <LeftMenu open={this.state.leftOpen}/>
                <section id="main-content" style={contentStyle}>
                    <section className="wrapper" style={{minWidth:'1100px'}}>
                        <TipView tipText={this.props.tipText} tipShow={this.props.tipShow}/>
                        {this.props.children}
                    </section>
                </section>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch:dispatch
    }
}

export default connect((state)=>{
    return {
        tipShow:state.global.tipShow,
        tipText:state.global.tipText,
        loadingShow:state.global.loadingShow,
        loadingMsg:state.global.loadingMsg,
        alertShow:state.global.alertShow,
        alertText:state.global.alertText,
    }
}
,mapDispatchToProps)(Home)
