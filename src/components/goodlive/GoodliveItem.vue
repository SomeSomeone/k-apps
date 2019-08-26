<template>
  <div class="item"  v-bind:class="{ small: isSmall }" :style="'--item-size: '+size+';'" >
    <div class="icon">
      <TicketsIcons v-if="icon == 'TicketsIcons'" />
      <GiftIcons v-if="icon == 'GiftIcons'" />
      <TentIcons v-if="icon == 'TentIcons'" />
      <PieChartIcons v-if="icon == 'PieChartIcons'" />
      <PeopleIcons v-if="icon == 'PeopleIcons'" />
      <AppearanceIcons v-if="icon == 'AppearanceIcons'" />
    </div>
    <div class="text">
      <h4>{{title}}</h4>
      <p>{{text}}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .item {
    --item-size: 8;
    --item-size-px: calc(4px*var(--item-size) + 16px);
    grid-column: span var(--item-size);
    display: flex;
    justify-content: flex-start;
    background: linear-gradient(0deg, #F6F6FA, #F6F6FA);
    border-radius: 6px;
    padding: 16px 16px 20px;
    align-items: flex-start;
    box-sizing: border-box;
    margin-bottom: 16px;
    .icon {
      width: var(--item-size-px);
      height: var(--item-size-px);
      flex: 0 0 var(--item-size-px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--goodlive-color);
      border-radius: 50%;
      margin-right: 16px;
      svg {
        width: calc( var(--item-size-px)/3*2);
        & > * {
          fill: var(--goodlive-sub-color)
        }
      }
    }
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
      color: var(--text-color);
    }
    p {
      margin-top: 8px;
      font-size: 12px;
      line-height: 12px;
      color: var(--secondary-color);
    }
    &.small{
      padding: 16px 8px;
      .icon{
        margin-right: 8px;
      }
      h4{
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
        margin-top: 0;
      }
      p{
        display: none;
      }
    }
  }

</style>
<script>
/* Icons */
import TicketsIcons from '@/assets/icon/tickets.svg'
import GiftIcons from '@/assets/icon/gift.svg'
import TentIcons from '@/assets/icon/tent.svg'
import PieChartIcons from '@/assets/icon/pie chart.svg'
import PeopleIcons from '@/assets/icon/people.svg'
import AppearanceIcons from '@/assets/icon/appearance.svg'

export default {
  name: 'goodlive',
  components: {
    TicketsIcons,
    GiftIcons,
    TentIcons,
    PieChartIcons,
    PeopleIcons,
    AppearanceIcons
  },
  props: {
    title: String,
    text: String,
    icon: {
      type: String,
      validator: function (value) {
        return [
          'TicketsIcons',
          'GiftIcons',
          'TentIcons',
          'PieChartIcons',
          'PeopleIcons',
          'AppearanceIcons'
        ].indexOf(value) !== -1
      },
      default: 'TicketsIcons'
    },
    size: Number
  },
  computed: {
    isSmall: function () {
      return this.size <= 4
    }
  }
}
</script>
