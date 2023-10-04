import mongoose from "mongoose";

export default function connection(){
mongoose.connect("mongodb+srv://saurabhdigambar8:X1UED3V4eKh2u9M4@cluster0.tlt0rzr.mongodb.net/Google_Docs" , {useNewUrlParser: true})
.then(()=> console.log("MongoDB is connected"))
.catch((err)=> err.message)
}
