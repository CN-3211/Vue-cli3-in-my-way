// import { login } from './axios/helper';

// export const userLogin = login('/api/login');

import { get, getJson } from './helper';

//  export const getFakeJson = (paramsStr,params) => get(`/posts/${paramsStr}`)(params);
export const getFakeJson = (params, paramsStr) => get(`/posts?${paramsStr}`)(params);
// export const getFakeJson = get('/posts');
export const getHTgeo = getJson('HT.geojson');
