module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        }
        // customStyleName: (name) => {
        //   name = name.slice(3)
        //   return `element-plus/packages/theme-chalk/src/${name}.css`;
        // }
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
};
