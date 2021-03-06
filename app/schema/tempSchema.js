import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt
} from 'graphql';
import ItemType from '../model/itemType';
import ItemService from '../service/itemService';
let count = 0;

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                description: '数量!',
                resolve: function () {
                    return count;
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: '更新数量',
                resolve: function () {
                    count += 1;
                    return count;
                }
            }
        }
    })
});

/**
 * query ItemQuery { item{id,title} }
 * query ItemQuery{ item(id:1){id,title,price} }
 */
var ItemSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "ItemQuery",
        description: "query item",
        fields: {
            item: {
                type: ItemType,
                description: "item",
                args: {
                    id: {
                        type: GraphQLInt,
                        required: true
                    }
                },
                resolve: function (root, obj, ctx) {
                    console.log("item obj params",obj);
                    console.log("item ctx params",ctx);
                    let item = ItemService.getItem();
                    return  item;
                }
            }
        }
    })
});
export {schema, ItemSchema};