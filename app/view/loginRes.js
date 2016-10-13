import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';
/**
 * 登录token信息视图
 */
const LoginRes = new GraphQLObjectType({
    name: "LoginRes",
    description: "item",
    fields: {
        access_token: {
            type: GraphQLString,
            description: "token 值"
        },
        token_type: {
            type: GraphQLString,
            description: "token 类型"
        },
        refresh_token: {
            type: GraphQLString,
            description: "刷新 token"
        },
        expires_in: {
            type: GraphQLString,
            description: "过期时间"
        },
        scope: {
            type: GraphQLString,
            description: "scope"
        },
        test: {
            type: GraphQLString,
            resolve: (root) => {
                console.log("root",root);
                return "test";
            }
        }
    }
});
export default LoginRes;