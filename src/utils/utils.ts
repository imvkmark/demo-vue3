import { forEach } from 'lodash-es'
import { MD5 } from 'crypto-js';
import { appUrl, appVersion } from '@/utils/conf';
import { domain, localStore as _localStore } from '@popjs/util';

/**
 * 实现localStorage缓存的 存, 取, 删操作
 * @param key 对象, 批量设置
 * @param val 有值:设置; 无值: 获取; null, 删除;
 */
export const localStore = (key: any, val?: any) => {
    /**
     * Hash Key: 用于多地址之间数据共存, 不至于更换地址出现问题
     * @param key
     * @returns {string}
     * @private
     */
    let _hashKey = (key: string) => {
        return 'DD-' + hashKey().substr(0, 6).toUpperCase() + ':' + key;
    };

    return _localStore(_hashKey(key), val);
};

/**
 * 实现sessionStorage缓存的 存, 取, 删操作
 * @param key 对象, 批量设置
 * @param val 有值:设置; 无值: 获取; null, 删除;
 */
export const sessionStore = (key: any, val: any) => {
    // 本地数据存储封装，随页面回话结束而结束，仅限于该页面的协议
    if (val === null) {
        if (typeof key === 'object') {
            forEach(key, function (ele, idx) {
                sessionStorage.setItem(idx, ele);
            });
            return;
        } else {
            sessionStorage.removeItem(key);
            return;
        }
    }
    if (typeof val === 'undefined') {
        let data = sessionStorage.getItem(key);
        if (typeof data === 'string') {
            try {
                data = JSON.parse(data);
                return data; // 获取数据
            } catch (err) {
                return sessionStorage.getItem(key); // 获取数据
            }
        }
        return data; // 获取数据
    }
    if (typeof val === 'object') {
        sessionStorage.setItem(key, JSON.stringify(val));
        return;
    } else {
        sessionStorage.setItem(key, val);
        return;
    }
};

export const canDoNext = (ele: HTMLElement | undefined) => {
    return ele && !ele.dataset.disabled;
}

/**
 * 通过域名 + 版本号摒弃缓存
 * @returns {*}
 */
export const hashKey = () => {
    console.log(domain(appUrl ? appUrl : ''));
    return MD5(domain(appUrl ? appUrl : '') + appVersion).toString();
};
