import React,{Component} from "react";
import "./tips.css";

export default class WarnTip extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const _this = this;
        let warnData = this.props.warnData;
        let ret = warnData.ret?warnData.ret:"1";
        let msg = warnData.msg?warnData.msg:"";
        return(
            <span className={ret=="0"?"warnTip active":"warnTip"}><i className="icon-bullhorn"></i>&nbsp;:&nbsp;{msg}</span>
        )
    }
}