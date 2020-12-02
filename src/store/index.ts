import {createStore} from 'vuex'
import getters from "/@/store/getters";
import asyncRouter from "/@/store/modules/async-router";
import lockscreen from "/@/store/modules/lockscreen";
import menus from "/@/store/modules/menus";
import user from "/@/store/modules/user";

export default createStore({
    state: {
        testName: 'hello'
    },
    mutations: {
        setTestName(state, name) {
            state.testName = name
        }
    },
    actions: {},
    modules: {
        'async-router': asyncRouter,
        lockscreen, menus, user
    },
    getters
})
