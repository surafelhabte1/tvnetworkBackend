import app from "../src/index";

app.get("/sasa", (req, res) => res.send("Express on Vercel"));

export default app;