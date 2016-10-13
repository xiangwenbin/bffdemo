import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';

/**
 * 
 */
const MyBed = new GraphQLObjectType({
    name: "MyBed",
    description: "MyBed",
    fields: {
        loginId: {
            type: GraphQLString,
            description: "loginId"
        },
        unitCode: {
            type: GraphQLString,
            description: "unitCode"
        },
        shiftType: {
            type: GraphQLString,
            description: "shiftType"
        },
        bedNoList: {
            type: new GraphQLList(GraphQLString),
            description: "bedNoList",
            resolve: (root) => {
                return root.bedNos;
            }
        },
        totalPages: {
            type: GraphQLInt,
            description: "totalPages"
        },
        totalElements: {
            type: GraphQLInt,
            description: "totalElements"
        },
        numberOfElements: {
            type: GraphQLInt,
            description: "numberOfElements"
        },
        first: {
            type: GraphQLBoolean,
            description: "first"
        },
        size: {
            type: GraphQLInt,
            description: "size"
        },
        number: {
            type: GraphQLInt,
            description: "number"
        }
    }
});
export default MyBed;
