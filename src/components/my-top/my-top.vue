
<template>
        <div class="w_100 header_item b_s font14 flex row a_center mar_t_20">
            <el-button @click="tapOperation(item.type)" type="primary" class='el_button mar_r_10' v-for="(item,index) in topMsg.select" :key="index">{{item.title}}</el-button>
        </div>
</template>
 
<script>
export default {
    props:{
        topMsg:{
            type: Object,
            default: () => {},
        },
        create:{
            type: Function,
            default: () => {},
        },
        downSomeWarn:{
            type: Function,
            default: () => {},
        },
        downAllWarn:{
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

      tapOperation(type){
          if(type =='create'){
              this.create();
          }else if(type =='downsome'){
              this.downSomeWarn();
          }else if(type =='downall'){
              this.downAllWarn();
          };
      },

  },
  mounted () {
    
  },
};
</script>
 
<style scoped>
    ::v-deep .el_button{
        height:30px;
        padding:0 20px;
        box-sizing:border-box;
    }
</style>