module.exports = () => {
    return async (ctx, next) => {
        // console.log('routesAsync', ctx)
        const status =  ctx.response.status
        switch(status) {
            case 200:
                await next()
                break;
            case 404:
                ctx.render('/404')
                break;
            case 500:
                ctx.render('/500')
                break
            default:
                await next()
        }


    }
}