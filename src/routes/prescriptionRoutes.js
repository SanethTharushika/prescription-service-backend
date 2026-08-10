import express from "express";

import * as prescriptionController
    from "../controllers/prescriptionController.js";

import {
    validateRequest
} from "../middleware/validateRequest.js";

import {
    createPrescriptionSchema
} from "../validations/prescriptionValidation.js";

const router = express.Router();

router.post(
    "/",
    validateRequest(createPrescriptionSchema),
    prescriptionController.createPrescription
);

router.get(
    "/",
    prescriptionController.getAllPrescriptions
);

router.get(
    "/:prescriptionId",
    prescriptionController.getPrescriptionById
);

router.put(
    "/:prescriptionId",
    prescriptionController.updatePrescription
);

router.delete(
    "/:prescriptionId",
    prescriptionController.deletePrescription
);

export default router;