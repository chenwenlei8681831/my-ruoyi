

//提示操作
export default {
    methods: {

        //删除
        deleteWarn(id){
            this.$confirm("确定删除吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
            type: "warning"
            }).then(() => {
                //id
                //this.listMsg.deleteUrl
            }).catch(() => {});
        },

        //批量导出
        downSomeWarn(){
            let ids = this.listMsg.selectIdArr;
            if(ids.length>0){
                this.$confirm('选中数据'+ids.length+'条,确定导出吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {
                    //ids       //批量导出的id
                    //this.topMsg.downSomeUrl   //批量导出的地址
                }).catch(() => {});
            }else{
                this.$message({
                    type: 'warning',
                    message: '请先勾选需要导出的数据!',
                    dangerouslyUseHTMLString:true
                });
            };
        },

        //全部导出
        downAllWarn(){
            if(this.listMsg.list.length){
                this.$confirm('确定导出全部数据吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {
                    console.log('导出全部数据');
                    //this.topMsg.downAllUrl
                }).catch(() => {});
            }else{
                this.$message({
                    type: 'warning',
                    message: '没有可以导出的数据!',
                    dangerouslyUseHTMLString:true
                });
            };
        },
       
        //提示弹框操作
        operationWarn(title,confirm){
            this.$confirm(title, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
            type: "warning"
            }).then(() => {
                confirm();
            }).catch(() => {});
        },

    }
};