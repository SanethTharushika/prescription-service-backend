import amqp from "amqplib";

let channel;

export async function connectRabbitMQ() {
    const connection = await amqp.connect(
        process.env.RABBITMQ_URL
    );

    channel = await connection.createChannel();

    console.log("✅ RabbitMQ Connected");

    return channel;
}

export function getChannel() {
    if (!channel) {
        throw new Error(
            "RabbitMQ channel is not initialized"
        );
    }

    return channel;
}