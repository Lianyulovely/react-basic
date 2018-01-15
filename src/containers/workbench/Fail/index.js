import React,{Component} from 'react';
import {connect} from "react-redux";
class Container extends Component{
  render(){
    return(
      <div>hahha</div>
    )
  }
}
export default connect(
    state=>{
        return{
        }
    }
)(Container)
