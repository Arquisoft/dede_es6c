const mongoose = require("mongoose");
const {model, Schema} = mongoose;
const bcrypt = require("bcryptjs");

export const userSchema = new Schema({
  name: {type: String, unique: true},
  email: {type: String, unique: true},
  password: {type: String}
});

userSchema.methods.matchPassword = async function (enteredPassword: String) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  /*
  Exporta el modelo de creacion de un usario
  */
  export const userModel = model("User", userSchema);