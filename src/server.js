import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

import {
    connectRabbitMQ
} from "./config/rabbitmq.js";

await connectDB();
await connectRabbitMQ();

const PORT =
    process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(
        `Prescription Service running on ${PORT}`
    );
});