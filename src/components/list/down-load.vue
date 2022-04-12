<template>

          <div class="w_100 header_item h_60px b_s font14">
                <span @click="down(1)" class="f_l search_btn 3_btn b_s pad_r_20 pointer bg_blue co_fff">创建</span>
                <span @click="down(2)" class="f_l search_btn 3_btn b_s pad_r_20 pointer all_line">全部导出</span>
                <span @click="down(3)" class="f_l search_btn 3_btn b_s pad_r_20 pointer all_line">批量导出</span>
                <div class="clearfix"></div>
          </div>
  
</template>

<script>
export default {
  props:['downobj'],
  name: '',
  data(){
      return {
          
          
      }
  },
  methods:{
     down(type){
         var THIS = this;
         if(type==1){
             THIS.$router.replace(THIS.downobj.addLink);
         }
     }
  }
}
</script>

<style scoped>
    
</style>
