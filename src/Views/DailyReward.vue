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
    <div class="content">
      <h1 class="day-number">1</h1>
      <p class="day-label">Day</p>
      <div class="reward-box">
        <span class="reward-label">Reward:</span>
        <span class="reward-amount"> 3 </span>
      </div>
      <button class="open-button">Open</button>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width:700px) {
  .daily-reward-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    background: rgba(255, 249, 233, 1);

  }
  .header {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    margin-top: 57px;
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
    font-size: 16px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
  }

  .day-number {
    font-size: 120px;
    font-weight: 400;
    font-family: Irish Grover;
    color: rgba(99, 18, 18, 1);
    margin: 0;
  }

  .day-label {
    font-size: 40px;
    color: rgba(99, 18, 18, 1);
    margin: 0;
    margin-bottom: 1.5rem;
    font-family: Irish Grover;
    font-weight: 400;
  }

  .reward-box {
    padding: 10px 20px;
    border-radius: 60px;
    margin-bottom: 20px;
    margin-top: 50px;
    width: 232px;
    height: 60px;
    border-top-width: 2px;
    border-right-width: 1px;
    border-bottom-width: 2px;
    border-left-width: 1px;
    border-style: solid;
    border-color: rgba(41, 9, 9, 1);
    display: flex;
  }

  .reward-label {
    font-family: Irish Grover;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-left: 44px;
    margin-top: 8%;
  }

  .reward-amount {
    font-family: Irish Grover;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(99, 18, 18, 1);
    margin-top: 8%;
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


  }

  .open-button {
    font-family: Irish Grover;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
}
</style>
