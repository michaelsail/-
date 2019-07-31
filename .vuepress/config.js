module.exports = {
  base: '/specification/dist/',
  dest:'dist',
  title: '健康160前端分享',
  themeConfig: {
    nav: [
    ],
    sidebar: [
      {
        title: '前端命名规则',
        collapsable: true,
        children: [
          '/native/CssClass6.md',
          '/native/eslint 和 stylelint 集成说明文档.md',
          '/native/编辑器及插件规范.md',
        ]
      }
    ]
  }
}