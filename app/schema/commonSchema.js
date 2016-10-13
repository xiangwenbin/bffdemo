import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString
} from 'graphql';
import LoginRes from '../view/loginRes';
import LoginReq from '../view/loginReq';
import LoginService from '../service/loginService';
/**
 *  公共查询Schema
 * 
 */
const CommonSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        description: "RootQueryType",
        fields: {
            /**
             * 登录验证
             * example:
             * query RootQueryType {loginRes(loginReq:{loginId:"abc",passwd:"123456",type:"platform"}){access_token,token_type,refresh_token,expires_in,scope}}
             * submit 参数可忽略
             */
            loginRes: {
                type: LoginRes,
                description: "LoginRes",
                args: {
                    loginReq: {
                        type: LoginReq,
                        description: '登录验证信息'
                    }
                },
                resolve: (root, queryParams, ctx) => {
                    let result = LoginService.login(ctx, queryParams.loginReq);
                    return result;
                }
            }
        }
    })
});
export default CommonSchema;

// args: {
//     loginId: {
//         type: GraphQLString,
//         description: ''
//     },
//     passwd: {
//         type: GraphQLString,
//         description: ''
//     },
//     submit: {
//         type: GraphQLString,
//         description: ''
//     },
//     type: {
//         type: GraphQLString,
//         description: ''
//     }
// },