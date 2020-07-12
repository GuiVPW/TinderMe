import User from '../models/Schemas'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

const resolvers = {
	Query: {
		users: async _ => {
			const users = User.find().sort('-createdAt')
			return users
		}
	},
	Mutation: {
		createUser: async (
			_,
			{ name, user, bio, avatar, tastes, latitude, longitude }
		) => {
			const tastesArray = tastes.split(',').map((taste: string) => taste.trim())
			console.log(tastesArray)

			const location = {
				type: 'Point',
				coordinates: [longitude, latitude]
			}

			const newUser = await User.create({
				name,
				user,
				bio,
				avatar,
				tastes: tastesArray,
				location
			})

			return newUser
		}
	}
}

export default resolvers
