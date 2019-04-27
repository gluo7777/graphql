const gql = require('graphql');
const data = require('../data');

const ownerType = new gql.GraphQLObjectType({
    name: 'Owner',
    description: 'The owner of the web server.',
    fields: {
        id: {
            type: gql.GraphQLNonNull(gql.GraphQLID)
        },
        name: {
            type: gql.GraphQLNonNull(gql.GraphQLString),
            description: 'The real life name of the owner.',
        },
        email: {
            type: gql.GraphQLString,
            description: 'The email of the owner.',
        },
        age: {
            type: gql.GraphQLInt,
            description: 'The age of the owner.',
        },
        websites: {
            type: gql.GraphQLList(gql.GraphQLString),
            description: 'Websites ran by the owner.',
        },
        error: {
            type: gql.GraphQLString,
            resolve: () => {
                throw new Error('Why would you want to retrieve this?')
            }
        }
    }
});

const carType = new gql.GraphQLObjectType({
    name: 'car',
    description: 'Defines a car',
    fields: {
        make: {
            type: gql.GraphQLNonNull(gql.GraphQLString)
        },
        model: {
            type: gql.GraphQLNonNull(gql.GraphQLString)
        },
        year: {
            type: gql.GraphQLInt
        },
        // derived value
        fullName: {
            type: gql.GraphQLString,
            // transform values like this
            resolve: (car, args, context, info) => {
                let year = car.year ? `${car.year} ` : '';
                return `${year}${car.make} ${car.model}`
            }
        }
    }
});

const queryType = new gql.GraphQLObjectType({
    name: 'RootQueryType',
    description: 'The root query object.',
    fields: {
        greeting: {
            type: gql.GraphQLString,
            description: 'A simple greeting from the web server.',
            resolve: () => 'Welcome to my first graphql server!'
        },
        owner: {
            type: ownerType,
            args: {
                id: {
                    name: 'id',
                    description: 'id must be provided',
                    type: gql.GraphQLNonNull(gql.GraphQLID)
                }
            },
            resolve: (root, { id }) => {
                if (!id) return data.owners[0];
                else {
                    let nId = parseInt(id);
                    return data.owners.find(owner => owner.id === nId);
                }
            }
        },
        cars: {
            type: gql.GraphQLList(carType),
            args: {
                make: {
                    name: 'make',
                    type: gql.GraphQLString
                },
                model: {
                    name: 'model',
                    type: gql.GraphQLString
                },
                year: {
                    name: 'year',
                    type: gql.GraphQLInt
                }
            },
            resolve: (root, { make, model, year }) => {
                return data.cars.filter(car =>
                    (!make || car.make === make) &&
                    (!model || car.model === model) &&
                    (!year || car.year === year)
                );
            }
        }
    }
})

const schema = new gql.GraphQLSchema({
    query: queryType,
    types: [queryType, ownerType, carType]
});

module.exports.schema = schema;