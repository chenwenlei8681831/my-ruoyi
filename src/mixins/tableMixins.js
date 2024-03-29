
//列表数据
export default {
    methods: {
    
        //翻页
        handleCurrentChange(val){
            this.listMsg.page = val.page;
            this.getList();
        },

        //设置数量
        handleSizeChange(val) {
            this.listMsg.count = val.count;
            this.listMsg.page = val.page;
            this.getList();
        },

        //切换选项卡
        seleteCard(index){
            this.tabcard.seleteIndex = index;
        },

        //单选
        select(selection, row){
            if(this.listMsg.selectIdArr.includes(row.id)){
                let ids = [];
                this.listMsg.selectIdArr.map(item=>{
                    if(item!=row.id){
                        ids.push(item)
                    };
                });
                this.listMsg.selectIdArr = ids;
            }else{
                this.listMsg.selectIdArr.push(row.id);
            };
            //console.log(this.listMsg.selectIdArr);
        },

        //全选
        selectAll(selection){
            this.listMsg.selectIdArr = [];
            if(selection.length>0){
                this.listMsg.selectIdArr = selection.map(item=>{
                    return item.id;
                });
            };
        },

    }
};