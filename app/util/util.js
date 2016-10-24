import _ from 'lodash';
const ServiceContext = {
    "fallnurse-service": '/fall'
};
var SYS_USER = {
    "loginId": "abc",
    "passwd": "",
    "mobilePhone": "ff",
    "name": "xxx",
    "userType": "NORMAL",
    "hospId": "xyz",
    "hospName": "xxx",
    "attachedRoles": [
        { "roleCode": "CAH_GROUP" },
        { "roleCode": "GM_NURSE" }
    ]
};
class Util {
    /**
     * 获取默认请求头
     */
    static getDefaultHeads(ctx) {
        if (ctx) {
            return {
                'Cookie': ctx.get("Cookie"),
                'Authorization': ctx.get("Authorization") || (ctx.session.loginRes ? tx.session.token_type + " " + tx.session.access_token : ''),
            }
        } else {
            return {

            };
        }
    }

    static getJsonHeads() {
        return {
            'Content-Type': 'application/json;chaset=UTF-8'
        }
    }

    static getdefaultOptions(ctx) {
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain;chaset=UTF-8',
                'SYS_USER': ctx.get("SYS_USER") || JSON.stringify(SYS_USER)
            },
            json: true
        };
    }

    static getJsonOption() {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;chaset=UTF-8'
            },
            json: true
        };
    }

    static getFormOption() {
        return {
            method: 'POST',
            form: {

            },
            json: true
        };
    }

    static getBaseUrlByServiceName(name) {

        let instances = eurekaClient.getInstancesByAppId(name);
        var index = _.random(0, instances.length - 1);
        console.log(index);
        var context = ServiceContext[name] || '';
        // console.log(instances[index]);
        //开发环境取配置里的服务ip
        if (process.env.NODE_ENV == "dev") {
            return `http://${CONFIG.mservice.ip}:${instances[index].port.$}${context}`;
        } else
            return `http://${instances[index].ipAddr}:${instances[index].port.$}${context}`;
    }
}
export default Util;