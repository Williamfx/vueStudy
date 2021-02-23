const { default: VueRouter } = require("vue-router")

;(function () {
    window.router = new VueRouter({
        routes: [
              {path:'/',component:AppHome},
              {path:'/news',component:News},
              {path:'/about',component:About},
        ]
    })
})()