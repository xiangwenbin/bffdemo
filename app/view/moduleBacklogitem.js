import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';

/**
 * 模块代办明细视图
 */
const ModuleBacklogitem = new GraphQLObjectType({
    name: "ModuleBacklogitem",
    description: "模块代办明细视图",
    fields: {
        moduleName: {
            type: GraphQLString,
            description: "模块名称"
        },
        moduleCode: {
            type: GraphQLString,
            description: "模块代码"
        },
        count: {
            type: GraphQLInt,
            description: "代办数量"
        },
        hasChild: {
            type: GraphQLBoolean,
            description: "是否有子节点"
        },
        ModuleBacklogitemList: {
            type: new GraphQLList(ModuleBacklogitem),
            description: "子模块代办明细"
        }
    }
});
export default ModuleBacklogitem;
