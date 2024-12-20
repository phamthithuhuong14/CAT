<template>
  <div class="container">
    <div class="main">
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
    </div>

    <div class="Cat">
      <div class="text">
        <img src="../img/Congratulation.svg" alt="" />
        <p>Congratulation</p>
      </div>
      <img src="../img/Asset 2.png" alt="" class="cat-image" />
    </div>

    <div class="Reward">
      <p>Reward</p>
    </div>

    <div class="reward-confirm">
      <div class="confirm-point">
        <p>4.000 Point</p>
      </div>

      <div class="confirm-doggy">
        <p>10.000</p>
        <img src="../img/doggy.svg" alt="" />
      </div>

      <div class="confirm-ton">
        <p>0.50</p>
        <img src="../img/Ton.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 700px) {
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
  .container {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;
    width: 700px;
    height: 114vh;
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

  .Cat {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .text img {
    position: relative;
    width: 100%;
    height: 68px;
    top: 118px;
    left: 57%;
    gap: 0px;
    margin-top: 36%;
  }

  .text {
    position: absolute;
  }

  .text p {
    position: absolute;
    color: #ffff;
    font-family: Irish Grover;
    font-size: 30px;
    font-weight: 400;
    line-height: 24.18px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: 23%;
    margin-left: 71%;
  }

  .cat-image {
    width: 70%;
    height: 200%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 40%;
    margin-right: 12%;
  }

  .Reward p {
    font-family: Irish Grover;
    font-size: 50px;
    font-weight: 400;
    line-height: 29.02px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-top: 20%;
  }

  .reward-confirm {
    width: 50%;
    height: 287px;
    border: 1px solid;
    border-radius: 60px;
    margin-left: 25%
  }

  .confirm-point p {
    font-family: Irish Grover;
    font-size: 30px;
    font-weight: 400;
    line-height: 35px;
    text-align: center;
  }

  .confirm-doggy {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .confirm-doggy p {
    font-family: Irish Grover;
    font-size: 30px;
    font-weight: 400;
    line-height: 35px;
    text-align: center;
  }

  .confirm-doggy img {
    width: 15%;
    height: 15%;
    margin-top: 5%;
  }

  .confirm-ton {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .confirm-ton p {
    font-family: Irish Grover;
    font-size: 30px;
    font-weight: 400;
    line-height: 35px;
    text-align: center;
  }

  .confirm-ton img {
    width: 15%;
    height: 15%;
    margin-top: 5%;
  }
}
</style>
