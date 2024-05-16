import request from "@/api/request.js";
import mockRequest from "@/api/mockRequest.js";
export const reqCategoryList = ()=>{
    return request.get('/product/getBaseCategoryList');
}
export const reqBannerList = ()=>{
    return mockRequest.get('/banners');
}