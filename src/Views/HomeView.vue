<template>
  <div class="container">
    <div class="main">
      <div class="Time">
        <p class="time-clock">09:41</p>
        <div class="display-screen">
          <img class="wifi" src="../img/Wifi.png" alt="" />
          <img class="battery" src="../img/Battery.png" alt="" />
        </div>
      </div>
      <div class="loader-container">
        <img src="../img/Asset 2.png" alt="" class="cat-image" />

        <div class="cat-hi">
          <img src="../img/hi.svg" alt="" />
        </div>
      </div>

      <div>
        <p class="loading-text">Loading...</p>
      </div>

      <div class="loading-bar-container">
        <div class="loading-bar" ></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loadingProgress: 0
      }
    },
    methods: {
      updateLoadingProgress () {
        if(this.loadingProgress < 100) {
          this.loadingProgress += 1
          setTimeout(this.updateLoadingProgress, 20)
        }else {
          this.$router.push('/daily')
        }
      }
    },
    mounted () {
      this.updateLoadingProgress()
    }
  }
</script>


<style scoped>
.container {
  max-width: 815px;
  margin: 0 auto;
  background: rgba(255, 249, 233, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98vh;
}

main {
  background: rgba(255, 249, 233, 1);
  
}

.cat-image{
  width: 400px;
  height: 266px;
  margin-top: 30%;
}

.cat-hi img{
  margin-right: 50px;
  width: 60px;
  height: 60px;
}

.loading-text {
    color: rgba(99, 19, 19, 1);
    font-size: 28px;
    font-family: Irish Grover;
    font-weight: 400;
    margin-top: 123px;
    text-align: center;
  }

.loading-bar {
    height: 100%;
    border-radius: 10px;
    transition: width 0.2s ease;
    border: 1.5px solid rgba(99, 19, 19, 1);
    animation: progress 2s linear infinite; /* Tạo animation */
    background: linear-gradient(180deg, #bf5828 0%, #592913 100%);
  }

  .loading-bar-container {
    width: 80%;
    height: 22px;
    background-color: #f0ddd2;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    border: 1.5px solid rgba(99, 19, 19, 1);
    background: rgba(255, 225, 186, 1);
  }

  .loading-bar {
    height: 100%;
    border-radius: 10px;
    transition: width 0.2s ease;
    border: 1.5px solid rgba(99, 19, 19, 1);
    animation: progress 2s linear infinite; /* Tạo animation */
    background: linear-gradient(180deg, #bf5828 0%, #592913 100%);
    transition: width 0.3s ease;
  }

  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

@media screen and (max-width: 700px) {
  .container {
    background: rgba(255, 249, 233, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 210vh;
  }
  .main {
    background: rgba(255, 249, 233, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* height: 193vh; */
  }

  .Time {
    display: flex;
    gap: 200px;
  }

  .time-clock {
    color: rgba(0, 0, 0, 1);
  }

  .display-screen {
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

    align-items: center;
    justify-content: center;
    width: 100%;
    height: 820px;
  }

  .cat-container {
    display: flex;
  }

  .cat-hi img {
    width: 100%;
    margin-bottom: 79px;
    margin-right: 101px;
  }

  .cat-image {
    width: 70%;
    height: auto;
    margin-top: 30%;
    margin-left: 24%;
  }

  .loading-bar-container {
    width: 80%;
    height: 22px;
    background-color: #f0ddd2;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    border: 1.5px solid rgba(99, 19, 19, 1);
    background: rgba(255, 225, 186, 1);
  }

  .loading-bar {
    height: 100%;
    border-radius: 10px;
    transition: width 0.2s ease;
    border: 1.5px solid rgba(99, 19, 19, 1);
    animation: progress 2s linear infinite; /* Tạo animation */
    background: linear-gradient(180deg, #bf5828 0%, #592913 100%);
  }

  .loading-text {
    color: rgba(99, 19, 19, 1);
    font-size: 32px;
    font-family: Irish Grover;
    font-weight: 400;
    margin-top: 346px;
    
  }

  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
}
</style>
