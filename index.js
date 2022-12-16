import { app } from "./server/app.js";
import "./server/db/mongoose.js";
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log("Server is up at port " + PORT);
});
