<template>
  <div>
        <el-table :data="listMsg.list" @select='select' @select-all='selectAll'>
            <!-- 选择框 -->
            <el-table-column type="selection" width="50" v-if='listMsg.hasSelect'></el-table-column>
            <!-- 列表数据 -->
            <el-table-column 
                v-for="(item,index) in listMsg.header" 
                :title="item.prop" 
                :width="item.width?item.width:''" 
                :prop="item.prop" 
                :label="item.label" 
                :key="index">
                <template slot-scope="scope">
                    <!-- 鼠标浮动提示 -->
                    <el-popover trigger="hover" placement="top" v-if="listMsg.btnProp.includes(item.prop)">
                        <p>{{ scope.row[item.prop] }}</p>
                        <div  slot="reference" class="name-wrapper pointer">
                            <el-tag size="medium">{{ scope.row[item.prop] }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <!-- 列表操作 -->
            <el-table-column fixed="right" :label="listMsg.operation.title?listMsg.operation.title:'操作'" :width="listMsg.operation.width?listMsg.operation.width:120" v-if='listMsg.operation.select.length>0'>
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row,item.type)" :class="item.type=='delete'?'color_red':''" v-for="(item,index) in listMsg.operation.select" :key="index" type="text" size="small">{{item.title}}</el-button>
                </template>
            </el-table-column>
            </el-table>
        <!-- 列表分页 -->
        <div class="page_footer b_s w_100 h_60px flex a_center">
            <my-pagination 
                @handleCurrentChange='handleCurrentChange'
                @handleSizeChange='handleSizeChange'
                :page='listMsg.page' :count='listMsg.count' :total='listMsg.total'>
            </my-pagination>
        </div>
  </div>
</template>

<script>
import myPagination from '../my-pagination/my-pagination';
export default {
    components:{
        myPagination
    },
    props: {
        listMsg: {
          type: Object,
          default: () => {},
        },
        handleCurrentChange: {
            type: Function,
            default: () => {},
        },
        handleSizeChange: {
            type: Function,
            default: () => {},
        },
        deleteWarn:{
            type: Function,
            default: () => {},
        },
        select:{
            type: Function,
            default: () => {},
        },
        selectAll:{
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {
            multipleSelection:''
        };
    },
    methods: {

        handleClick(row,type) {
            if(type=='detail'){
                this.$router.push({ path: this.listMsg.detailUrl , query: { id: row.id } });
            }else if(type=='edit'){

            }else if(type=='down'){

            }else if(type=='delete'){
                this.deleteWarn(row.id);
            };
        },

    },
    mounted(){
        
    }
};
</script>

<style scoped>
    ::v-deep .color_red{
        color:red;
    }
    ::v-deep .el-table--mini, .el-table--small, .el-table__expand-icon,.el-button--mini, .el-button--small{
        font-size:14px;
    }
    ::v-deep .cell{
        height:50px;
        line-height:50px; 
        padding-left: 20px;
    }
    ::v-deep .el-table th.el-table__cell>.cell{
        padding-left: 20px;
    }
    ::v-deep .el-table th > .cell{
        padding-left: 20px;
    }
</style>
