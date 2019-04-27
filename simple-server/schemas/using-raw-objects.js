import { bookmarkList } from '../data'

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query{
        greeting: String!
        owner: Owner!
        bookmarks(id: ID = "all"): [Bookmark!]
    }
    type Owner{
        name: String!
        email: String!
        age: Int
        websites: [String!]
    }
    type Bookmark{
        id: ID!
        name: String!
        url: String!
    }
`);

const root = {
    greeting: () => 'Welcome to my first graphql server!',
    owner: () => {
        return {
            name: "Wiliam Luo",
            email: "gluo7777@gmail.com",
            age: 24,
            websites: ['ceruleanmind.com', 'github.com/gluo7777']
        }
    },
    bookmarks: (req, res, { id }) => {
        console.info(this);
        console.info('Searching for ', id);
        if (id && new String(id).toLowerCase() === "all") return bookmarkList;
        else return [bookmarkList.find(bm => bm.id === id)];
    }
};