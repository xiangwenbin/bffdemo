/**
 * 服务启动入口
 */
import Koa from 'koa';
import logger from 'koa-logger';
import koaStatic from 'koa-static';
import {people, Child, graphqlTest} from './router';
import koaBody from './filter/koa-body';
import bodyParser from 'body-parser';
const app = new Koa();
console.log(__dirname);

/**
 * 设置静态文件目录
 */
app.use(koaStatic('public'));

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
app.use(logger());
/**
 * 使用 自定义koabody中间件 提取body信息
 *  */
app.use(koaBody());

/**
 * 请求路由
 *  */

// app.use(bodyParser.text({type: 'application/graphql'}));
app.use(people.routes());
app.use(new Child().getRouters());
app.use(graphqlTest.routes());

/**
 * 默认404请求返回值
 * */
app.use((ctx) => {
  ctx.body = JSON.stringify({ code: 404, data: 'null' });
})

app.listen(3000, () => console.log('server started 3000'))

export default app
