import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Hotel from '@/pages/Hotel'
import MemberCenter from '@/pages/MemberCenter'
import ProductList from '@/pages/ProductList'
import ProductDetail from '@/pages/ProductDetail'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/hotel',
            name: 'Hotel',
            component: Hotel
        },
        {
            path: '/memberCenter',
            name: 'MemberCenter',
            component: MemberCenter
        },
        {
            path: '/productList',
            name: 'ProductList',
            component: ProductList,
            meta:{ keepAlive: true }
        },
        {
            path: '/productDetail',
            name: 'ProductDetail',
            component: ProductDetail
        },
        {
            path: '/memberContent',
            name: 'MemberContent',
            component: () => import (/* webpackChunkName: "MemberContent" */'@/pages/MemberContent')
        }
    ]
})

export default router