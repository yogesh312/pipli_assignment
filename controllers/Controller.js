const mongoose = require("mongoose");
const Agent = mongoose.model("Agent");
const User = mongoose.model("User");
const Policy = mongoose.model("Policy");
const bodyParser = require("body-parser")
const readExelFile = require('read-excel-file');


exports.addData = async (req,res)=>{
    try {
        if(req.file === undefined){
            return res.status(400).send("Please upload valid file");
        }
        let path = __dirname+ '/middleware/uploads/' + req.file.fileName;
        readExelFile(path).then((rows) => {
           rows.shift();
           let agent = {
            agent:row[0]
        }
        let user = {
            name: row[16],
            adress: row[20],
            dob: row[23],
            phone: row[19],
            state: row[21],
            email: row[14],
            zip: row[22],
            gender: row[15],
            userType: row[1]
        }
        let policy = {
            policyNumber: row[4],
            policyStartDate: row[10],
            policyEndDate: row[11],
            policyCategory: row[2],

    }
        let newUser = new User({user})
        await newUser.save();
        let newAgent = new Agent({agent})
        await newAgent.save();
        let newPolicy = new Policy({policy})
        await newPolicy.save()
        })
    } catch (err) {
        return res.status(400).json(err)
    }
};

exports.findUser=async(req,req)=>{
    try{
        
    let user=req.body.email; // email is unique and username was not provided in sheet
    const userData = await User.find({email:user});
    if(!userData){
        res.json("user doesnt exist")
    }else{
        res.json(userData)
    }
    }catch(err){
        console.log(err)
    }
    
}