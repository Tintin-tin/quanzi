<template>
  <div class="box">
    <div class="head">登录注册</div>
    <div class="cont">
      <p>
        登录：
        <input type="text" placeholder="账号/用户名" v-model="username" />
      </p>
      <p>
        注册：
        <input :type="type" placeholder="密码" v-model="userpwd" />
        <span :class="['iconfont',flag?'icon-yanjing':'icon-yanjing_bi']" @click="changeEye"></span>
      </p>

      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
// import axios from 'axios'

export default {
    computed:{
        ...mapState(['user'])
    },
  data() {
    return {
      username: "",
      userpwd: "",
      type:'password',
      flag:false
    };
  },
  methods:{
      

      ...mapMutations(['getUser']),

      changeEye(){
          this.flag=!this.flag
          if(this.flag){
              this.type='text'
          }else{
              this.type='password'
          }
      },

      submit(){
          if(!this.username.trim() || !this.userpwd.trim()){
              alert('不能为空')
          }else{
              this.$axios
              .post('/getuser',{username:this.username,userpwd:this.userpwd})
              .then(({data})=>{
                  if(data.code===0){
                      alert(data.msg)
                  }else{
                      this.getUser(data.data)
                      localStorage.token=data.token
                      this.$router.push('/')
                  }
              })
          }
      }
  }
};
</script>

<style>
</style>