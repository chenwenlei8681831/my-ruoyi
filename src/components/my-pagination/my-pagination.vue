
<template>
        <div class="page_footer b_s w_100 h_60px flex j_end">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size=count
                layout="total, sizes, prev, pager, next, jumper"
                :total=total>
            </el-pagination>
        </div>
</template>
 
<script>
export default {
  name: '',
  props: ['count','page','total'],
  data () {
    return {
     
    };
  },
  methods: {

            handleCurrentChange(val){
                this.$emit('handleCurrentChange',{page:val})
            },

            handleSizeChange(val) {
                this.$emit('handleSizeChange',{page:1,count:val})
            },

  },
  mounted () {
    
  },
};
</script>
 
<style scoped>
 
</style>