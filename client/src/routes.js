const routes = [
  {
    path: "/",
    component: () => import("./layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("./pages/Index.vue") }]
  },
  {
    path: "/triage",
    component: () => import("./layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("./pages/Triage.vue") }]
  },
  {
    path: "/report",
    component: () => import("./layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("./pages/Report.vue") }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("./pages/Error404.vue")
  });
}

export default routes;
