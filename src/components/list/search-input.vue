<template>

          <div class="w_100 header_item h_60px b_s pad_r_30 pad_l_30">
              <div class="f_l w_25 b_s h_100">
                  <span class="f_l font12">{{searchObj.keywordName}}：</span>
                  <el-input class="f_l inp" style="width:" v-model="searchObj.keyword" :placeholder="'请输入企业名称'+searchObj.keywordName"></el-input>
                  <div class="clearfix"></div>
              </div>
              <div class="f_l w_25 b_s h_100" v-if="searchObj.options">
                  <span class="f_l font12">所在地区：</span>
                  <el-cascader class="f_l inp" style="height:auto;"
                      :options="options"
                      :props="{ multiple: true, checkStrictly: true }"
                      @change='getSelVal'
                      clearable>
                  </el-cascader>
                  <div class="clearfix"></div>
              </div>
              <div class="f_l w_50 b_s h_100">
                  <span class="f_l font12">创建时间：</span>
                  <el-date-picker
                        class="f_l"
                      v-model="timer"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                  </el-date-picker>
                  <div class="clearfix"></div>
              </div>
              <div class="f_r w_200px b_s h_100" v-show="searchObj.hasBtn">
                    <span @click="sub(1)" class="f_l font14 pointer t_center header_set_btn header_set_btn01 border all_line co_fff" style="line-height:36px">查询</span>
                    <span @click="sub(2)" class="f_r font14 pointer t_center header_set_btn header_set_btn02 border all_line bg_fff" style="line-height:36px">重置</span>
                    <div class="clearfix"></div>
              </div>
              <div class="clearfix"></div>
          </div>
  
</template>

<script>
export default {
  props:['searchObj'],
  name: '',
  data(){
      return {
          
      }
  },
  methods:{

     getSelVal(e){
          if(e[2]){
              console.log('val',e[2]);
          }else if(e[1]){
              console.log('val',e[1]);
          }else{
              console.log('val',e[0]);
          };
     },

     sub(type){
         this.$emit('sub',type)
     }

  }
}
</script>

<style scoped>
    
</style>
