import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

var LoginRes = new GraphQLObjectType({
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
        }
    }
});
export default LoginRes;