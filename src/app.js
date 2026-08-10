import express from "express";
import cors from "cors";

import prescriptionRoutes from "./routes/prescriptionRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Prescription Service is running"
    });
});

app.use(
    "/api/prescriptions",
    prescriptionRoutes
);

export default app;