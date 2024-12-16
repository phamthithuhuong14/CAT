// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./../Views/HomeView.vue";
import DailyReward from "../Views/DailyReward.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../Views/HomeView.vue"),
  },
  {
    path: "/daily",
    name: "DailyRewards",
    component: () => import("../Views/DailyReward.vue"),
  },
  {
    path: "/ticket inventory",
    name: "Ticket Inventory",
    component: () => import("../Views/Ticket Inventory.vue"),
  },
  {
    path: "/ticketpoint",
    name: "TicketPoint",
    component: () => import("../Views/TicketPoint.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
