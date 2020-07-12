import mongoose from 'mongoose'

const connectionURI =
	'mongodb+srv://admin:admin@cluster0-innyn.mongodb.net/users?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

mongoose.connect(connectionURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

mongoose.Promise = global.Promise

export default mongoose
