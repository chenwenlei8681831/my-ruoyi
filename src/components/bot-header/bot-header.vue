<template>
  <div class="w_100 po_r routet_header b_s">
    <div class="f_l">{{pageText?pageText:'--'}}</div>
    <div class="f_r refresh po_b bg_fff all_line pointer font12" @click="refresh()">刷新</div>
    <div
      v-if="link"
      class="f_r refresh return_to po_b bg_fff all_line pointer font12"
      @click="return_to"
    >返回</div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  props: ["link"],
  name: "",
  computed: {
    s_pageText() {
      return this.store.state.pageText;
    }
  },
  watch: {
    s_pageText(msg) {
      this.pageText = msg;
    }
  },
  data() {
    return {
      pageText: this.store.state.pageText
    };
  },
  methods: {
    return_to() {
      this.$router.back();
    },

    refresh() {
      //刷新;
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.routet_header {
  padding: 0.1rem 0;
  height: 1rem;
  line-height: 0.8rem;
  background-color: #f4f9ff;
}
</style>
