class Util {
    /**
     * 获取默认请求头
     */
    static getDefaultHeads(ctx) {
        if (ctx) {
            return {
                'Cookie': ctx.get("Cookie"),
                'Authorization':ctx.get("Authorization")||(ctx.session.loginRes?tx.session.token_type+" "+tx.session.access_token:''),
            }
        } else {
            return {

            };
        }
    }
    
    static getBaseUrlByServiceName(name){

        let instances= eurekaClient.getInstancesByAppId(name);
        //开发环境取配置里的服务ip
        if(process.env.NODE_ENV=="dev"){
            return `http://${CONFIG.mservice.ip}:${instances[0].port.$}`;
        }else
            return `http://${instances[0].ipAddr}:${instances[0].port.$}`;
    }
}
export default Util;