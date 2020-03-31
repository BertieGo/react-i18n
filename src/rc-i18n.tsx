import React, { Component } from 'react';

type TParams = {
    [name: string]: string,
} | undefined;

interface IProps {
    region: string,
    i18n: string,
    params?: TParams,
    className?: string,
    onClick?: () => void
}

type TLocalCache = {
    [language: string]: {
        [item: string]: any
    }
}

export default class I18n extends Component<IProps> {

    static defaultProps = {
        onClick: () => {},
    };

    static LOCALE_CACHE: TLocalCache = {};
    static CURRENT_LOCALE: string = (() => {
        let locale = '';

        if (
            window.localStorage &&
            window.localStorage.locale &&
            typeof window.localStorage.locale === 'string'
        ) {
            locale = window.localStorage.locale.toLowerCase();
        } else {
            locale = window.navigator.language.toLowerCase();
        }

        if (locale.indexOf('en') !== -1) {
            return 'en-US';
        }

        return 'zh-CN';
    })();

    static switchLanguage(language: string) {
        // zh-CN, en-US ....
        window.localStorage.locale = language;
        window.location.reload();
    }

    static getCurrentLanguage (): string {
        return window.localStorage.locale || navigator.language.toLowerCase();
    }

    static get(region: string, i18n: string, params: TParams) {
        if (typeof i18n === 'undefined') {
            return {
                ...I18n.LOCALE_CACHE[region][I18n.CURRENT_LOCALE],
                get: (k: string) => I18n.get(region, k, params),
            };
        }

        let value = I18n.LOCALE_CACHE[region][I18n.CURRENT_LOCALE][i18n];

        if (!value) {
            throw new Error(
                `I18n: Can't find ${region}.${I18n.CURRENT_LOCALE}.${i18n} resource.`
            );
        }

        if (params) {
            const keys = Object.keys(params);
            keys.forEach((k) => {
                const v = params[k];
                value = value.replace(`\${${k}}`, v);
            });
        }

        return value;
    }

    render() {
        const { region, i18n, params, className, onClick } = this.props;
        const value = I18n.get(region, i18n, params);

        return (
            <span className={className} onClick={onClick}>
                {value}
            </span>
        );
    }
}

export function injectAsyncI18n(region: string, json: any) {
    if (I18n.LOCALE_CACHE[region]) {
        return;
    }

    I18n.LOCALE_CACHE[region] = {
        'zh-CN': json['zh-CN'] || {},
        'en-US': json['en-US'] || {},
    };
}
