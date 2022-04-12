<template>

          <div>
                <span class="f_r b_btn reset_btn" @click="resetForm()">重置</span>
                <span class="f_r b_btn submit_btn" @click="submitForm()">提交</span>
          </div>
  
</template>

<script>
export default {
  name: '',
  data(){
      return {
         
          
      }
  },
  methods:{

      resetForm(){
          var THIS = this;
          THIS.$confirm('确定清空表单吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            THIS.$message({
              type: 'success',
              message: '表单已清空!',
              dangerouslyUseHTMLString:true
            });
            THIS.$emit('resetForm','ruleForm');
          }).catch(() => {});
      },

      submitForm(){
          this.$emit('submitForm','ruleForm');
      }
      

  }
}
</script>

<style scoped>
    
</style>
