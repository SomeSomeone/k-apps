<template>
  <header class="header">
    <a href="#" class="logo">
      <img src="@/assets/logo.png" alt="ww">
    </a>
    <nav>
      <a href="#"><img src="@/assets/icon/search.svg" alt=""></a>
      <a class="notification" href="#"><img src="@/assets/icon/message.svg" alt=""></a>
      <a href="#"><img src="@/assets/icon/help.svg" alt=""></a>
      <a href="#"><img src="@/assets/icon/more.svg" alt=""></a>
    </nav>
  </header>
</template>
<style lang="scss">
  :root{
    --header-height: 64px;
  }
  a {
    display: inline-block;
  }
  .header{
    display: flex;
    justify-content: space-between;
    background: var(--brand-color);
    .logo{
      width: 64px;
      height: 64px;
      background: #4935A6;
      display: flex;
      align-items: center;
      justify-content:center;
      img{
        width: 16px;
      }
    }
    nav{
      a{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 64px;
        padding: 12px;
        box-sizing: border-box;
        position: relative;
        img{
          width: 28px;
          height: 28px;
        }
        &.notification::after{
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          right: 12px;
          top: 18px;
          border-radius: 50%;

          background: #E01D1D;
          box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

</style>
