// src/router/index.js
import { createRouter, createWebHistory, useRouter } from "vue-router";
import HomeView from "../Views/HomeView.vue";
import DailyReward from "../Views/DailyReward.vue";
import TicketInventory from "../Views/TicketInventory.vue";
import TicketPoint from "../Views/TicketPoint.vue";
import TicketReward from "../Views/TicketReward.vue";
import TicketLucky from "../Views/TicketLucky.vue";
import DoggyLucky from "../Views/DoggyLucky.vue";
import DogsReward from "../Views/DogsReward.vue";
import CatBags from "../Views/CatBags.vue";
import TONReward from "../Views/TONReward.vue";
import TONSReward from "../Views/TONSReward.vue";
import RewardConfirmation from "../Views/RewardConfirmation.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/daily",
    name: "DailyRewards",
    component: DailyReward,
  },
  {
    path: "/ticketinventory",
    name: "Ticket Inventory",
    component: () => import("../Views/TicketInventory.vue"),
  },
  {
    path: "/ticketpoint",
    name: "TicketPoint",
    component: () => import("../Views/TicketPoint.vue"),
  },
  {
    path: "/ticketreward",
    name: "TicketReward",
    component: () => import("../Views/TicketReward.vue"),
  },
  {
    path: "/ticketlucky",
    name: "TicketLucky",
    component: () => import("../Views/TicketLucky.vue"),
  },

  {
    path: "/doggylucky",
    name: "DoggyLucky",
    component: () => import("../Views/DoggyLucky.vue"),
  },

  {
    path: "/dogsreward",
    name: "DogsReward",
    component: () => import("../Views/DogsReward.vue"),
  },

  {
    path: "/catbags",
    name: "CatBags",
    component: () => import("../Views/CatBags.vue"),
  },

  {
    path: "/tonreward",
    name: "TONReward",
    component: () => import("../Views/TONReward.vue"),
  },

  {
    path: "/tonsreward",
    name: "TONSReward",
    component: () => import("../Views/TONSReward.vue"),
  },

  {
    path: "/rewardconfirm",
    name: "RewardConfirm",
    component: () => import("../Views/RewardConfirmation.vue"),
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
