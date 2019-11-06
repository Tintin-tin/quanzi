const user = require('./src/data/user.json')
const bodyParser=require('body-parser')

module.exports={
    devServer:{
        before(app){
            app.post('/getuser',bodyParser.json(),(req,res)=>{
                let {username,userpwd}=req.body

                let obj=user.find(item=>item.name===username)
                if(!obj){
                    res.send({code:0,msg:'用户不存在'})
                }else{
                    if(obj.pwd===userpwd){
                        res.send({code:1,msg:'登陆成功',data:obj,token:new Date()*1})
                    }else{
                        res.send({code:0,msg:'密码错误'})
                    }
                }
            })
        }
    }
}