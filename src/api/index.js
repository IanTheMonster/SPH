import request from "@/api/request";
export const reqCategoryList = ()=>{
    return request.get('/product/getBaseCategoryList',{
        method:'GET',
    });
}