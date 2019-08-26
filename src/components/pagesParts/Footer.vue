<template>
  <footer class="footer">
    <a href="#">Help</a>
    <a href="#">Contact</a>
    <a href="#">Policies</a>
    <a href="#">Sign Out</a>
  </footer>
</template>
<style lang="scss">
  :root{
    --footer-height: 71px;
  }
  footer {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    box-shadow: inset 0px 1px 0px #E9E9E9;
    padding-bottom: 5px;
    box-sizing: border-box;
    a {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-decoration: none;
      color: var(--secondary-color);
      margin: 2ex;
      padding: 2ex;
    }
  }
</style>
