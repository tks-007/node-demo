module.exports = {
    index: async (ctx, next) => {
        ctx.body = 'index'
    },
    info: async (ctx, next) => {
      ctx.body = ctx;
    }
}