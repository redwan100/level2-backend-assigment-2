import app from "./app";
const port = 5000;
import mongoose from "mongoose";

// getting-started.

async function main() {
  await mongoose.connect(
    "mongodb+srv://level2:level2@cluster0.yq2vgbi.mongodb.net/practice-project",
  );

  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });

  console.log("database is connected✌️");
}

main();
