import mongoose from "mongoose";

const prescribedMedicineSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
            trim: true
        },

        dosage: {
            type: String,
            required: true,
            trim: true
        },

        frequency: {
            type: String,
            required: true,
            trim: true
        },

        durationDays: {
            type: Number,
            required: true,
            min: 1
        },

        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    },
    {
        _id: false
    }
);

const prescriptionSchema = new mongoose.Schema(
    {
        prescriptionId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        patientId: {
            type: String,
            required: true,
            trim: true
        },

        doctorId: {
            type: String,
            required: true,
            trim: true
        },

        medicines: {
            type: [prescribedMedicineSchema],
            required: true
        },

        notes: {
            type: String,
            default: "",
            trim: true
        },

        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "failed",
                "cancelled"
            ],
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

const Prescription = mongoose.model(
    "Prescription",
    prescriptionSchema
);

export default Prescription;