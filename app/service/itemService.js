import rp from 'request-promise';
var ItemService =async function () {
    // var item={};
    var item =await rp('http://localhost:3000/item.json').then(
        function (body) {
            console.log("body",body);
            return JSON.parse(body);
        }
    );
    return item;
}
export default ItemService