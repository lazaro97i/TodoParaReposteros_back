import mongoose from "mongoose"

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

mongoose.connect(process.env.MONGO_URI, options)
  .then(() => console.log("Database conected"))
  .catch(err => console.log(err)) 