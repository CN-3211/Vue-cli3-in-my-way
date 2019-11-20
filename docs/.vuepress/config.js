module.exports = {
  theme: 'yur',
  title: '子涵',
  description: '...',
  port: '3211',
  markdown: { lineNumbers: true },
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sideBar'),
    timeline: true,
    about: {
      // banner: ''
      name: 'yangxiaojin',
      introduction: '嘿嘿，暂时还没想好'
    },
    footer: [
      [ // 推荐资源
        {
          title: 'VuePress',                                        // 标题
          subtitle: '框架基础',                           // 描述
          link: 'https://www.vuepress.cn/', // 跳转链接
        },
        {
          title: 'Yur',                                        // 标题
          subtitle: '主题插件',                           // 描述
          link: 'https://github.com/cnguu/vuepress-theme-yur', // 跳转链接
        },
      ],
      [ // 相关信息
        {
            title: 'Github',                   // 标题
            link: 'https://github.com/CN-3211', // 跳转链接
            type: 'github',                    // 图标，这里获取：https://vue.ant.design/components/icon-cn/
            theme: 'filled',                   // 图标类型，可选：filled（实心）丨outlined（默认：描线）丨twoTone（双色）
        }
      ],
      [ // 其它
        {
            title: 'huangzh873@gmail.com',       // 标题
            type: 'mail',                // 图标，这里获取：https://vue.ant.design/components/icon-cn/
            theme: 'outlined',           // 图标类型，可选：filled（实心）丨outlined（默认：描线）丨twoTone（双色）
        }
      ]
    ],
  }
}