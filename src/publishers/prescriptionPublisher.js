import { getChannel } from "../config/rabbitmq.js";

const EXCHANGE_NAME = "pharmacy.events";

export async function publishPrescriptionCreated(
    prescription
) {
    const channel = getChannel();

    const event = {
        eventType: "PRESCRIPTION_CREATED",
        prescriptionId:
            prescription.prescriptionId,
        medicines:
            prescription.medicines.map(
                (medicine) => ({
                    productId:
                        medicine.productId,
                    quantity:
                        medicine.quantity
                })
            ),
        createdAt:
            new Date().toISOString()
    };

    channel.publish(
        EXCHANGE_NAME,
        "prescription.created",
        Buffer.from(JSON.stringify(event)),
        {
            persistent: true,
            contentType: "application/json"
        }
    );
}