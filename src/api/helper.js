import { instance } from './axios';

const STATUS_OK = 200;
export function get(url){
  return function(params, config){
    return instance.get(url, {
      ...config,
      params
    }).then(res => {
      const {data, status} = res;
      if(status === STATUS_OK){
        return data;
      }else{
        return Promise.reject(res);
      }
    }).catch(err => Promise.reject(err))
  }
}