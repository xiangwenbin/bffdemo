import router from 'koa-router';
// import LoginSchema from '../schema/loginSchema';
import CommonSchema from '../schema/commonSchema';
import { graphql } from 'graphql';
import LoginService from '../service/loginService';
const CommonRouter = router();
/**
 * 公共路由
 */
CommonRouter.post('/common', async (ctx, next) => {
  await graphql(CommonSchema, ctx.request.body, null, ctx).then((result) => {
    ctx.body = JSON.stringify(result);
  })
});
CommonRouter.post('/graphqlxx',  (ctx, next) => {
    ctx.body = "xzz";
});
export default CommonRouter;