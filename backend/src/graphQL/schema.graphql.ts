const typeDefs = `
    type Points {
        type: String
        coordinates: [Float]
    }

    type User {
        name: String
        user: String
        bio: String
        avatar: String
        tastes: [String]
        location: Points
    }

    type Query {
        users: [User!]!
    }
    type Mutation {
        createUser(
            name: String
            user: String
            bio: String
            avatar: String
            tastes: String
            latitude: Float
            longitude: Float
        ):  User!
    }
`

export default typeDefs
