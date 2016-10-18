import router from 'koa-router';
// import LoginSchema from '../schema/loginSchema';
import CommonSchema from '../schema/commonSchema';
import { graphql } from 'graphql';
import LoginService from '../service/loginService';
import Util from '../util/util';
const CommonRouter = router();
/**
 * 公共路由
 */
CommonRouter.post('/common', async (ctx, next) => {
  await graphql(CommonSchema, ctx.request.body, null, ctx).then((result) => {
    ctx.body = JSON.stringify(result);
  })
});
CommonRouter.get('/getTest', (ctx, next) => {
  ctx.body = "getTest body";
});
CommonRouter.get('/info', (ctx, next) => {
  ctx.body = "node service";
});
CommonRouter.get('/mservice/:serviceName', (ctx, next) => {
  let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = baseUrl;
});
export default CommonRouter;