<!--
 * @Author: chenwenlei 1098608171@qq.com
 * @Date: 2022-06-13 16:32:06
 * @LastEditors: chenwenlei 1098608171@qq.com
 * @LastEditTime: 2022-06-13 16:32:27
 * @FilePath: /my-ruoyi-master/src/views/system/user/userEdit.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <div class="container w_100 bg_fff">
    <div class="bg_fff">
        <div class="views_100ch_1 po_r">
            <el-button type="primary" plain @click="handleReturn">返回</el-button>
            用户编辑{{id}}
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserDetail",
  data() {
    return {
      id: "",
    };
  },

  methods: {

    handleReturn(){
      this.$router.push({ path: "/system/user"})
    }

  },
  mounted(){
      this.id = this.$route.query.id;
  }
};
</script>
<style scoped>

</style>