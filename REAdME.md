## webpack 4.0 && babel-preset-env

参考[webpack4.0](https://github.com/webpack/webpack/releases/tag/v4.0.0)

参考[babel-env](https://babeljs.io/docs/plugins/preset-env/)

> 其中useBuiltIns若为true，需要配合"babel-polyfill"一起使用，在入口文件中```import 'babel-polyfill'```
将会根据env的browserslist配置，自动添加所有需要的polyfill

env默认不会转换built-ins的代码，如Object.assign, Promise等，参考[core-js](https://github.com/zloirock/core-js)以及[regenerator](https://github.com/facebook/regenerator)

若需转换这部分代码时，可加入babel-plugin-transform-runtime
