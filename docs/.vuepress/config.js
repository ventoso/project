module.exports = {
    title: 'Ventoso | project',
    description: 'Ventoso学习笔记',
    base: '/dist/',
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }],    
        ['link', { rel: 'icon', href: 'https://cdn.ventoso.top/wordpress/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    markdown: {
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        },
        lineNumbers: true
    },
  theme: 'reco',
  themeConfig: {
          modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
          nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'Links',
        ariaLabel: 'Links',
        icon: 'reco-menu',
        items: [
            { text: 'Blog', link: 'https://ventoso.top/', icon: 'reco-blog' },
            { text: 'List', link: 'https:list.ventoso.top/', icon: 'reco-menu' },
                ]
      },
            
    ],
      logo: 'https://cdn.ventoso.top/wordpress/favicon.ico',
     // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
    // 项目开始时间，只填写年份
    startYear: '2020',
    author: 'TniAsu',
    authorAvatar: 'https://cdn.ventoso.top/wordpress/avatar.png',
    //huawei: true
    sidebar: 'auto',//在所有页面中启用自动生成侧栏
  },
    repo: 'ventoso/project',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    //docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true
    // 默认为 "Edit this page"
    //editLinkText: '帮助我们改善此页面！'
  }
}
