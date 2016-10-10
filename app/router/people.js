import router from 'koa-router';
var people = router();
people.get('/people', function (ctx, next) {
    // console.log(ctx);
    // console.log(ctx.request.query);

    // console.log(ctx.num)
    // if(!ctx.num){
    //     ctx.num=0;
    // }
    // ctx.num++;
    // console.log(ctx.num);
    ctx.body = 'people body query 参数：' + JSON.stringify(ctx.request.query);

});
export default people;
