import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';

import OperateInfo from './operateInfo';
/**
 * MessageInfo视图
 */
const MessageInfo = new GraphQLObjectType({
    name: "MessageInfo",
    description: "MessageInfo",
    fields: {
        message: {
            type: GraphQLString,
            description: "message"
        },
        operateList: {
            type: new GraphQLList(OperateInfo),
            description: "operateList"
        }
    }
});
export default MessageInfo;
