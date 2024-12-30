<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import HomeView from "./Views/HomeView.vue";
import DailyReward from "./Views/DailyReward.vue";
import router from "./router";

import TicketInventory from "./Views/TicketInventory.vue";
import TicketPoint from "./Views/TicketPoint.vue";
import TicketReward from "./Views/TicketReward.vue";
import TicketLucky from "./Views/TicketLucky.vue";
import DoggyLucky from "./Views/DoggyLucky.vue";
import DogsReward from "./Views/DogsReward.vue";
import CatBags from "./Views/CatBags.vue";
import TONReward from "./Views/TONReward.vue";
import TONSReward from "./Views/TONSReward.vue";
import RewardConfirmation from "./Views/RewardConfirmation.vue";

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>

  </main>

  <nav>
    <router-link to="/"></router-link> 
    <router-link to="/daily"></router-link> 
    <router-link to="/ticketinventory"></router-link> 
    <router-link to="/ticketpoint"></router-link> 
    <router-link to="/ticketreward"></router-link> 
    <router-link to="/ticketlucky"></router-link>
    <router-link to="/doggylucky"></router-link>
    <router-link to="/dogsreward"></router-link>
    <router-link to="/catbags"></router-link>
    <router-link to="/tonreward"></router-link>
    <router-link to="/tonsreward"></router-link>
    <router-link to="/rewardconfirm"></router-link>
  </nav>
  <router-view></router-view>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
