/**
 * @author CaiXi on 2016/9/16.
 * @description
 */

export function request (url) {
    console.info("url=", url);
    return fetch(url).then(response=>response.json());
}