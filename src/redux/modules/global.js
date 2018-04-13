const SHOW_TIP = "global/SHOW_TIP";
const HIDE_TIP = "global/HIDE_TIP";
const SHOW_LOADING = "global/SHOW_LOADING";
const HIDE_LOADING = "global/HIDE_LOADING";
const SET_MENU = "global/SET_MENU";

const SHOW_ALERT = 'global/SHOW_ALERT';
const HIDE_ALERT = 'global/HIDE_ALERT';


/*切换左菜单的li*/
const CHANGE_ACTIVE_LI  ="global/CHANGE_ACTIVE_LI";

const initialState = {
    tipText:"",
    tipShow:false,
    loadingShow:false,
    loadingMsg:"",
    active_li:"",
    alertShow:false,
    alertText:'',
    menus:[],
    // menustate:{
    //     open_key:'',
    //     active_li:''
    // }
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
            return {...state,menus:action.menus}
        case CHANGE_ACTIVE_LI:
            return {...state,active_li:action.active_li}
            break;

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


export function changeActiveLi(active_li){
    return{
        type:CHANGE_ACTIVE_LI,
        active_li
    }
}

export function setMenu(menus){
    return {
        type:SET_MENU,
        menus
    }
}
