<script setup>
import {ref} from 'vue'
import {User,Lock} from '@element-plus/icons-vue'
import {useUserStores} from '@/stores/index.js'
// import { useRouter } from 'vue-router'
import router from '@/router/index.js'
//跳转到首页
// const router=useRouter()
const userinfo=ref({
    account:'',
    password:'',
    prepassword:''
})
const userForm=ref(null)
//校验规则
const rules=({
    account:[
        {required:true,message:'请输入账号',trigger:'blur'}
    ],
    password:[
        {required:true,message:'请输入密码',trigger:'blur'},
        //匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
        {pattern:/^\S{6,12}$/,message:'密码必须是6-12位的非空白字符',trigger:'blur'}
    ],
    prepassword:[
        {required:true,message:'请输入密码',trigger:'blur'},
        {pattern:/^\S{6,12}$/,message:'密码必须是6-12位的非空白字符',trigger:'blur'},
        {validator:(rule,value,callback)=>{
            if(value!==userinfo.value.password){
                callback(new Error('两次输入密码不一致'))
            }else{
                callback()
            }
        }}
    ]
})

//登录开关 true为登录 false为注册
const flag=ref('login')
//得到仓库
const userStores=useUserStores()
//登录注册之前预校验
const submit=async()=>{
    await userForm.value.validate()
    await userStores.tologin(userinfo.value)
    ElMessage.success('登录成功')
    // router.replace({ path: '/' })
    router.replace('/')
}


</script>
<template>  
    <div class="common-layout">
    <el-container>
        <el-header>
            <div class="nav">
                <!-- logo -->
                <img src="@/assets/logo.png" alt="logo">
                <RouterLink to="/" class="nav-right"><span>进入网站首页&gt;</span></RouterLink>
            </div>
        </el-header>
        <el-main>
            <el-tabs type="border-card" class="demo-tabs" v-model="flag">
                <el-tab-pane label="账户登录" name="login"></el-tab-pane>
                <el-tab-pane label="免费注册" name="register"></el-tab-pane>
                 <!-- 登录 -->
            <el-form :model="userinfo" ref="userForm" :rules="rules" v-if="flag==='login'">
                <el-form-item prop="account">
                    <el-input size="large" v-model="userinfo.account"  :prefix-icon="User" placeholder="请输入账号"/>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input size="large" v-model="userinfo.password" :prefix-icon="Lock"  placeholder="请输入密码"/>
                </el-form-item>
                <el-form-item> 
                    <el-button size="large" @click="submit('login')">登录</el-button>
                </el-form-item>
            </el-form>
            <!-- 注册 -->
            <el-form :model="userinfo" ref="userForm" :rules="rules" v-else>
                <el-form-item prop="account">
                    <el-input size="large" v-model="userinfo.account"  :prefix-icon="User"  placeholder="请输入账号"/>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input size="large" v-model="userinfo.password"  :prefix-icon="Lock"  placeholder="请输入密码"/>
                </el-form-item>
                <el-form-item prop="prepassword">
                    <el-input size="large" v-model="userinfo.prepassword"  :prefix-icon="Lock"  placeholder="再次输入密码"/>
                </el-form-item>
                <el-form-item> 
                    <el-button size="large" @click="submit('register')">注册</el-button>
                </el-form-item>
            </el-form>
            </el-tabs>
           
        </el-main>
        <el-footer>
            <ul>
                <li>关于我们</li>
                <li>帮助中心</li>
                <li>售后服务</li>
                <li>配送与验收</li>
                <li>商务合作</li>
                <li>搜索推荐</li>
                <li>友情链接</li>
            </ul>
        </el-footer>
    </el-container>
    </div>
</template>
<style scoped lang="scss">
.common-layout{
    width: 100vw;
    //头部
    .el-header{
        height: 140px;
        background-color: #fff;
        .nav{
            width: 80%;
            height: 70%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            img{
                background: none;
                object-fit: contain;
                height: 90px;
            }
            span{
                font-size: 1.2rem;
            }
           
        }
    }
    .el-main{
        height: 520px;
        background: url("@/assets/login-bg.png") no-repeat center top/cover;
        position: relative;
        //标签页
        .demo-tabs{
            width: 350px;
            background-color: #fff;
            border: 1px solid pink;
            position: absolute;
            left: 60%;
            top:20%;
            height: 370px;
            //标签标题
            .el-tab-pane{
                font-size: 1.2rem;
                font-weight: bolder;
            }
            //表单
            .el-form{
                padding: 20px 20px;
                .el-button{
                    width:100%;
                    background-color: $xtxColor;
                    color: #fff;
                }
            }
        }
        
    }
    //底部
    .el-footer{
        background-color: #fff;
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 33%;
            height: 20px;
            margin: auto;
            margin-top: 40px;
            li{
                font-size: 1.1rem;
                border-right: 1px solid #CCC;
                padding: 0 5px;
                color: #999;
                margin: 0;
                &:last-child{
                    border-right: none;
                }
            }
        }
    }
}
</style>