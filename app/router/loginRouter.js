import router from 'koa-router';
import LoginSchema from '../schema/loginSchema';

import { graphql } from 'graphql';
const LoginRouter = router();
/**
 * query LoginQuery { LoginRes{access_token,token_type,refresh_token,expires_in,scope}}
 */
LoginRouter.post('/user/authorization/login', async (ctx, next) => {
  await graphql(LoginSchema, ctx.request.body,null,ctx).then((result) => {
    ctx.body = JSON.stringify(result);
  })
});

export default LoginRouter;
