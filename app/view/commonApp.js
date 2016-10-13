import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import App from './app';

/**
 * 常用应用视图
 * 
 */
const CommonApp = new GraphQLObjectType({
    name: "CommonApp",
    description: "CommonApp",
    fields: {
        loginID: {
            type: GraphQLString,
            description: "登录ID"
        },
        appList: {
            type: new GraphQLList(App),
            description: "应用list"
        }
    }
});
export default CommonApp;
