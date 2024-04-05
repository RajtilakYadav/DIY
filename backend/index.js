const express = require("express")

const app = express();
const cors = require("cors")
const port = 3000;

const UserRouter = require("./Routers/User")
const AdminRouter = require("./Routers/Admin")
const ProductRouter = require("./Routers/Product")
const UtilRouter = require("./Routers/Utils")


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/user", UserRouter);
app.use("/Admin", AdminRouter);
app.use("/product" , ProductRouter);
app.use("/util" , UtilRouter);

app.use(express.static('./Uploads'));



app.listen(port,() => {
    console.log("Server Started");
})