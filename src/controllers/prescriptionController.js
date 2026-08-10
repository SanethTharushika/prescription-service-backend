import * as prescriptionService
    from "../services/prescriptionService.js";

export async function createPrescription(req, res) {
    try {
        const prescription =
            await prescriptionService.createPrescription(
                req.body
            );

        return res.status(201).json({
            success: true,
            message: "Prescription created successfully",
            data: prescription
        });

    } catch (error) {
        console.error(
            "Create prescription error:",
            error
        );

        return res.status(400).json({
            success: false,
            message:
                error.message ||
                "Failed to create prescription"
        });
    }
}

export async function getAllPrescriptions(req, res) {
    try {
        const prescriptions =
            await prescriptionService.getAllPrescriptions();

        return res.status(200).json({
            success: true,
            data: prescriptions
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export async function getPrescriptionById(req, res) {
    try {
        const prescription =
            await prescriptionService.getPrescriptionById(
                req.params.prescriptionId
            );

        return res.status(200).json({
            success: true,
            data: prescription
        });

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
}

export async function updatePrescription(req, res) {
    try {
        const prescription =
            await prescriptionService.updatePrescription(
                req.params.prescriptionId,
                req.body
            );

        return res.status(200).json({
            success: true,
            message: "Prescription updated successfully",
            data: prescription
        });

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
}

export async function deletePrescription(req, res) {
    try {
        await prescriptionService.deletePrescription(
            req.params.prescriptionId
        );

        return res.status(200).json({
            success: true,
            message: "Prescription deleted successfully"
        });

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
}