

<template>
  <div class="container w_100 bg_fff">
    <div class="bg_fff">
        <div class="views_100ch_1 po_r">
            <el-button type="primary" plain @click="handleReturn">返回</el-button>
            用户详情{{id}}
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