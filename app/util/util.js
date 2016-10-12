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
}
export default Util;