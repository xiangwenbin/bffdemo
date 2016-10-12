import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';
import PromotionType from './promotionType'
var ItemType = new GraphQLObjectType({
    name: "item",
    description: "item",
    fields: {
        id: {
            type: GraphQLString,
            description: "item id"
        },
        title: {
            type: GraphQLString,
            description: "item title"
        },
        price: {
            type: GraphQLString,
            description: "item price",
            resolve: function (root, param, context) {
                return (root.price / 100).toFixed(2);
            }
        }
        // ,
        // promotion:{
        //     type: PromotionType,
        //     description: "item price",
        //     resolve: function (root, param, context) {
        //         return (root.price / 100).toFixed(2);
        //     }
        // }
    }
});

export default ItemType;