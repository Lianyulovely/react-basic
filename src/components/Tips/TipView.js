import React,{Component} from "react";
import "./tips.css";

export default class TipView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={this.props.tipShow?" alert alert-success alert-block fade in my-alert":"alert alert-success alert-block fade my-alert hide"}>
              <button data-dismiss="alert" className="close close-sm" type="button">
                  <i className="icon-remove"></i>
              </button>
              <h4 style={{"marginBottom":0}}>
                  <i className="icon-ok-sign"></i>&nbsp;
                  {this.props.tipText}
              </h4>
          </div>
        )
    }
}
