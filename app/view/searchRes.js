import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import SearchContext from './searchContext';

/**
 * SearchRes
 * 
 */
const SearchRes = new GraphQLObjectType({
    name: "SearchRes",
    description: "SearchRes",
    fields: {
        title: {
            type: GraphQLString,
            description: "title"
        },
        resultList: {
            type: new GraphQLList(SearchContext),
            description: "resultList"
        },
        keyList:{
            type: new GraphQLList(GraphQLString),
            description: "keyList"
        }
    }
});
export default SearchRes;
