import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';
/**
 * QueryMessageReq
 */
const QueryMessageReq = new GraphQLObjectType({
	name: "QueryMessageReq",
	description: "QueryMessageReq",
	fields: {
		pageNumber: {
			type: GraphQLInt,
			description: "当前页,从0开始"
		},
		pageSize: {
			type: GraphQLInt,
			description: "分页条数"
		},
		moduleCode: {
			type: GraphQLString,
			description: "模块code"
		}
	}
});
export default QueryMessageReq;