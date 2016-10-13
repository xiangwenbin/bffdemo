// import {
//     GraphQLObjectType,
//     GraphQLSchema,
//     GraphQLInt,
//     GraphQLString
// } from 'graphql';
// import LoginRes from '../view/loginRes';
// import LoginReq from '../view/loginReq';
// import LoginService from '../service/loginService';

// /**
//  *  query LoginQuery { loginRes(loginReq:{loginId:"abc",passwd:"123456",type:"platform"}){access_token,token_type,refresh_token,expires_in,scope}}
//  *  query LoginQuery { loginRes{access_token,token_type,refresh_token,expires_in,scope}}
//  *  query LoginQuery { loginRes(loginId:"abc",passwd:"123456",type:"platform"){access_token,token_type,refresh_token,expires_in,scope}}
//  *  submit 参数可忽略
//  */
// const LoginSchema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: "LoginQuery",
//         description: "LoginQuery",
//         fields: {
//             loginRes: {
//                 type: LoginRes,
//                 description: "LoginRes",
//                 args:{
//                     loginReq: {
//                         type: LoginReq,
//                         description: ''
//                     }
//                 },
//                 resolve: (root, params, ctx) => {
//                     let result = LoginService.login(ctx, params.loginReq);
//                     return result;
//                 }
//             }
//         }
//     })
// });
// export default LoginSchema;

// // args: {
// //     loginId: {
// //         type: GraphQLString,
// //         description: ''
// //     },
// //     passwd: {
// //         type: GraphQLString,
// //         description: ''
// //     },
// //     submit: {
// //         type: GraphQLString,
// //         description: ''
// //     },
// //     type: {
// //         type: GraphQLString,
// //         description: ''
// //     }
// // },