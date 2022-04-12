<template>
      <div class="w_100 header_item b_s pad_r_30 pad_l_30 flex row a_center worp">
            <div class="w_25 b_s h_100 flex row pad_r_20 mar_t_20" v-for="(item,index) in searchList" :key='index'>
                    <span class="font12" style='width:60px'>{{item.title}}：</span>
                    <!-- 输入框(文本) -->
                    <el-input
                        v-if="item.type == 'text'"
                        size="mini"
                        class="flex_1"
                        v-model="item.value"
                        :placeholder="`请输入${item.title}`"
                        clearable>
                    </el-input>
                    <!-- 输入框(手机号) -->
                    <el-input
                        v-if="item.type == 'phone'"
                        size="mini"
                        class="flex_1"
                        v-model="item.value"
                        :placeholder="`请输入${item.title}`"
                        oninput="value=value.replace(/[^\d]/g,'')"
                        maxlength="11"
                        clearable>
                    </el-input>
                    <!-- 下拉框 -->
                    <el-select
                        :remote="item.isRemote==1?true:false" 
                        :remote-method="item.isRemote==1?item.remoteMethod:''"
                        v-if="item.type=='select'" :placeholder="`请选择${item.title}`" v-model="item.value" size="mini" class="flex_1" filterable clearable >
                        <el-option
                            v-for="(op_item,op_index) in item.option"
                            :key="op_index"
                            :label="op_item.title"
                            :value="op_item.id"
                        ></el-option>
                    </el-select>
                    <!-- 日期范围 -->
                    <el-date-picker
                        class='flex_1'
                        v-if="item.type == 'dateDaterange'"
                        v-model="item.value"
                        value-format="yyyy-MM-dd"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                    <!-- 选择日期 -->
                    <el-date-picker
                        class='flex_1'
                        v-if="item.type == 'date'"
                        v-model="item.value"
                        value-format="yyyy-MM-dd"
                        type="date"
                        :placeholder="`请选择${item.title}`">
                    </el-date-picker>
                    <!-- 单选框 -->
                    <div class='flex_1' v-if="item.type=='radio'">
                        <el-radio-group v-model="item.value">
                            <el-radio v-for="(op_item,op_index) in item.option" :key="op_index" :label="op_item.id">{{op_item.title}}</el-radio>
                        </el-radio-group>
                    </div>
            </div>
            <div class="flex row search_btn mar_t_20">
                <el-button type="primary" size="mini" @click="submit('search')">查询</el-button>
                <el-button size="mini" @click="submit('reset')">重置</el-button>
            </div>
        </div>
</template>

<script>
//type类型  text  date_day 年月日  
export default {
  props: {
      searchList: {
          type: Array,
          default: () => [],
      }
  },
  name: "",
  data() {
    return {
      
    };
  },
  methods: {
    
    submit(type){
        if(type=='reset'){//重置
            this.searchList.map(item=>{
                item.value = '';
            });
        };
        this.$emit('search_list',this.searchList);
    },



  }
};
</script>

<style scoped>
    .search_btn{
        width:200px;
        height:30px;
        padding:0;
    }
</style>
