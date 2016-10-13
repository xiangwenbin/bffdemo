import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInputObjectType
} from 'graphql';

/**
 * 
 */
const MyPatientInfoReq = new GraphQLInputObjectType({
    name: "MyPatientInfoReq",
    description: "MyPatientInfoReq",
    fields: {
        unitCode: {
            type: GraphQLString,
            description: "科室"
        },
        shiftType: {
            type: GraphQLString,
            description: "类别,day or nignt"
        },
        pageNumber: {
            type: GraphQLInt,
            description: "当前页,从0开始"
        },
        pageSize: {
            type: GraphQLInt,
            description: "分页条数"
        }
    }
});
export default MyPatientInfoReq;

