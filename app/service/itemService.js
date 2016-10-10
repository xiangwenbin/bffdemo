/**
 * 异步数据服务
 */
import rp from 'request-promise';
/**
 * 类写法
 */
class ItemService {
    static async getItem() {
        var item = {};
        item = await rp('http://localhost:3000/item.json').then(
            function (body) {
                console.log("body", body);
                return JSON.parse(body);
            }
        );
        return item;
    }
}
/**
 * 函数写法
 */
// var ItemService = async function () {
//     // var item={};
//     var item = await rp('http://localhost:3000/item.json').then(
//         function (body) {
//             console.log("body", body);
//             return JSON.parse(body);
//         }
//     );
//     return item;
// }
export default ItemService