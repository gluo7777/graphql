// define a list of bookmarks
class Bookmark {
    constructor(id, name, url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }
}

module.exports.bookmarkList = [
    new Bookmark("1", "Google", "www.google.com"),
    new Bookmark("2", "Amazon", "www.amazon.com"),
    new Bookmark("3", "Microsoft", "www.microsoft.com")
]

var NEXT_ID = 1;

class Owner {
    constructor(name, email, age, websites) {
        this.id = NEXT_ID++;
        this.name = name;
        this.email = email;
        this.age = age;
        this.websites = websites;
    }
}

module.exports.owners = [
    new Owner('William Luo', 'gluo7777@gmail.com', 24,
        ['ceruleanmind.com', 'github.com/gluo7777'])
    , new Owner('David Luo', 'david7777@gmail.com', 24,
        null)
    , new Owner('Elias', null, 24,
        ['ceruleanhind.com', null])
]

module.exports.cars = [
    { make: 'Toyota', model: 'Corolla', year: 1999 }
    , { make: 'Toyota', model: 'Corolla', year: 2000 }
    , { make: 'Honda', model: 'Accord', year: 1999 }
    , { make: 'Honda', model: 'Civic', year: 1999 }
    , { make: 'Ford', model: 'Focus', year: 2001 }
    , { make: 'Ford', model: 'Fiesta', year: 2000 }
]