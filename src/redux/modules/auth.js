
const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAIL = "auth/LOGIN_FAIL";

const initialState = {
  logined: false, //登录成功,
  loginData:{}
};

export default function reducer(state = initialState,action = {}){
    switch(action.type){
        case LOGIN:
            return {...state,logined:false};
            break;
        case LOGIN_SUCCESS:
            return {...state,logined:true,loginData:action.result};
            break;
        case LOGIN_FAIL:
            return {...state,logined:false};
            break;
        default:
            return state;
    }
}

export function login(data){
    return {
        types: [LOGIN,LOGIN_SUCCESS,LOGIN_FAIL],
        promise:(client) => client.post("/aosuite/adminUser/login.jhtml",{"data":data},'monitor')
    }
}
