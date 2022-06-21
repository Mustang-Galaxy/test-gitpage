const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  title: 'hello vue press',
  description: 'just playing around',
  base: '/test-gitpage/',
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
        ],
      },
      '/guide/configure.md',
    ],
  }),
}
