import express from 'express'
import cors from 'cors'
import typeDefs from './graphQL/schema.graphql'
import resolvers from './graphQL/resolvers'

import { GraphQLServer } from 'graphql-yoga'

const app = express()

app.use(cors())

const port = {
	graphQL: 4000,
	server: 3333
}

app.listen(process.env.PORT || port.server, () => {
	const server = new GraphQLServer({ typeDefs, resolvers })
	server.start(() => {
		console.log(
			`rodando o servidor em: ${port.server} e graphQL rodando em: ${port.graphQL}`
		)
	})
})
