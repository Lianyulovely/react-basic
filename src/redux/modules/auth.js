const LOGIN_STATUS = "auth/LOGIN_STATUS";
const SAVE_USER = 'auth/SAVE_USER';

const initialState = {
  logined: false, //登录失败,
  loginUser:{}
};

export default function reducer(state = initialState,action = {}){
    switch(action.type){
        case LOGIN_STATUS:
            return {...state,logined:action.result};
            break;
        case SAVE_USER:
            return {...state,loginUser:action.result};
            break;
        default:
            return state;
    }
}

export function change_login_status(data){
    return{
        type: LOGIN_STATUS,
        result:data
    }
}
export function save_login_user(data){
    return{
        type: SAVE_USER,
        result:data
    }
}
