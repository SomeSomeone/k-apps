<template>
  <div class="home">
    <div class="grid" >
      <h2>Hello Gleb!</h2>
    </div>
    <Goodlive :goodLive="goodLive"/>
    <GoodliveList />
  </div>
</template>
<style>
  .home{
    padding: 32px 0;
  }
  h2{
    margin-top: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 40px;
    color: var(--brand-color);
    grid-column: span 8;
  }
</style>

<script>
import Goodlive from '@/components/goodlive/Goodlive.vue'
import GoodliveList from '@/components/goodlive/GoodliveList.vue'

export default {
  name: 'home',
  components: {
    Goodlive,
    GoodliveList
  },
  props: {
    goodLive: String
  }

}
</script>
