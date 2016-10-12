/**
 * 服务启动入口
 * convert 包的作用 转换过时的generator中间件到anync中间件，如kao-static,koa-logger 
 */
import Koa from 'koa';
import convert from 'koa-convert';
import logger from 'koa-logger';
import koaStatic from 'koa-static';
import session from "koa2-cookie-session";
import {people, Child, graphqlTest,LoginRouter} from './router';
import koaBody from './filter/koa-body';
import bodyParser from 'body-parser';
import log4js from './log4js';
const app = new Koa();
const log = log4js.getLogger('DEBUG');

// class Xddd{
//   static state="xxx";

// }
log.debug("启动目录:"+__dirname);

/**
 * 设置静态文件目录
 */
log.debug("设置静态文件目录:/public");
app.use(convert(koaStatic('public')));
/**
 * 设置回话
 */
app.use(session({
    key: "SESSIONID",   //default "koa:sid" 
    expires:3, //default 7 
    path:"/" //default "/" 
}));
/**
 * 异常处理
 */
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    // throw err;
    ctx.body = JSON.stringify({ code: err.status, data: JSON.stringify(err) });
  }
});

/**
 * 访问日志 
 * */
// app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }));
log.debug("设置访问日志");
app.use(convert(logger()));

/**
 * 前置过滤器 
 */
app.use(async (ctx,next) => {
   console.log("session:",ctx.session);
   await next();
});
/**
 * 使用 自定义koabody中间件 提取body信息
 *  */
log.debug("设置request body filter");
app.use(koaBody());

/**
 * 请求路由
 *  */

// app.use(bodyParser.text({type: 'application/graphql'}));
log.debug("设置请求路由");
app.use(people.routes());
app.use(new Child().getRouters());
app.use(graphqlTest.routes());
app.use(LoginRouter.routes());

/**
 * 默认404请求返回值
 * */
app.use((ctx) => {
  ctx.body = JSON.stringify({ code: 404, data: 'null' });
});


app.on('error', (err, ctx) => {
  console.error('服务异常：', err, ctx);
});
app.listen(3000, () => console.log('server started 3000'))

export default app
