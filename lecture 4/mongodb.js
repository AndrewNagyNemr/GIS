const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb://localhost/GIS",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("connected to mongodb");
//   }
// );

// mongoose
//   .connect("mongodb://localhost/GIS", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connected to mogodb");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

(async () => {
  await mongoose.connect("mongodb://localhost/GIS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
})()
