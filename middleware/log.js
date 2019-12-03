// function log(ctx) {
//   console.log(ctx.method, ctx.header.host + ctx.url);
// }

// module.exports = function() {
//   return async function(ctx, next) {
//     log(ctx);
//     await next();
//   };
// };

function log() {
  return async function(ctx, next) {
    console.log(ctx.method, ctx.header.host + ctx.url);
    await next();
  };
}

module.exports = log;
