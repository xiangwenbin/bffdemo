import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';
/**
 * 应用视图
 */
const App = new GraphQLObjectType({
	name: "Apps",
	description: "应用",
	fields: {
		appId: {
			type: GraphQLString,
			description: "应用ID"
		},
		appLogo: {
			type: GraphQLString,
			description: "应用logo"
		},
		appName: {
			type: GraphQLString,
			description: "应用名称"
		}
	}
});
export default App;