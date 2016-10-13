import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import AppItem from './appItem';

/**
 * OpenApp
 * 
 */
const OpenApp = new GraphQLObjectType({
    name: "OpenApp",
    description: "OpenApp",
    fields: {
        appCode: {
            type: GraphQLString,
            description: "appCode"
        },
		appName: {
            type: GraphQLString,
            description: "appName"
        },
        itemList: {
            type: new GraphQLList(AppItem),
            description: "itemList"
        }
    }
});
export default OpenApp;

