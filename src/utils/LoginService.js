import Net from './Net';
/*登录服务类*/

let LoginService = {
        /*登录*/
        login: async (dispatch,data)=>{
            const url = '/aosuite/adminUser/login.jhtml';
            return await Net.post(url,data);
        },

}
module.exports = LoginService;
