# react-i18n

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Frontend internationalization component base React 

## Language
[Chinese](https://github.com/BertieGo/react-i18n/blob/master/README-CN.md)


## Usage

npm : ````  npm install rc-i18n ````  

yarn : ```` yarn add rc-i18n ````


## Examples
First, base on your language requirement to config ``i18n.json`` file, just like: 
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
In your code, import & usage:
````
import I18n, { injectAsyncI18n } from './rc-i18n';
// you need to inject i18n.json frist
injectAsyncI18n('TEST', require('./i18n'));

render() {
    <I18n  region={'TEST'} i18n="say_hi" />
}
````

## API
- **getCurrentLanguage**: ``(): CN-zh | en-US  ``  
get current language in window locale

- **switchLanguage**:``(language: CN-zh | en-US): void  ``  
switch language with ``CN-zh | en-US ``

- **get**: ``(region: string, i18n: string, params: {[name]: string }) : string  ``  
get local language value


## NPM
[rc-i18n](https://www.npmjs.com/package/rc-i18n)