import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", component: () => import("../views/Login.vue")
        },
        {
               
           path: "/albums", component: () => import("../views/Albums.vue")
        
        }
    ]
});

export default router;