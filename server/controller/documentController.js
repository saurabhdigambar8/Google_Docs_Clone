import Document from "../schema/documentSchema.js";
import mongoose from "mongoose";
 export const getDocument= async (id)=>{
    if(id===null) return;
    const document=await  Document.findById(id);
    console.log("get",document);
    if(document) return document;
    return await Document.create({_id:id,data:""})
}
export const updateDocument=async(id,data)=>{
console.log("dat",data);
 return await Document.findByIdAndUpdate(id,{data})
}
