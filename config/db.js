const mongoose=require('mongoose')

connectDB=async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log('mongo cconnected to'+conn.connection.host)
        
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
module.exports=connectDB