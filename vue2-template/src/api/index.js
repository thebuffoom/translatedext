import http from "./http";


export const getlistApi =(params)=> http.get('https://applet-base-api-t.itheima.net/api/translate',{params})