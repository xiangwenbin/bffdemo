import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';
/**
 * SearchContext
 */
const SearchContext = new GraphQLObjectType({
	name: "SearchContext",
	description: "SearchContext",
	fields: {
		context: {
			type: GraphQLString,
			description: "context"
		},
		url: {
			type: GraphQLString,
			description: "url"
		}
	}
});
export default SearchContext;