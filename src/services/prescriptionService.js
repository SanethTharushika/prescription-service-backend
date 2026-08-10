import * as prescriptionRepository
    from "../repositories/prescriptionRepository.js";

import {
    publishPrescriptionCreated
} from "../publishers/prescriptionPublisher.js";

export async function createPrescription(
    prescriptionData
) {
    const existingPrescription =
        await prescriptionRepository.getPrescriptionById(
            prescriptionData.prescriptionId
        );

    if (existingPrescription) {
        throw new Error(
            "Prescription ID already exists"
        );
    }

    const prescription =
        await prescriptionRepository.createPrescription({
            ...prescriptionData,
            status: "pending"
        });

    await publishPrescriptionCreated(
        prescription
    );

    return prescription;
}

export async function getAllPrescriptions() {
    return await prescriptionRepository
        .getAllPrescriptions();
}

export async function getPrescriptionById(
    prescriptionId
) {
    const prescription =
        await prescriptionRepository
            .getPrescriptionById(
                prescriptionId
            );

    if (!prescription) {
        throw new Error(
            "Prescription not found"
        );
    }

    return prescription;
}

export async function updatePrescription(
    prescriptionId,
    updateData
) {
    const prescription =
        await prescriptionRepository
            .updatePrescription(
                prescriptionId,
                updateData
            );

    if (!prescription) {
        throw new Error(
            "Prescription not found"
        );
    }

    return prescription;
}

export async function deletePrescription(
    prescriptionId
) {
    const prescription =
        await prescriptionRepository
            .deletePrescription(
                prescriptionId
            );

    if (!prescription) {
        throw new Error(
            "Prescription not found"
        );
    }

    return prescription;
}

export async function updatePrescriptionStatus(
    prescriptionId,
    status
) {
    const prescription =
        await prescriptionRepository
            .updatePrescriptionStatus(
                prescriptionId,
                status
            );

    if (!prescription) {
        throw new Error(
            "Prescription not found"
        );
    }

    return prescription;
}