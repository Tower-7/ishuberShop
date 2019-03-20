module.exports = {
    //主页
    index: async ctx => {
        await ctx.render('move/index',{
            
        })
    },
    // 详情页
    detail: async ctx => {
        await ctx.render('move/detail')
    }
}