//parent class
class LibraryItem {
    constructor(title, id, isAvailable) {
        this.title = title
        this.id = id
        this.isAvailable = isAvailable
    }
    checkOut(){
            console.log(`\nYou are checking out item:
        ${this.title}`)
    } 
    returnItem(){
        console.log(`\nYou are returning your item:
            ${this.title}`)
    }
}

//child classes
class Book extends LibraryItem {
    constructor(title, id, isAvailable, author, genre){
        super(title, id, isAvailable)
        this.author = author
        this.genre = genre}

}

class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration){
        super(title, id, isAvailable)
        this.director = director
        this.duration = duration
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, isAvailable, issueNumber, publisher){
        super(title, id, isAvailable)
        this.issueNumber = issueNumber
        this.publisher = publisher
    }
}

//using child classes
let greatGatsby = new Book('The Great Gatsby', '12.45', true, 'Fitzgerald', 'fiction')
console.log(greatGatsby)
greatGatsby.checkOut()
greatGatsby.returnItem()

let carsMovie = new DVD('Cars', '343.56', false, 'Anderson', '116 minutes')
console.log(carsMovie)
carsMovie.returnItem()

let natGeo = new Magazine('National Geographic', '347.431', true, 'volume 45', 'National Geographic Partners')
console.log(natGeo)
natGeo.checkOut()