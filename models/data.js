const mongoose = require("mongoose");
require("mongoose-type-email")

const dataSchema = new mongoose.Schema(
  {
    agent: {
      type: String,
    },
    userType: {
      type: String,
    },
    policy_mode: {
        type: String,
    },
    producer: {
      type: String.apply,
    },
    policy_number: {
      type: String,
    },
    premium_amount_written:{
      type:String,
    },
    premiumu_amount:{
      type:String,
    },
    policy_type:{
      type:String,
    },
    company_name:{
      type:String,
    },
    category_name:{
      type:String,
    },
    policy_start_date:{
      type:String,
    },
    policy_end_date:{
      type:String,
    },
    csr:{
      type:String,
    },
    account_name:{
      type:String,
    },
    email:{
      type:String,
    },
    gender:{
      type:String,
    },
    firstname:{
      type:String,
    },
    city:{
      type:String,
    },
    account_type:{
      type:String,
    },
    phone:{
      type:String,
    },
    address:{
      type:String,
    },
    state:{
      type:String,
    },
    zip:{
      type:String,
    },
    dob:{
      type:String,
    },
    primary:{
      type:String,
    },
    applicantID:{
      type:String,

    },
    agent_id:{
      type:String,
    },
    hasActiveClientPolicy:{
      type:String
    }

  },
  {
    timestamps: true,
  }

);
module.exports = mongoose.model("Data", dataSchema);
