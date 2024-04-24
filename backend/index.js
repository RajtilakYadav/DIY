const express = require("express")

const app = express();
const cors = require("cors")
const port = 3000;

const UserRouter = require("./Routers/User")
const AdminRouter = require("./Routers/Admin")
const ProductRouter = require("./Routers/Product")
const ContactRouter = require("./Routers/ContactUs")
const FeedbackRouter = require("./Routers/Feedback")
const UtilRouter = require("./Routers/Utils")


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/Admin", AdminRouter);
app.use("/product" , ProductRouter);
app.use("/contact" , ContactRouter);
app.use("/feedback" , FeedbackRouter);
app.use("/util" , UtilRouter);

app.use(express.static('./Uploads'));



app.listen(port,() => {
    console.log("Server Started");
})