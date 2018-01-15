import React,{Component} from "react";
import "./tips.css";

export default class AlertTip extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={this.props.alertShow?"modal  modal-small show":"modal  modal-small hide"} style={{'background':'rgba(0,0,0,0.3)'}}>
               <div className="dialog-sm" style={{'width':'320px'}}>
                <i className="icon-remove dialog-close" data-dismiss="modal" onClick={(e)=>{
                    window.hideAlert();
                }}></i>
                <p className="title">消息提示</p>
                <p className='alert-text'>
                    {this.props.alertText}
                </p>
               </div>
            </div>
        )
    }
}