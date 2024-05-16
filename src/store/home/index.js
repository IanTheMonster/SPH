import {reqBannerList, reqCategoryList} from "@/api";

const state = {
    categoryList: [],
    bannerList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList; // mutation操作
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    async categoryList(context) {
        let response = await reqCategoryList();
        if (response.code === 200) {
            context.commit("CATEGORYLIST", response.data);
        }
    },
    async bannerList(context) {
        let response = await reqBannerList();
        if (response.code === 200) {
            context.commit('BANNERLIST', response.data);
        }
    }


};
const getters = {};
export default {
    namespaced: true,
    state, mutations, actions, getters,
}