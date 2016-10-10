import router from 'koa-router';
import log4js from '../log4js';
var log = log4js.getLogger('access');
class Child {
    constructor() {
        this.log = log4js.getLogger('access');
        this.router = router();
        this.router.get('/child', function (ctx, next) {
            ctx.body = 'child body';
        }).get('/child/add', function (ctx, next) {
            ctx.body = 'add child';
            log.debug("debug test:", new Date());
            log.info("info test:", new Date());
        });
    }
    getRouters() {
        return this.router.routes();
    }
}

// var child=router();
// child.get('/child', function (ctx, next) {
//      ctx.body = 'child body';
// }).get('/child/add', function (ctx, next) {
//      ctx.body = 'add child';
//      log.debug("debug test:", new Date());
//      log.info("info test:", new Date());
// });
export default Child;
