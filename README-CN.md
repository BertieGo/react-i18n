# react-i18n

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> 基于 React 开发的轻量级国际化方案

## Language
[English](https://github.com/BertieGo/react-i18n)

## Usage

npm : ````  npm install rc-i18n ````  

yarn : ```` yarn add rc-i18n ````


## Examples
首先需要根据语言配置 ``i18n.json`` 文件，例如:
````
{
  "zh-CN": {
    "say_hi": "你好!"

  },
  "en-US": {
    "say_hi": "Hi!"
  }
}

````
在代码内，引入与使用方式：

````
import I18n, { injectAsyncI18n } from './rc-i18n';
// 需要提前注入 i18n.json 配置
injectAsyncI18n('TEST', require('./i18n'));

render() {
    <I18n  region={'TEST'} i18n="say_hi" />
}
````

## API
- **getCurrentLanguage**: ``(): CN-zh | en-US  ``  
获取当前语言

- **switchLanguage**:``(language: CN-zh | en-US): void  ``  
切换语言

- **get**: ``(region: string, i18n: string, params: {[name]: string }) : string  ``  
获取某个语言字段


## NPM
[rc-i18n](https://www.npmjs.com/package/rc-i18n)