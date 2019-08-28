<template>
  <div class="goodlive grid" :style="`
    --goodlive-color: ${goodLiveItem.color};
    --goodlive-sub-color: ${goodLiveItem.subColor};
  `">
    <div class="title">
      <div class="icon">
        <img :src="goodLiveItem.img" alt="">
      </div>
      <div class="text">
        <p>Goodlive</p>
        <h3>{{goodLiveItem.name}}</h3>
      </div>
      <div class="burger" v-on:click="callList">
        <img src="img/icon/menu.svg" alt="">
      </div>
    </div>
    <GoodliveItem v-for="item in items" :key="item.id" :icon="item.icon" :title="item.title" :text="item.text" :size="item.size" />
  </div>
</template>
<style lang="scss" scoped>
  .goodlive {
    --goodlive-color: #F298C0;
    --goodlive-sub-color: #FFF;
    margin-top: 24px;
    padding-top: 16px;
    background: linear-gradient(189.75deg, #F5F5F9 13.54%, rgba(255, 255, 255, 0) 60.28%);
    background-size: 100% 88px;
    background-repeat: no-repeat;
    background-position: top;
    .title {
      grid-column: span 8;
      display: flex;
      justify-content: flex-start;
      padding-bottom: 24px;
      .icon {
        width: 48px;
        height: 48px;
        background: var(--goodlive-color);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
      }
      .text {
        flex: 1 1;
        padding-top: 4px;
        p {
          font-size: 12px;
          line-height: 16px;
          color: var(--secondary-color);
        }
        h3 {
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 26px;
          color: var(--text-color);
        }
      }
      .burger {
        margin-top: 8px;
        width: 32px;
        height: 32px;
        background: #F0F0F5;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
      }

    }
  }
</style>
<script>
import { EventBus } from '@/Events.js'
/* Components */
import GoodliveItem from '@/components/goodlive/GoodliveItem.vue'

export default {
  name: 'goodlive',
  components: {
    GoodliveItem
  },
  props: {
    goodLive: {
      type: String,
      validator: function (value) {
        return [
          'MeltWordmark',
          'FullForce',
          'Splash'
        ].indexOf(value) !== -1
      },
      default: 'MeltWordmark'
    }
  },
  data: function () {
    return {
      items: [
        {
          id: 1,
          icon: 'TicketsIcons',
          title: 'Ticket Shop',
          text: 'Manage ticket contigents, sales and resales.',
          size: 8
        },
        {
          id: 2,
          icon: 'GiftIcons',
          title: 'Guest Lists',
          text: 'Unlock to manage ticket contigents, availability, discounts and ticket resale.',
          size: 8
        },
        {
          id: 3,
          icon: 'TentIcons',
          title: 'Guest Dashboard',
          text: 'Onboard your guests, configure partner integrations and communicate news.',
          size: 8
        },
        {
          id: 4,
          icon: 'PieChartIcons',
          title: 'Event Analytics',
          text: 'Gain insights from data collected across touch points with your gusts.',
          size: 8
        },
        {
          id: 5,
          icon: 'PeopleIcons',
          title: 'Manage people and permissions',
          size: 4
        },
        {
          id: 6,
          icon: 'AppearanceIcons',
          title: 'Customize Herokey',
          size: 4
        }]
    }
  },
  computed: {
    goodLiveItem () {
      return ({
        MeltWordmark: {
          name: 'Melt Festival',
          color: '#F298C0',
          subColor: '#FFF',
          img: 'img/brands/MeltWordmark.svg'
        },
        FullForce: {
          name: 'Full Force',
          color: '#202020',
          subColor: '#E40521',
          img: 'img/brands/FullForce.svg'
        },
        Splash: {
          name: 'splash! Festival',
          color: '#EDF2EE',
          subColor: '#D12233',
          img: 'img/brands/Splash.svg'
        }
      })[this.goodLive]
    }
  },
  methods: {
    callList: function () {
      EventBus.$emit('callList')
    }
  }
}
</script>
