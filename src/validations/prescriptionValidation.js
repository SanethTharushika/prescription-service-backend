import { z } from "zod";

export const createPrescriptionSchema = z.object({
    body: z.object({
        prescriptionId: z
            .string()
            .trim()
            .min(1, "Prescription ID is required"),

        patientId: z
            .string()
            .trim()
            .min(1, "Patient ID is required"),

        doctorId: z
            .string()
            .trim()
            .min(1, "Doctor ID is required"),

        medicines: z
            .array(
                z.object({
                    productId: z
                        .string()
                        .trim()
                        .min(1, "Product ID is required"),

                    dosage: z
                        .string()
                        .trim()
                        .min(1, "Dosage is required"),

                    frequency: z
                        .string()
                        .trim()
                        .min(1, "Frequency is required"),

                    durationDays: z
                        .number()
                        .int("Duration must be a whole number")
                        .positive("Duration must be greater than 0"),

                    quantity: z
                        .number()
                        .int("Quantity must be a whole number")
                        .positive("Quantity must be greater than 0")
                })
            )
            .min(1, "At least one medicine is required"),

        notes: z
            .string()
            .trim()
            .max(500, "Notes cannot exceed 500 characters")
            .optional()
    })
});