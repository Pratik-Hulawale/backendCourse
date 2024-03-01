import mongoose from "mongoose"
/* import { DB_NAME } from "./constants.js";
 */
const connectDB=async()=>{
    try{
        console.log("url", process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(`${'mongodb+srv://pratikh:awEZ0nUXwhzSsLFc@cluster0.yx1vqll.mongodb.net'}/${'backend'}`);
        console.log(`connected Host:${connectionInstance.connection.host}`);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

export default connectDB;
/* const connectDB=async()=>{
    try{
        console.log("url", process.env.MONGODB_URI)
        await mongoose.connect(`${process.env.MONGODB_URI}/${'backend'}`);
        console.log(`connected Host:${connectionInstance.connection.host}`);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}
 */
