<template>
  <div class="home">
    <div class="grid" >
      <h2>Hello Gleb!</h2>
    </div>
    <transition name="fade">
      <Goodlive :goodLive="goodLive" v-if="isNeedShow"/>
    </transition>
    <GoodliveList />
  </div>
</template>
<style scoped>
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
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(100px)
  }
</style>

<script>
import Goodlive from '@/components/goodlive/Goodlive.vue'
import GoodliveList from '@/components/goodlive/GoodliveList.vue'

export default {
  name: 'home',
  data: function () {
    return {
      isNeedShow: true
    }
  },
  components: {
    Goodlive,
    GoodliveList
  },
  props: {
    goodLive: String
  },
  watch: {
    $route (to, from) {
      var $this = this
      this.isNeedShow = false
      this.$root.$nextTick(function () {
        $this.isNeedShow = true
      })
    }
  }
}
</script>
