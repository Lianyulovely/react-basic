const SHOW_TIP = "global/SHOW_TIP";
const HIDE_TIP = "global/HIDE_TIP";
const SHOW_LOADING = "global/SHOW_LOADING";
const HIDE_LOADING = "global/HIDE_LOADING";

const SET_MENU = "global/SET_MENU";

const SHOW_ALERT = 'global/SHOW_ALERT';
const HIDE_ALERT = 'global/HIDE_ALERT';



const initialState = {
    tipText:"",
    tipShow:false,
    loadingShow:false,
    loadingMsg:"",
    active_li:"",
    alertShow:false,
    alertText:'',
    menuState:{
      open_key:'',
			active_li:'',
			func_type:'',
    }
}

export default function reducer(state = initialState,action={}){
    switch(action.type){
        case SHOW_TIP:
            return {...state,tipShow:true,tipText:action.tipText};
            break;
        case HIDE_TIP:
            return {...state,tipShow:false,tipText:""}
            break;
        case SHOW_LOADING:
            return {...state,loadingShow:true,loadingMsg:action.loadingMsg};
            break;
        case HIDE_LOADING:
            return {...state,loadingShow:false,loadingMsg:""}
            break;
        case SHOW_ALERT:
            return {...state,alertShow:true,alertText:action.alertText}
            break;
        case HIDE_ALERT:
            return {...state,alertShow:false,}
            break;
        case SET_MENU:
            return {...state,menuState:action.menuState}
        default:
            return state
            break;
    }
}

export function tipShow(tipText){
    return {
        type:SHOW_TIP,
        tipText
    }
}
export function tipHide(){
    return {
        type:HIDE_TIP
    }
}

export function loadingShow(loadingMsg){
    return {
        type:SHOW_LOADING,
        loadingMsg
    }
}
export function loadingHide(){
    return {
        type:HIDE_LOADING
    }
}

/*alert框*/
export function alertShow(alertText){
    return{
        type:SHOW_ALERT,
        alertText
    }
}
export function alertHide(){
    return{
        type:HIDE_ALERT
    }
}
export function setMenu(menuState){
    return {
        type:SET_MENU,
        menuState
    }
}
