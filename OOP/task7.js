//Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book{
    constructor(title,author,publicationYear)
    {
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear;

    }

    displayDetails()
    {
        console.log(`Title: ${this.title},  Author: ${this.author} ,  Publication Year: ${this.publicationYear}`)
    }

}

class Ebook extends Book{
    constructor(title,author,publicationYear,bookPrice)
    {
        super(title,author,publicationYear);
        this.bookPrice=bookPrice;


    }
    displayDetails()
    {
        super.displayDetails();
        console.log(`Book Pricwe: ${this.bookPrice}`)
    }
}

const Ebook1 = new Ebook('Lekin','John Elia',2006,10000);
Ebook1.displayDetails();