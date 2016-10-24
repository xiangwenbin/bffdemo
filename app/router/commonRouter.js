import router from 'koa-router';
// import LoginSchema from '../schema/loginSchema';
import CommonSchema from '../schema/commonSchema';
import { graphql } from 'graphql';
import LoginService from '../service/loginService';
import BedService from '../service/baseinfo/bedService';
import FallPatientCompose from '../compose/fallNurse/fallPatientCompose';
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
CommonRouter.get('/graphql/getTest', (ctx, next) => {
  ctx.body = "graphql getTest body";
});
CommonRouter.get('/info', (ctx, next) => {
  ctx.body = "node service";
});
CommonRouter.get('/mservice/:serviceName', (ctx, next) => {
  let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = baseUrl;
});
CommonRouter.get('/info', (ctx, next) => {
  // let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = '{"status":"UP"}';
});

CommonRouter.get('/beds/:unitCode', async (ctx, next) => {
  let result =await BedService.getBedListByUnitCode(ctx.params.unitCode);
  ctx.body =  JSON.stringify(result);
});
CommonRouter.get('/summaryPatient/:status/:unitCode', async (ctx, next) => {
  let query=ctx.request.query;
  // console.log(query);
  let fallPatientCompose=new FallPatientCompose(ctx);
  let result =await fallPatientCompose.getFallPatientSummary(ctx.params.status, ctx.params.unitCode, query.nursingLevel, query.page, query.size); 
  ctx.body =  JSON.stringify(result);
});
export default CommonRouter;