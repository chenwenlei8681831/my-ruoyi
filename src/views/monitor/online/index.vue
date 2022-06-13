<template>
  <div class="container w_100 bg_fff">
        <div class="bg_fff">
            <!-- <bot-header></bot-header> -->
            <div class="views_100ch_1 po_r">
                <my-tabcard :tabcard='tabcard' :seleteCard='seleteCard'></my-tabcard>
                <my-search @search_list='search_list' :searchList="searchList"></my-search>
                <my-top class="mar_t_10" :topMsg='topMsg' :create='create' :downSomeWarn='downSomeWarn' :downAllWarn='downAllWarn'></my-top>
                <my-list 
                    :listMsg='listMsg' 
                    :handleCurrentChange='handleCurrentChange' 
                    :handleSizeChange='handleSizeChange' 
                    :deleteWarn='deleteWarn'
                    :select='select' 
                    :selectAll='selectAll'
                ></my-list>
            </div>
        </div>
    <!-- <my-dialog :ruleForm='dialogRuleForm' :rules='dialogRules' :msgList='dialogMsgList' :dialog='dialog'></my-dialog> -->
    <my-dialog :dialogMsg='dialogMsg'></my-dialog>
  </div>
</template>

<script>
import alertMixins from "@/mixins/alertMixins";
import tableMixins from "@/mixins/tableMixins";
import botHeader from "@/components/bot-header/bot-header";
import myTabcard from "@/components/my-tabcard/my-tabcard";
import mySearch from "@/components/my-search/my-search";
import myList from "@/components/my-list/my-list";
import myDialog from "@/components/my-dialog/my-dialog";
import myTop from "@/components/my-top/my-top";
import myPagination from "@/components/my-pagination/my-pagination";
import {getUserList} from "@/api/user/";

export default {
  name: "User",
  components: {
      myTop,
      myTabcard,
      mySearch,
      botHeader,
      myDialog,
      myList,
      myPagination
  },
  mixins:[tableMixins,alertMixins],
  data() {
    return {
        id: "",
        //类型 1：列表  2：详情  3:编辑
        show_type:0,
        //列表数据
        listMsg:{
            page: 1,
            count: 10,
            total: 0,
            currentPage: 0,
            hasSelect:true,           //选择框
            selectIdArr:[],
            listUrl:'/merchant/list',
            deleteUrl:'',
            detailUrl:'userDetail',
            btnProp:['p_name'],
            selectData:{
                name:'',
                contact_name:'',
                mobile:'',
            },
            header:[],
            list:[],
            operation:{
                title:'',
                width:'150',
                select:[
                    { type:'detail',title:'查看' },
                    { type:'edit',title:'编辑' },
                    { type:'delete',title:'删除' }
                ],    
            }
        },
        //选项卡
        tabcard:{
            seleteIndex:0,
            isshowNumber:true,
            seleteArr:[
                { name:'选项一', number:0 ,type:0 },
                { name:'选项二', number:0 ,type:1 },
                { name:'选项三', number:0 ,type:2 },
            ]
        },
        //搜索
        searchList:[
            { type:'text', title:'企业名称', value:'' },
            { type:'text', title:'联系人', value:'' },
            { type:'phone', title:'联系电话', value:'' },
        ],
        //顶部操作
        topMsg:{
            downSomeUrl:'',
            downAllUrl:'',
            select:[
                { type:'create',title:'创建' },
                { type:'downsome',title:'批量导出' },
                { type:'downall',title:'导出全部' },
            ],
        },
        //弹窗
        dialogMsg:{
            config:{
                show:false,
                position:'left',
                width:'800px',
                itemWidth:'260px',
                title:''
            },
            list:[
                { type:'text', key:'name', title:'服务商名称', value:'' },
                { type:'date', key:'time', title:'选择时间', value:'' },
                { type:'select', title:'服务商筛选', key:'servicer', isRemote:1, remoteMethod:this.remoteMethod_fws, option:[], value:'' },
                { type:'dateDaterange', key:'sendtimer', title:'发布时间', value:[] },
                { type:'radio', title:'是否切换', key:'tagger', option:[ { title:'是',id:1 }, { title:'否',id:0 } ], value:'' },
            ],
            ruleForm:{
                name:'',
                time:'',
                servicer:'',
                sendtimer:'',
                tagger:''
            },
            rules:{
                name:[{ required: true, message: '请输入服务商名称', trigger: [] }],
                time:[{ required: true, message: '请选择时间', trigger: [] }],
                servicer:[{ required: true, message: '请选择服务商', trigger: [] }],
                sendtimer:[{ required: true, message: '请输入发布时间', trigger: [] }],
                tagger:[{ required: true, message: '请选择是否切换', trigger: [] }],
            },
        }
      
    };
  },

  methods: {

        create() {
            this.dialogMsg.config.show = true;
        },

        getList() {
            let data = {
                count:this.listMsg.count
            };
            getUserList(data).then(res => {
                console.log('res',res);
                let msg = res.data;
                this.listMsg.selectIdArr = [];
                this.listMsg.total = msg.count;
                this.listMsg.header = [
                    { label:'ID',prop:'id',width:80 },
                    { label:'企业名称',prop:'name' },
                    { label:'所属行业',prop:'industry' },
                    { label:'联系人',prop:'contact_name' },
                    { label:'联系电话',prop:'mobile' },
                    { label:'服务商',prop:'p_name' },
                    { label:'创建时间',prop:'created_at' },
                ];
                this.listMsg.list = msg.list.map(item=>{
                    let obj = {};
                    this.listMsg.header.map(elemnet=>{
                        let key = elemnet.prop;
                        obj[key] = item[key]?item[key]:'--'
                    });
                    return  obj;
                });
            })
            .catch(() => {
              this.loading = false;
            });
        },

        remoteMethod_fws(msg){
            if(msg){
                this.searchList[2].option = [
                    { title:'商户04',id:1 },
                    { title:'商户05',id:2 },
                    { title:'商户06',id:3 }
                ]
            }else{
                this.searchList[2].option = [
                    { title:'商户01',id:1 },
                    { title:'商户02',id:2 },
                    { title:'商户03',id:3 }
                ]
            };
        },

        search_list(msg){
            let val = this.searchList;
            this.listMsg.selectData = {
                name:val[0].value,
                contact_name:val[1].value,
                mobile:val[2].value
            }
            this.getList();
        },


  },
  mounted(){
        this.remoteMethod_fws('');
        this.getList();
  }
};
</script>
<style scoped>

</style>