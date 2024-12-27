<template>
  <div class="daily-reward-container">
    <div class="header">
      <div class="user-info">
        <span class="user-icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </span>
        <span class="user-name">Konkuviti</span>
      </div>
    </div>

    <div class="ticket-number">
      <h3 class="ticket-label">Ticket:</h3>
      <p class="ticket-amount">2</p>
      <img src="../img/ticket.svg" alt="" />
    </div>

    <div class="ticket">

      <div class="ticket-point">
        <img src="../img/Vector-image-white.svg"></img>
        <img class="Vector" src="../img/Vector.svg" alt="">
        <div class="point-circle">
            <p>4.000</p>
            <p>POINT</p>
        </div>
        <img src="../img/Vector-image-yellow.svg" alt="" />
      </div>
      
        <button class="open-button">Open again</button>
    </div>
  </div>
</template>

<style scoped>

.daily-reward-container {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  width: 700px;

  max-width: 815px;
  margin: 0 auto;
  background: rgba(255, 249, 233, 1);

  height: 98vh;
}

.header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 57px;
    margin-left: 16px;
    gap: 16px;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .user-icon {
    font-size: 20px;
    margin-right: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid rgba(99, 18, 1, 1);
    display: inline-flex;
    justify-content: center;
  }

  .user-icon svg {
    color: rgba(99, 18, 1, 1);
    height: 26px;
    margin-top: 4px;
  }

  .user-name {
    color: rgba(99, 18, 18, 1);
    font-family: Irish Grover;
    font-size: 26px;
  }

  .ticket-number {
    display: flex;
    gap: 16px;
    margin-left: 16px;
  }

  .ticket-label {
    font-family: Irish Grover;
    font-size: 30px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: left;
  }

  .ticket-amount {
    font-family: Irish Grover;
    font-size: 30px;
    font-weight: 400;
    line-height: 29.02px;
  }

  .ticket-number img {
    width: 4%;
  }

  .ticket {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ticket-point {
    display: flex;
    margin-top: 200px;
    justify-content: center;
    gap: 16px;
  }

  .ticket-point img {
    width: 128px;
    height: 118px;
  }

  .Vector {
    position: relative;
    
  }

  .point-circle {
    position: absolute;
    font-family: Irish Grover;
    font-size: 18px;
    font-weight: 400;
    line-height: 19.34px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    margin-top: 21px;
  }

  button {
    background-color: #cd796b;
    color: white;
    border: none;
    padding: 1px 30px;
    border-radius: 20px;
    font-size: 1.1rem;
    cursor: pointer;
    width: 261px;
    height: 46px;
    margin-top: 224px;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 4px;
    border-left-width: 2px;
    border-style: solid;
    border-color: rgba(99, 18, 18, 1);
    margin-top: 27%;
  }

  .open-button {
    font-family: Irish Grover;
    font-size: 26px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

@media screen and (max-width: 700px) {
  .daily-reward-container {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;
    width: 700px;
    height: 187vh;
    background: rgba(255, 249, 233, 1);
  }
  .header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 57px;
    margin-left: 16px;
    gap: 16px;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .user-icon {
    font-size: 20px;
    margin-right: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid rgba(99, 18, 1, 1);
    display: inline-flex;
    justify-content: center;
  }

  .user-icon svg {
    color: rgba(99, 18, 1, 1);
    height: 26px;
    margin-top: 4px;
  }

  .user-name {
    color: rgba(99, 18, 18, 1);
    font-family: Irish Grover;
    font-size: 26px;
  }

  .ticket-number {
    display: flex;
    gap: 16px;
    margin-left: 16px;
  }

  .ticket-label {
    font-family: Irish Grover;
    font-size: 35px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: left;
  }

  .ticket-amount {
    font-family: Irish Grover;
    font-size: 35px;
    font-weight: 400;
    line-height: 29.02px;
  }

  .ticket-number img {
    width: 5%;
  }

  .ticket {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ticket-point {
    display: flex;
    margin-top: 200px;
    justify-content: center;
    gap: 16px;
  }

  .ticket-point img {
    width: 214px;
    height: 174px;
  }

  .Vector {
    position: relative;
    
  }

  .point-circle {
    position: absolute;
    font-family: Irish Grover;
    font-size: 31px;
    font-weight: 400;
    line-height: 19.34px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    margin-top: 21px;
  }

  button {
    background-color: #cd796b;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 20px;
    font-size: 1.1rem;
    cursor: pointer;
    width: 300px;
    height: 64px;
    margin-top: 224px;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 4px;
    border-left-width: 2px;
    border-style: solid;
    border-color: rgba(99, 18, 18, 1);
    margin-top: 80%;
  }

  .open-button {
    font-family: Irish Grover;
    font-size: 32px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

}
</style>
