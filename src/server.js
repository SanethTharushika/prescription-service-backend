import dns from "node:dns";
import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./config/db.js";
import {
    connectRabbitMQ
} from "./config/rabbitmq.js";

dotenv.config();

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

async function startServer() {
    try {
        await connectDB();
        await connectRabbitMQ();

        const PORT =
            process.env.PORT || 5001;

        app.listen(PORT, () => {
            console.log(
                `Prescription Service running on ${PORT}`
            );
        });
    } catch (error) {
        console.error("❌ Failed to start Medicine Service:", error);
        console.error("Code:", error.code);
        if (error.errors) console.error("Details:", error.errors);
        process.exit(1);
    }
}

startServer();