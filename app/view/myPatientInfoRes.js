import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';
import PatientInfo from './patientInfo';

/**
 * 
 * 
 */
const MyPatientInfoRes = new GraphQLObjectType({
    name: "MyPatientInfoRes",
    description: "MyPatientInfoRes",
    fields: {
        bedNo: {
            type: GraphQLString,
            description: "床位号"
        },
        dripPatientInfo: {
            type: PatientInfo,
            description: "病人信息"
        }
    }
});
export default MyPatientInfoRes;
