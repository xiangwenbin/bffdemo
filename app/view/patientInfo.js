import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';

/**
 * 病人信息

 */
const PatientInfo = new GraphQLObjectType({
    name: "病人信息",
    description: "病人信息",
    fields: {
        mrn: {
            type: GraphQLString,
            description: "住院号 HIS系统患者住院唯一标识，一次住院期间，值不发生变化"
        },
        patientId: {
            type: GraphQLString,
            description: "病历号 同一病人对应一个病历号，始终不变"
        },
        series: {
            type: GraphQLString,
            description: "住院次数 同一病人每次住院产生的序号"
        },
        name: {
            type: GraphQLString,
            description: "病人姓名"
        },
        sex: {
            type: GraphQLString,
            description: "性别：1男、0女、其他"
        },
        unitCode: {
            type: GraphQLString,
            description: "行政单元代码"
        },
        unitName: {
            type: GraphQLString,
            description: "行政单元名称"
        },
        bedNo: {
            type: GraphQLString,
            description: "床位号"
        },
        birthday: {
            type: GraphQLString,
            description: "出生日期"
        },
        age: {
            type: GraphQLString,
            description: "年龄"
        },
        ageM: {
            type: GraphQLString,
            description: "年龄 月"
        },
        ageD: {
            type: GraphQLString,
            description: "年龄 天"
        },
        phone: {
            type: GraphQLString,
            description: "手机"
        },
        address: {
            type: GraphQLString,
            description: "家庭住址"
        },
        professional: {
            type: GraphQLString,
            description: "职业"
        },
        contactInfo: {
            type: GraphQLString,
            description: "联系方式"
        },
        weight: {
            type: GraphQLString,
            description: "体重"
        },
        height: {
            type: GraphQLString,
            description: "身高"
        },
        admissionTime: {
            type: GraphQLString,
            description: "入院时间"
        },
        dischargeTime: {
            type: GraphQLString,
            description: "出院时间"
        },
        diagnosis: {
            type: GraphQLString,
            description: "入院诊断"
        },
        nursingClass: {
            type: GraphQLString,
            description: "护理级别：0特级护理,1一级护理,2二级护理,3三级护理"
        },
        chargeType: {
            type: GraphQLString,
            description: "医保费别"
        },
        chargeTypeName: {
            type: GraphQLString,
            description: "医保费别名称"
        },
        totalCost: {
            type: GraphQLInt,
            description: "总花费"
        },
        prePayment: {
            type: GraphQLInt,
            description: "预缴金额"
        },
        selfPayment: {
            type: GraphQLInt,
            description: "自付金额"
        },
        balance: {
            type: GraphQLInt,
            description: "余额"
        },
        arrearFlag: {
            type: GraphQLString,
            description: "欠费标识：0-不欠费;1-欠费"
        },
        diet: {
            type: GraphQLString,
            description: "饮食信息"
        },
        doctorName: {
            type: GraphQLString,
            description: "主治医生姓名"
        },
        allergy: {
            type: GraphQLString,
            description: "过敏史"
        },
        idno: {
            type: GraphQLString,
            description: "身份证号"
        },
        addmissionDepartment: {
            type: GraphQLString,
            description: "入院科室"
        },
        admissionWard: {
            type: GraphQLString,
            description: "入院病区"
        },
        leaveHospitalDepartment: {
            type: GraphQLString,
            description: "出院科室"
        },
        leaveHospitalWard: {
            type: GraphQLString,
            description: "出院病区"
        },
        admissionReason: {
            type: GraphQLString,
            description: "入院原因"
        },
        status: {
            type: GraphQLString,
            description: "在院状态"
        }
});
export default PatientInfo;
