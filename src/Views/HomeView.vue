<template>
  <div class="main">
    <div class="Time">
      <p class="time-clock">09:41</p>
      <div class="display-screen">
        <img class="signal" src="../img/Mobile Signal.png" alt="">
        <img class="wifi" src="../img/Wifi.png" alt="">
        <img class="battery" src="../img/Battery.png" alt="">

      </div>
    </div>
    <div class="loader-container">
      <img src="../img/Asset 1.png" alt="" class="cat-hi" />
      <img src="../img/Asset 2.png" alt="" class="cat-image" />

      <div>
        <p class="loading-text">Loading...</p>
      </div>

      <div class="loading-bar-container">
        <div class="loading-bar"></div>
      </div>
    </div>
  </div>
</template>

  

<style scoped>
@media screen and (max-width: 700px) {
  .main {
    background: rgba(255, 249, 233, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 820px;
  }

  .Time {
    display: flex;
    gap: 200px;
  }

  .time-clock {
    color: rgba(0, 0, 0, 1);

    }

    .display-screen{
      display: flex;
      gap: 5px;
      margin-top: 17px;
      margin-left: 307px;
    }

    .display-screen img {
      width: 17px;
      height: 12px;
    }


  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
     justify-content: center; 
    width: 100%;
    height: 820px; 
   } 

  .cat-container {
    display: flex;
  }

  .cat-hi {
    width: 39px;
    height: 39px;
    margin-left: 272px;
  }

  .cat-image {
    width: 217px;
    height: 108px;
    margin-top: 319px;
  }

  .loading-bar-container {
    width: 80%;
    height: 12px;
    background-color: #f0ddd2;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .loading-bar {
    height: 100%;
    background: rgba(255, 225, 186, 1);
    border-radius: 10px;
    transition: width 0.2s ease;
    border: 1.5px solid rgba(99, 19, 19, 1);
  }
  .loading-text {
    color: rgba(99, 19, 19, 1);
    font-size: 13px;
    font-family: Irish Grover;
    font-weight: 400;
    margin-top: 266px;
  }
}
</style>
