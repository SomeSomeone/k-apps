<template>
  <div class="goodlivelist" :class="{active: isActive}">
    <div class="goodlivelist__background" v-on:click="close"></div>
    <div class="goodlivelist__content grid" >
      <h3>Goodlive</h3>
      <div class="burger" v-on:click="close">
        <img src="img/icon/close.svg" alt="">
      </div>
      <router-link v-for="(goodLiveItem, name) in goodLiveItems" v-bind:key="name"
                    :to="`/${name}`" :style="`--icon-bg:${goodLiveItem.color}`">
        <div class="icon">
          <img :src="goodLiveItem.img" alt="">
        </div>
        <div class="text">
          {{goodLiveItem.name}}
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .goodlivelist{
    position: fixed;
    width:100%;
    height:100vh;
    z-index:1;
    top: 0;
    left: 0;
    user-select: none;
    pointer-events: none;
    &.active{
      display: block;
      pointer-events: all;
      .goodlivelist__background{
        background: rgba(43, 43, 42, 0.29);
      }
      .goodlivelist__content{
        transform: translateY(0);
      }
    }

  }
  .goodlivelist__background{
    width:100%;
    height:100vh;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.3s ease-in;
  }
  .goodlivelist__content{
    padding-top: 16px;
    padding-bottom: 12px;
    background: #FFF;
    box-shadow: 0px -4px 42px rgba(0, 0, 0, 0.15);
    border-radius: 8px 8px 0 0 ;
    position: fixed;
    bottom: 0;
    transform: translateY(100%);
    transition: transform 0.3s ease-in;
    h3{
      grid-column: span 7;
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
      color: var(--text-color);
      margin-top: 5px;

    }
    .burger {
      width: 32px;
      height: 32px;
      background: #F0F0F5;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      transform: translateX(8px);
      justify-self: flex-end;
    }
    a{
      --icon-bg: #F298C0;
      grid-column: span 8;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 26px;
      color: var(--text-color);
      text-decoration: none;
      padding: 12px 12px 12px 0;
      background-image: url('/img/icon/arrow-short.svg');
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 12px 12px;
      & + a{
        border-top: #E9E9E9 solid 1px;
      }
      .icon{
        width: 48px;
        height: 48px;
        border-radius: 3px;
        background: var(--icon-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        img{
          width: 66%;
        }
      }
    }
  }
</style>
<script>
import { EventBus } from '@/Events.js'
export default {
  name: 'GoodliveList',
  data: function () {
    return {
      isActive: false,
      goodLiveItems: {
        MeltWordmark: {
          name: 'Melt Festival',
          color: '#F298C0',
          subColor: '#FFF',
          img: 'img/brands/MeltWordmark.svg'
        },
        Splash: {
          name: 'splash! Festival',
          color: '#EDF2EE',
          subColor: '#D12233',
          img: 'img/brands/Splash.svg'
        },
        FullForce: {
          name: 'With Full Force Festival',
          color: '#202020',
          subColor: '#E40521',
          img: 'img/brands/FullForce.svg'
        }
      }
    }
  },
  methods: {
    close: function () {
      this.isActive = false
    },
    open: function () {
      this.isActive = true
    }
  },
  watch: {
    $route (to, from) {
      this.close()
    }
  },
  mounted () {
    EventBus.$on('callList', _ => {
      this.open()
    })
  }
}
</script>
