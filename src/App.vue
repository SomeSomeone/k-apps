<template>
  <div id="app">
    <router-view  class="header" name="header"/>
    <div class="body">
      <transition name="fade">
        <router-view class="content" />
      </transition>
    </div>
    <router-view  class="footer" name="footer"/>
  </div>
</template>

<style>
:root{
  /* sizes */
  --footer-height: 30px;
  --header-height: 30px;
  --app-height: 100%;
  --body-height: calc(var(--app-height) - var(--footer-height) - var(--header-height));
  /* colors */
  --brand-color: #382980;
  --text-color: #2B2B2A;
  --secondary-color: #808080;
}
#app {
  display: flex;
  flex-direction: column;
  height: var(--app-height);
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
  background: #FFF;
  flex: 0 0 var(--body-height);
  height: var(--body-height);
  overflow-y: scroll;
}
.content{
  width:100%;
  background: #FFF;
}
</style>
