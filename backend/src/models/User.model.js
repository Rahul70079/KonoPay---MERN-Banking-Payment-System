const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    ac_type:{
        type:String,
        required:true,
        enum:['saving','current'],
        default:'saving'
    }
},{
    timestamps:true
})

schema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcryptjs.hash(this.password, 10);
    }
})

const model = mongoose.model("user",schema)
exports.UserModel = model