import Prescription from "../models/prescriptionModel.js";

export async function createPrescription(
    prescriptionData
) {
    return await Prescription.create(
        prescriptionData
    );
}

export async function getAllPrescriptions() {
    return await Prescription.find().sort({
        createdAt: -1
    });
}

export async function getPrescriptionById(
    prescriptionId
) {
    return await Prescription.findOne({
        prescriptionId
    });
}

export async function updatePrescription(
    prescriptionId,
    updateData
) {
    return await Prescription.findOneAndUpdate(
        {
            prescriptionId
        },
        updateData,
        {
            new: true,
            runValidators: true
        }
    );
}

export async function deletePrescription(
    prescriptionId
) {
    return await Prescription.findOneAndDelete({
        prescriptionId
    });
}

export async function updatePrescriptionStatus(
    prescriptionId,
    status
) {
    return await Prescription.findOneAndUpdate(
        {
            prescriptionId
        },
        {
            status
        },
        {
            new: true,
            runValidators: true
        }
    );
}