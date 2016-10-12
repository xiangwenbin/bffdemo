import rp from 'request-promise';
import UrlProperties from '../const/urlProperties';
import LoginRes from '../model/loginRes';
const CONTENT_TYPE = "application/x-www-form-urlencoded;";
const CHARSET = "UTF-8";
/**
 * 登录服务
 */
class LoginService {
    static async login(ctx,loginInfo) {
        let result = {};
      
        console.log("loginInfo：",loginInfo);
        let options = {
            method: 'POST',
            uri: UrlProperties.sys.authorizationlogin,
            headers: {
                'Content-Type': CONTENT_TYPE + CHARSET,
                'Cookie': ctx.get("Cookie")
            },
            form:loginInfo,
            json: true
        };
        console.log("request options:",options)
        result = await rp(options).then(
             (jsonBody) =>{
                //直接更新session里的token信息
                if(jsonBody&&jsonBody.loginRes){
                    ctx.session.loginRes = JSON.stringify(jsonBody.loginRes);
                }
                return jsonBody;
            }
        ).catch(
            (error)=>{
                throw error;
            }
        );
        
        console.log("result:",result);
        return result;
    }
    static async loginOut(ctx) {
        // let result = {};
        // let options = {
        //     method: 'GET',
        //     uri: UrlProperties.sys.getAuthorizationloginout,
        //     headers: {
        //         'Content-Type': CONTENT_TYPE + CHARSET,
        //         'Cookie': ctx.get("cookie")
        //     },
        //     form:loginInfo,
        //     json: true
        // };
        // // console.log("request options:",options)
        // result = await rp(options).then(
        //      (jsonBody) =>{
                
        //         return jsonBody;
        //     }
        // ).catch(
        //     (error)=>{
        //         throw error;
        //     }
        // );
        
        // return result;
    }
}

export default LoginService