import type { App } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },

  {
    path: "/",
    name: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        // 用于 keep-alive 功能，需要与 SFC 中自动推导或显式声明的组件名称一致
        // 参考文档: https://cn.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "homepage",
          affix: true,
          keepAlive: true,
        },
      },
      {
        path: "401",
        component: () => import("@/views/error/401.vue"),
        meta: { hidden: true },
      },
      {
        path: "404",
        component: () => import("@/views/error/404.vue"),
        meta: { hidden: true },
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/views/profile/index.vue"),
        meta: { title: "个人中心", icon: "user", hidden: true },
      },
      {
        path: "myNotice",
        name: "MyNotice",
        component: () => import("@/views/system/notice/components/MyNotice.vue"),
        meta: { title: "我的通知", icon: "user", hidden: true },
      },
    ],
  },

  {
    path: "/admin",
    component: Layout,
    redirect: "/admin/admins",
    name: "/admin",
    meta: {
      title: "系统管理",
      icon: "system",
      hidden: false,
      alwaysShow: false,
      params: null
    },
    children: [
      {
        path: "admins",
        component: () => import("@/views/admins/index.vue"),
        name: "Admins",
        meta: {
          title: "管理员",
          icon: "el-icon-User",
          hidden: false,
          keepAlive: true,
          alwaysShow: false,
          params: null
        }
      },
      {
        path: "roles",
        component: () => import("@/views/roles/index.vue"),
        name: "Roles",
        meta: {
          title: "角色管理",
          icon: "role",
          hidden: false,
          keepAlive: true,
          alwaysShow: false,
          params: null
        }
      },
      {
        path: "permissions",
        component: () => import("@/views/permissions/index.vue"),
        name: "Permissions",
        meta: {
          title: "权限管理",
          icon: "role",
          hidden: false,
          keepAlive: true,
          alwaysShow: false,
          params: null
        }
      },
      {
        path: "menus",
        component: () => import("@/views/menus/index.vue"),
        name: "Menus",
        meta: {
          title: "菜单管理",
          icon: "menu",
          hidden: false,
          keepAlive: true,
          alwaysShow: false,
          params: null
        }
      },
      {
        path: "logs",
        component: () => import("@/views/logs/index.vue"),
        name: "Logs",
        meta: {
          title: "操作日志",
          icon: "document",
          hidden: false,
          keepAlive: true,
          alwaysShow: false,
          params: null
        }
      },
    ]
  },



];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
