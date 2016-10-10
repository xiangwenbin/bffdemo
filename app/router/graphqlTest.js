import router from 'koa-router';
import {schema,ItemSchema} from '../schema/schema';

import { graphql } from 'graphql';
var graphqlTest = router();

graphqlTest.post('/graphql/test', async function (ctx, next) {

  console.log("ctx.request.body", ctx.request.body);
  await graphql(schema, ctx.request.body).then((result) => {
    console.log(result);
    ctx.body = JSON.stringify(result);
  })
  // await next()
});
graphqlTest.post('/graphql/item', async function (ctx, next) {
  // ctx.body = 'graphqltest body '+JSON.stringify(ctx.request.body);
  console.log("ctx.request.body", ctx.request.body);
  await graphql(ItemSchema, ctx.request.body).then((result) => {
    console.log(result);
    ctx.body = JSON.stringify(result);
  })
  // await next()
});
export default graphqlTest;
