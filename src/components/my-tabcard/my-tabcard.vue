
<template>
        
        <div class="w_100 header_item header_item_pad h_60px b_s">
            <div v-for="(item,index) in tabcard.seleteArr" :key="index"
                @click="seleteCard(index)" 
                class="font14 tab_car f_l pad_l_30 pad_r_30 pointer" 
                :class="[ tabcard.seleteIndex==index?'current':'', index==0?'tab_car_first':'', index==(tabcard.seleteArr.length-1)?'tab_car_last':'', ]">
                {{item.name}}<span v-if='tabcard.isshowNumber'>({{item.number}})</span>
            </div>
        </div> 

</template>
 
<script>
export default {
  props:{
      tabcard:{
          type: Object,
          default: () => {},
      },
      seleteCard:{
          type: Function,
          default: () => {},
      },
  },
  name: '',
  data () {
    return {
     
    };
  },
  methods: {


  },
  mounted () {
    
  },
};
</script>
 
<style scoped>
    .tab_car_first{
        border-radius:5px 0px 0px 5px;
    }
    .tab_car_last{
        border-radius:0px 5px 5px 0px;
    }
    .header_item_pad{
        padding: 15px 20px;
    }
    .tab_car{
        width: 140px;
        height: 30px;
        border:1px solid #C5C5C5;
        line-height: 30px;
        text-align: center;
        color: #C5C5C5;
    }
    .tab_car.current{
        color: #007DF2;
        border-color: #007DF2;
    }
</style>