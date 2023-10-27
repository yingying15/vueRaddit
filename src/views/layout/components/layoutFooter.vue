<template>
  <!-- 头部 -->
  <el-row class="footerTop">
    <el-col :span="6" class="footerTopItem">
      <div class="grid-content ep-bg-purple">
        <span>客户服务</span>
        <div class="bott">
          <div class="left">
            <i class="iconfont icon-zaixiankefucustomerservice"></i>
            在线客服
          </div>
          <div class="right">
            <i class="iconfont icon-wenti"></i>
            问题反馈
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="footerTopItem">
      <div class="grid-content ep-bg-purple">
        <span>关注我们</span>
        <div class="bott">
          <div class="left">
            <i class="iconfont icon-gongzhonghao"></i>
            公众号
          </div>
          <div class="right">
            <i class="iconfont icon-weibo"></i>
            微博
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="footerTopItem">
      <div class="grid-content ep-bg-purple">
        <span>下载APP</span>
        <div class="bott">
          <div class="left">
            <i class="iconfont icon-zaixiankefucustomerservice"></i>
            在线客服
          </div>
          <div class="right noright">
            <span class="ic">扫描二维码</span>
            <span class="ic">立马下载APP</span>
            <el-button type="primary">下载页面</el-button>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="footerTopItem">
      <div class="grid-content ep-bg-purple">
        <span>服务热线</span>
        <div class="bott">
          <div class="right noright">
            <span class="ic">扫描二维码</span>
            <span class="ic">立马下载APP</span>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <!-- 底部中间 -->
  <div class="footerBottom">
    <!-- 底部中间头部 -->
    <el-row class="footerBott">
      <el-col :span="8">
        <div class="footerMiddle grid-content">
          <i class="iconfont icon-jiage"></i>
          <span>价格亲民</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="footerMiddle grid-content">
          <i class="iconfont icon-huoche"></i>
          <span>物流快捷</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="footerMiddle grid-content">
          <i class="iconfont icon-icon"></i>
          <span>品质新鲜</span>
        </div>
      </el-col>
    </el-row>
    <hr>
    <!-- 底部底部 -->
    <div class="footerBott">
      <!-- <el-link href="https://element-plus.org" target="_blank">关于我们</el-link> -->
      <el-link type="info">关于我们</el-link>
      <el-divider direction="vertical" />
      <el-link type="info">帮助中心</el-link>
      <el-divider direction="vertical" />
      <el-link type="info">售后服务</el-link>
      <el-divider direction="vertical" />
      <el-link type="info">配送与验收</el-link>
      <el-divider direction="vertical" />
      <el-link type="info">商务合作</el-link>
      <el-divider direction="vertical" />
      <el-link type="info">搜索推荐</el-link>
      <el-divider direction="vertical" />
      <el-link type="info">友情链接</el-link>
    </div>
  </div>
  <!-- <footer class="app_footer">
     
      <div class="contact">
        <div class="container">
          <dl>
            <dt>客户服务</dt>
            <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
            <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
            <dd><i class="iconfont icon-weibo"></i> 微博</dd>
          </dl>
          <dl>
            <dt>下载APP</dt>
            <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
            <dd class="download">
              <span>扫描二维码</span>
              <span>立马下载APP</span>
              <a href="javascript:;">下载页面</a>
            </dd>
          </dl>
          <dl>
            <dt>服务热线</dt>
            <dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
          </dl>
        </div>
      </div>
     
      <div class="extra">
        <div class="container">
          <div class="slogan">
            <a href="javascript:;">
              <i class="iconfont icon-footer01"></i>
              <span>价格亲民</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer02"></i>
              <span>物流快捷</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer03"></i>
              <span>品质新鲜</span>
            </a>
          </div>
        
          <div class="copyright">
            <p>
              <a href="javascript:;">关于我们</a>
              <a href="javascript:;">帮助中心</a>
              <a href="javascript:;">售后服务</a>
              <a href="javascript:;">配送与验收</a>
              <a href="javascript:;">商务合作</a>
              <a href="javascript:;">搜索推荐</a>
              <a href="javascript:;">友情链接</a>
            </p>
            <p>CopyRight © 小兔鲜儿</p>
          </div>
        </div>
      </div>
    </footer> -->
</template>
<style scoped lang="scss">
//底部上面样式
.footerTop {
  margin-bottom: 2em;

  .footerTopItem {
    border-right: 1px solid black;

    &:last-child {
      border-right: none;
    }

    .grid-content {
      text-align: center;

      .bott {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        .left,
        .right {
          width: 85px;
          height: 85px;
          border: 1px solid grey;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 10px;

          .iconfont {
            font-size: 35px;
          }

          .ic {
            font-size: 0.5rem;
          }

          .el-button {
            margin-top: 3px;
          }
        }

        .noright {
          border: none;
        }
      }
    }
  }
}

//底部样式
.footerBottom {
  color: #FCFCFC;
  background-color: #333;
  // padding-top: 20px;
  padding-top: 2em;

  .footerMiddle {
    .iconfont {
      font-size: 3rem;
      border: 3px solid #fff;
      border-radius: 50%;
      margin-right: 5px;
    }
    &:hover {
      .iconfont {
        color: $xtxColor;
      }
    }

    //字体大小
    span {
      font-size: 2rem;
    }
  }
}

//底部中间样式
.footerBott {
  margin: 20px 0;
  text-align: center;

  .el-link {
    margin: 0 5px;
  }

}

hr {
  width: 90%;
  margin: 0 auto;
}


// }
</style>
<!--   
  <style scoped lang='scss'>
  .app_footer {
    overflow: hidden;
    background-color: #f5f5f5;
    padding-top: 20px;
  
    .contact {
      background: #fff;
  
      .container {
        padding: 60px 0 40px 25px;
        display: flex;
      }
  
      dl {
        height: 190px;
        text-align: center;
        padding: 0 72px;
        border-right: 1px solid #f2f2f2;
        color: #999;
  
        &:first-child {
          padding-left: 0;
        }
  
        &:last-child {
          border-right: none;
          padding-right: 0;
        }
      }
  
      dt {
        line-height: 1;
        font-size: 18px;
      }
  
      dd {
        margin: 36px 12px 0 0;
        float: left;
        width: 92px;
        height: 92px;
        padding-top: 10px;
        border: 1px solid #ededed;
  
        .iconfont {
          font-size: 36px;
          display: block;
          color: #666;
        }
  
        &:hover {
          .iconfont {
            color: $xtxColor;
          }
        }
  
        &:last-child {
          margin-right: 0;
        }
      }
  
      .qrcode {
        width: 92px;
        height: 92px;
        padding: 7px;
        border: 1px solid #ededed;
      }
  
      .download {
        padding-top: 5px;
        font-size: 14px;
        width: auto;
        height: auto;
        border: none;
  
        span {
          display: block;
        }
  
        a {
          display: block;
          line-height: 1;
          padding: 10px 25px;
          margin-top: 5px;
          color: #fff;
          border-radius: 2px;
          background-color: $xtxColor;
        }
      }
  
      .hotline {
        padding-top: 20px;
        font-size: 22px;
        color: #666;
        width: auto;
        height: auto;
        border: none;
  
        small {
          display: block;
          font-size: 15px;
          color: #999;
        }
      }
    }
  
    .extra {
      background-color: #333;
    }
  
    .slogan {
      height: 178px;
      line-height: 58px;
      padding: 60px 100px;
      border-bottom: 1px solid #434343;
      display: flex;
      justify-content: space-between;
  
      a {
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 28px;
  
        i {
          font-size: 50px;
          vertical-align: middle;
          margin-right: 10px;
          font-weight: 100;
        }
  
        span {
          vertical-align: middle;
          text-shadow: 0 0 1px #333;
        }
      }
    }
  
    .copyright {
      height: 170px;
      padding-top: 40px;
      text-align: center;
      color: #999;
      font-size: 15px;
  
      p {
        line-height: 1;
        margin-bottom: 20px;
      }
  
      a {
        color: #999;
        line-height: 1;
        padding: 0 10px;
        border-right: 1px solid #999;
  
        &:last-child {
          border-right: none;
        }
      }
    }
  }
  </style> -->