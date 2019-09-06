// import { login } from './axios/helper';

// export const userLogin = login('/api/login');

import { get } from './helper';

//  export const getFakeJson = (paramsStr,params) => get(`/posts/${paramsStr}`)(params);
export const getFakeJson = params => get('/posts')(params);
// export const getFakeJson = get('/posts');
