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
        pprice: {
            type: GraphQLString,
            description: "item id"
        }
    }
});

export default ItemType;