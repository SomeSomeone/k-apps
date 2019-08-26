<template>
  <div id="app">
    <router-view  class="header" name="header"/>
    <div class="body">
      <router-view class="content" />
    </div>
    <router-view  class="footer" name="footer"/>
  </div>
</template>

<style>
:root{
  /* sizes */
  --footer-height: 30px;
  --header-height: 30px;
  --body-height: calc(100vh - var(--footer-height) - var(--header-height));

  /* colors */
  --brand-color: #382980;
  --text-color: #2B2B2A;
  --secondary-color: #808080;

}
#app {
  display: flex;
  flex-direction: column;
  height:100vh;
}
.header{
  background: #FFF;
  flex: 0 0 var(--header-height);
}
.footer{
  background: #FFF;
  flex: 0 0 var(--footer-height);
  margin-top:auto;
}
.body{
  flex: 0 0 var(--body-height);
  height: var(--body-height);
  overflow-y: scroll;
}
.content{
  width:100%;
  background: #FFF;
}
</style>
