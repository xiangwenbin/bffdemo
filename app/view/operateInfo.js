import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';
/**
 * 操作信息
 */
const OperateInfo = new GraphQLObjectType({
    name: "LoginRes",
    description: "item",
    fields: {
        operateName: {
            type: GraphQLString,
            description: "操作名称"
        },
        operateUrl: {
            type: GraphQLString,
            description: "操作链接"
        }
    }
});
export default OperateInfo;