import express, { Application } from "express";
import cors from "cors";
import DBconnect from "./Config/db";
import router from "./Routes/user.route";

const port = 2003;
// instanciating the app
const app: Application = express();

// initializing DB
DBconnect();
app.use(express.json());
app.use(cors());
// instanciate routes
app.use("/api/auth", router);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
