import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.MONGO_URI,
            {
                family: 4,
                serverSelectionTimeoutMS: 15000
            }
        );

        console.log(
            `✅ Prescription MongoDB Connected: ${connection.connection.host}`
        );
    } catch (error) {
        console.error(
            "❌ Prescription MongoDB Connection Failed"
        );

        console.error(error.message);

        throw error;
    }
};

export default connectDB;