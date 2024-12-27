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
      <p class="ticket-amount">1</p>
      <img src="../img/ticket.svg" alt="" />
    </div>

    <div class="ticket-image">
      <div class="doggy-image">
        <img src="../img/doggy.svg" alt="" />
        <p>10.000 DOGS</p>
      </div>
      <div class="doggy-image">
        <img src="../img/doggy(gray).svg" alt="" />
        <p>30.000 DOGS</p>
      </div>
      <div class="doggy-image">
        <img src="../img/doggy(gray).svg" alt="" />
        <p>50.000 DOGS</p>
      </div>
    </div>
    <button class="open-button">Open again</button>
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
  line-height: 29px;
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

.ticket-image {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 0%;
}

.doggy-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
}

.doggy-image img {
  width: 128px;
  height: 118px;
}

.doggy-image p {
  font-family: Irish Grover;
  margin-top: 5px;
  font-size: 16px;
}

.ticket-image img {
  width: 128px;
  height: 118px;
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
  border-top-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 4px;
  border-left-width: 2px;
  border-style: solid;
  border-color: rgba(99, 18, 18, 1);
  margin-top: 60%;
  margin-left: 26%;
}

.open-button {
  font-family: Irish Grover;
  font-size: 35px;
  font-weight: 400;
  line-height: 29.02px;
  text-align: center;
  margin-top: 300px;
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
    line-height: 29px;
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

  .ticket-image {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30%;
  }

  .doggy-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30%;
  }

  .doggy-image img {
    width: 214px;
    height: 174px;
  }

  .doggy-image p {
    font-family: Irish Grover;
    margin-top: 5px;
    font-size: 25px;
  }

  .ticket-image img {
    width: 214px;
    height: 174px;
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
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 4px;
    border-left-width: 2px;
    border-style: solid;
    border-color: rgba(99, 18, 18, 1);
    margin-top: 60%;
    margin-left: 26%;
  }

  .open-button {
    font-family: Irish Grover;
    font-size: 35px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: center;
    margin-top: 300px;
  }
}
</style>
