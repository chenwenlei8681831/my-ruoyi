<template>
  <div>
        <el-form class='flex row worp' :model="ruleForm" :rules="rules" ref="ruleForm" :label-position='form.position' size="small" label-width="100px" >
            <el-form-item class='w_50' :prop="item.key" :label="item.title" :class='item.class' v-for="item in msgList" :key="item.key">
                <!-- 输入框 -->
                <el-input
                    :style="{width:form.itemWidth}"
                    v-if="item.type == 'text'"
                    size="mini"
                    v-model="ruleForm[item.key]"
                    :placeholder="`请输入${item.title}`"
                    clearable>
                </el-input>
                <!-- 下拉框 -->
                <el-select
                    :style="{width:form.itemWidth}"
                    :remote="item.isRemote==1?true:false" 
                    :remote-method="item.isRemote==1?item.remoteMethod:''"
                    v-if="item.type=='select'" v-model="ruleForm[item.key]" :placeholder="`请选择${item.title}`" size="mini" filterable clearable >
                    <el-option
                        v-for="(op_item,op_index) in item.option"
                        :key="op_index"
                        :label="op_item.title"
                        :value="op_item.id"
                    ></el-option>
                </el-select>
                <!-- 日期范围 -->
                <el-date-picker
                    :style="{width:form.itemWidth}"
                    v-if="item.type == 'dateDaterange'"
                    v-model="ruleForm[item.key]"
                    value-format="yyyy-MM-dd"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <!-- 选择日期 -->
                <el-date-picker
                    :style="{width:form.itemWidth}"
                    v-if="item.type == 'date'"
                    v-model="ruleForm[item.key]"
                    value-format="yyyy-MM-dd"
                    type="date"
                    :placeholder="`请选择${item.title}`">
                </el-date-picker>
                <!-- 单选框 -->
                <div :style="{width:form.itemWidth}" v-if="item.type=='radio'">
                    <el-radio-group v-model="ruleForm[item.key]">
                        <el-radio v-for="(op_item,op_index) in item.option" :key="op_index" :label="op_item.id">{{op_item.title}}</el-radio>
                    </el-radio-group>
                </div>
                <!-- 文本框 -->
                <el-input v-if="item.type == 'textarea'" 
                    type="textarea"
                    v-model="ruleForm[item.key]"
                    :placeholder="`请输入${item.title}`"
                    show-word-limit
                    :maxlength="item.maxlength ||100"
                    :rows='item.item || 3'
                    clearable>
                </el-input>
                <!-- 自定义插槽 -->
                <div v-if="item.type == 'slot'"> <slot :name="item.key"></slot> </div>
            </el-form-item>
            <div class="dialog-footer w_100 flex row j_center mar_t_30">
                <el-button type="primary" @click="confirm">确定</el-button>
                <el-button @click="cancel">取消</el-button>
            </div>
        </el-form>
  </div>
</template>

<script>
export default {
    props: {
        form: {
                type: Object,
                default: ()=> ({
                    width:'400px',
                    position:'left',
                    itemWidth:'260px',
                }),
        },
        msgList: {
            type: Array,
            default: () => [],
        },
        ruleForm: {
            type: Object,
            default: () => {},
        },
        rules: {
            type: Object,
            default: () => {},
        },
    },
    name: "",
    data() {
        return {
            
        };
    },
    methods: {
   
        confirm(){
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.handleSubmit();
                } else {
                    this.$message({
                        type: 'warning',
                        message: '请将必填项完善后再提交',
                        dangerouslyUseHTMLString:true
                    });
                }
            })
        },

        cancel(){
            this.$refs.ruleForm.resetFields();
            this.msgList.map(item=>{
                item.value = '';
            });
            for(let key in this.ruleForm){
                this.dialogMsg.ruleForm[key] = '';
            }
        },

    }
};
</script>

<style scoped>
</style>
