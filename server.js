let app = require('./app')
let  serverConfig = require('./config/server.config')


app.listen(serverConfig.PORT,()=>{
    console.log("Server is running on PORT 9000.....")
})