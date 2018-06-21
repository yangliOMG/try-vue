/*
 * @Author: yangli 
 * @Date: 2018-06-21 10:07:12 
 * @Last Modified by: yangli
 * @Last Modified time: 2018-06-21 14:30:45
 */
/**
 * 获取url参数
 * @param {参数key} name 
 */
export function getQueryString(name){
    if(typeof window === 'undefined'){
        return true
    }
    let reg = new RegExp('(^|&)'+ name +'=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)||window.location.href.split('?')[1].match(reg)
    if(r!=null){
        return  unescape(r[2]) 
    }
    return null
}
