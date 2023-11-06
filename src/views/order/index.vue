<script setup>
import { computed, ref } from 'vue';
import { useCartStores } from '@/stores/index.js'
import {addAddress,getAddress,setAddre} from '@/apis/address.js'
//省市区联动
import { regionData,codeToText } from 'element-china-area-data'
const cartStores = useCartStores()
const cartList = ref([])
cartList.value = cartStores.checkGoods



//地址对象,添加
const addressObj=ref({
    receiver:'',//姓名
    contact:'',//联系方式
    provinceCode:'',//省份编码
    cityCode:'',//城市编码
    countyCode:'',//地区编码
    address:'',//详细地址
    postalCode:'',//邮政编码
    addressTags:'',//地址标签 如果有多个, 以英文逗号分割
    isDefault:'1',//收货地址是否默认
    fullLocation:''//完整地址
})
//校验规则
const rules={
    receiver:[{required:true,message:'请输入姓名',trigger:'blur'}],
    contact:[
        {required:true,message:'请输入电话',trigger:'blur'},
        {pattern:/^1[0-9]{10}$/,message:'电话格式错误',trigger:'blur'}
        ],
    provinceCode:[{required:true,message:'请选择地区',trigger:'blur'}],
    address:[{required:true,message:'请输入详细地址',trigger:'blur'}],
    postalCode:[{required:true,message:'请输入详细地址',trigger:'blur'},
                {pattern:/^\d{6}$/,message:'格式错误',trigger:'blur'}],
    addressTags:[{required:true,message:'请输入地址标签',trigger:'blur'}],

}

//省市区联动
const city=ref(regionData)
const selectedOptions=ref([])
//选完地区触发的函数
const handleChange =()=>{
    addressObj.value.provinceCode=selectedOptions.value[0]
    addressObj.value.cityCode=selectedOptions.value[1]
    addressObj.value.countyCode=selectedOptions.value[2]
    if (
    selectedOptions.value[0] != null &&
    selectedOptions.value[1] != null &&
    selectedOptions.value[2] != null
  ) {
    const str =
      codeToText[selectedOptions.value[0]] +
      '/' +
      codeToText[selectedOptions.value[1]] +
      '/' +
      codeToText[selectedOptions.value[2]]
    addressObj.value.fullLocation=str
  }
 

}

//添加地址弹窗
const dialogFormVisible=ref(false)
//添加收货地址
const addAddressApi=async()=>{
    dialogFormVisible.value = false
    await addAddress(addressObj.value)
}


//地址列表 得到所有地址getAddress 
const addressList=ref([])
const dialogAddressVisible=ref(false)
//点击切换地址
const huanAddress=async()=>{
    dialogAddressVisible.value=true
    const res=await getAddress()
    addressList.value=res.data.result
}
//进页面获取地址集合
huanAddress()

//切换地址,选中的对象
const addressActive=ref({})
//高光效果
const addAddre=(item)=>{
    addressActive.value=item
    
}
//设置默认地址
const setAddress=async()=>{
    //修改地址为默认地址
    addressActive.value.isDefault=0
    //请求接口
    await setAddre(addressActive.value.id,addressActive.value)
    //关闭弹窗
    dialogAddressVisible.value=false
}

//得到默认地址
const getTrueAddress=computed(()=>{
    return addressList.value.find(item=>item.isDefault===0)
})
</script>

<template>
    <el-breadcrumb separator=">" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/cart' }">购物车</el-breadcrumb-item>
        <el-breadcrumb-item>填写订单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="order">
        <div class="address">
            <div class="title">收货地址</div>
            <div class="noAddress">
                <!-- 显示默认地址 -->
                <li v-if="getTrueAddress">
                    <p class="default-addr">收货人：<span>{{ getTrueAddress.receiver }}</span></p>
                    <p class="default-addr">联系方式：<span>{{ getTrueAddress.contact }}</span></p>
                    <p class="default-addr">收货地址：<span>{{ getTrueAddress.fullLocation + getTrueAddress.address }}</span></p>
                </li>
                <p v-else>您需要添加收货地址才可提交订单</p>
              <!-- 切换地址 -->
                <el-button size="large" @click="dialogAddressVisible=true" class="addr-btn">切换地址</el-button>
                <el-dialog  v-model="dialogAddressVisible" width="30%" title="切换收货地址">
                    <ul class="dialogAddre" >
                        <li v-for="item in addressList" :key="item.id" @click="addAddre(item)" :class="{active:addressActive.id===item.id}">
                            <p>收货人：<span>{{ item.receiver }}</span></p>
                            <p>联系方式：<span>{{ item.contact }}</span></p>
                            <p>收货地址：<span>{{ item.fullLocation + item.address }}</span></p>
                        </li>
                    </ul>
                    <template #footer>
                    <span class="dialog-footer">
                        <el-button size="large" @click="dialogAddressVisible = false">取消</el-button>
                        <el-button size="large" type="primary"  @click="setAddress">确定</el-button>
                    </span>
                    </template>
                </el-dialog>
                 <!-- 添加地址 -->
                <el-button  size="large"  @click="dialogFormVisible = true">添加地址</el-button>
                <el-dialog v-model="dialogFormVisible" title="添加收货地址"  width="40%">
                    <el-divider border-style="solid" />
                    <el-form size="large"   :model="addressObj" :rules="rules">
                        <el-form-item prop="receiver" label="收&nbsp;&nbsp;货&nbsp;&nbsp;人:" :label-width="formLabelWidth">
                            <el-input v-model="addressObj.receiver" autocomplete="off" />
                        </el-form-item>
                        <el-form-item  prop="contact" label="手&nbsp;&nbsp;机&nbsp;&nbsp;号:" :label-width="formLabelWidth">
                            <el-input v-model="addressObj.contact" autocomplete="off" />
                        </el-form-item>
                        <el-form-item  prop="provinceCode"  label="地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区:" :label-width="formLabelWidth">
                         <el-cascader style="width:100%" size="large"  placeholder="请选择地区" popper-class="cls-attr-cascader" v-model="selectedOptions" :options="city" @change="handleChange"/>
                        </el-form-item>
                        <el-form-item  prop="address" label="详细地址:" :label-width="formLabelWidth">
                            <el-input v-model="addressObj.address" autocomplete="off" />
                        </el-form-item>
                        <el-form-item  prop="postalCode" label="邮政编码:" :label-width="formLabelWidth">
                            <el-input v-model="addressObj.postalCode" autocomplete="off" />
                        </el-form-item>
                        <el-form-item  prop="addressTags" label="地址标签:" :label-width="formLabelWidth">
                            <el-input v-model="addressObj.addressTags" autocomplete="off" />
                        </el-form-item>
                    </el-form>
                    <template #footer>
                    <span class="dialog-footer">
                        <el-button size="large" @click="dialogFormVisible = false">取消</el-button>
                        <el-button size="large" type="primary"  @click="addAddressApi">
                        确定
                        </el-button>
                    </span>
                    </template>
                </el-dialog>
               
            </div>
        </div>
        <div class="title">商品详情</div>
        <div class="proMessage">
            <el-table :data="cartList" fit="false">
                <el-table-column label="商品信息" header-align="center">
                    <template #default="scope">
                        <div class="goods">
                            <RouterLink to="/">
                                <img :src="scope.row.picture" alt="" />
                            </RouterLink>
                            <div>
                                <p class="name">
                                    {{ scope.row.name }}
                                </p>
                                <p class="name guige">
                                    {{ scope.row.attrsText }}
                                </p>
                            </div>
                        </div>
                    </template>
                </el-table-column> 
                <el-table-column label="单价" width="150" header-align="center">
                    <template #default="scope">
                       <p class="cen"> &yen;&nbsp;{{ scope.row.price }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="数量"  width="150" header-align="center">
                    <template #default="scope" >
                        <p class="cen">{{ scope.row.count }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="小计"  width="150" header-align="center">
                    <template #default="scope">
                        <p class="cen">&yen;&nbsp;{{ (scope.row.price * scope.row.count).toFixed(2) }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="实付"  width="150"  header-align="center">
                    <template #default="scope">
                        <p class="cen">&yen;&nbsp;{{ (scope.row.price * scope.row.count).toFixed(2) }}</p>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="title">配送时间</div>
        <div class="time">
            <el-button class="btn" size="large">不限送货时间:周一至周日</el-button>
            <el-button class="btn" size="large">工作日送货:周一至周五</el-button>
            <el-button class="btn" size="large">双休日,假日送货:周六至周日</el-button>
        </div>
        <div class="title">支付方式</div>
        <div class="paytype">
            <el-button class="btn" size="large">在线支付</el-button>
            <el-button class="btn" size="large">货到付款</el-button>
            <span class="btn-span">货到付款需付5元手续费</span>
        </div>
        <div class="title">金额明细</div>
        <div class="tab">
            <div class="left">
                <p>商品件数:</p>
                <p>商品总价:</p>
                <p>运&nbsp;&nbsp;费:</p>
                <p>应付金额:</p>
            </div>
            <div class="right">
                <p>{{ cartStores.checkGood }}件</p>
                <p>&yen;{{ cartStores.checkGoodPrices }}</p>
                <p>&yen;0</p>
                <p>&yen;{{ cartStores.checkGoodPrices }}</p>
            </div>
        </div>
        <div class="toOrder">
            <el-button class="toOrder-inner" size="large">提交订单</el-button>
        </div>
       
    </el-card>

  

</template>

<style scoped lang="scss">
//面包屑
.breadcrumb {
    margin-top: 20px;
}
.active{
    background-color: $xtxColor;
    opacity: 0.1;
    color: #fff;
}


//卡片
.order {
    margin-top: 20px;
    padding: 0 10px;

    //标题
    .title {
        font-size: 1.2rem;
        font-weight: lighter;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
        padding-top: 30px;
        margin-bottom: 20px;
    }

    .noAddress {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        border: 1px dashed gray;
        margin-top: 10px;
        padding: 0 10px;
        p {
            flex: 1;
            text-align: center;
        }
        li{
            flex: 1;
            list-style-type: none;
            .default-addr{
                text-align: left;
                padding-left: 20px;
            }
        }
        //切换地址
        .addr-btn{
            margin-right: 10px;
        }
        
        .dialogAddre{
            li{
                height: 100px;
                border-top: 1px solid $xtxColor;
                border-bottom: 1px solid $xtxColor;
                padding: 5px 10px;
                p{
                    text-align: left;
                    line-height: 2rem;
                    font-size: 1.2rem;
                }
            }
        }
    }

    //商品详情
    .proMessage {
        
        .goods {
            height: 80px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            img{
                width: 80px;
                height: 80px;
            }
            .name {
                margin-left: 10px;
            }
            .guige{
                color: #999;
                font-size: 0.9rem;
                margin-top: 5px;
            }
        }
        .cen{
            text-align: center;
        }
    }
    //金额明细
    .tab{
        border-bottom: 1px solid gray;
        height: 180px;
        display: flex;
        justify-content: flex-end;
        padding-right: 30px;
        p{
            margin-top: 20px;
        }
        .right{
            text-align: right;
            margin-left: 50px;
            p:nth-child(4){
                font-size: 1.5rem;
                color: $priceColor;
            }
        }
       
        
    }
  
    //按钮
    .btn{
        margin-right: 10px;
        width: 200px;
    }
    .btn-span{
        font-size: 0.9;
        color: #999;
        margin-left: 10px;
    }

    //提交订单
    .toOrder{
        text-align: right;
        margin-top: 30px;
        padding-right: 10px;
        .toOrder-inner{
            width: 200px;
            height: 50px;
            font-size: 1.2rem;
            background-color: $xtxColor;
            color: #fff;
        }
        
    }

    //添加收货地址
    .el-dialog__body{
        padding: 0;
    }
    .el-form{
        width: 500px;
        margin-left: 50%;
        transform: translateX(-50%);
        .cascaderStyle {
            border-color: #409EFF;
            width: 400px;
        }
    }
    .dialog-footer{
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        .el-button{
            width: 100px;
        }
    }
   
}
</style>