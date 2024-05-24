import app from "../src/index";

app.get("/", (req, res) => res.send("Express on Vercel"));

export default app;