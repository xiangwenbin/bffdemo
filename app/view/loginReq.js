import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

/**
 * 前端登录验证参数视图类
 */
const LoginReq = new GraphQLInputObjectType({
    name: "LoginReq",
    description: "LoginReq",
    fields: {
        loginId: {
            type: GraphQLString,
            description: "登录账号"
        },
        passwd: {
            type: GraphQLString,
            description: "登录密码"
        },
        submit: {
            type: GraphQLString,
            description: "登录动作"
        },
        type: {
            type: GraphQLString,
            description: "类别"
        }
    }
});

export default LoginReq;