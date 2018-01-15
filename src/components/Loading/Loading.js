import React,{Component} from "react";
import "./Loading.css";

export default class Loading extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const _this = this;
        return(
            <div className={this.props.loadingShow?"loadingBox show":"loadingBox"} >
                <div className="loadingBg">
                    <div className="spinner">
                      <div className="rect1"></div>
                      <div className="rect2"></div>
                      <div className="rect3"></div>
                      <div className="rect4"></div>
                      <div className="rect5"></div>
                    </div>
                    <p className="loadingMsg">{this.props.loadingMsg}</p> 
                </div>
            </div>
        )
    }
}