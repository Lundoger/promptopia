import mongoose from "mongoose";

let isConnected = false

export const ConnectToDB = async () => {
	mongoose.set('strictQuery', true)

	if(isConnected) {
		console.log('MongoDB is already connected');
		return
	}

	try {
		mongoose.connect(process.env.MONGODB_URI, {
			dbName: 'share_prompt',
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		
		isConnected = true
		console.log('MongoDB connected');
	} catch (error) {
		console.log(error);
	}
}