import mongoose from '../database/connection'

const PointSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ['Point'],
		required: true
	},
	coordinates: {
		type: [Number],
		required: true
	}
})

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		user: {
			type: String,
			required: true
		},
		bio: String,
		avatar: {
			type: String,
			required: true
		},
		tastes: [String],
		location: {
			type: PointSchema,
			index: '2dsphere'
		}
	},
	{
		timestamps: true
	}
)

const User = mongoose.model('User', UserSchema)

export default User
