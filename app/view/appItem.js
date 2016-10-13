
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';
/**
 * AppItem
 */
const AppItem = new GraphQLObjectType({
	name: "AppItem",
	description: "AppItem",
	fields: {
		itemName: {
			type: GraphQLString,
			description: "应用ID"
		},
		itemCode: {
			type: GraphQLString,
			description: "应用logo"
		}
	}
});
export default AppItem;