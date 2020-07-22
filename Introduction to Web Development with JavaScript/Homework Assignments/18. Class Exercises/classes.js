// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut = 0, isDiscarded = false) {
        this._title = title;
        this._author = author;
        this._copyrightDate = copyrightDate;
        this._isbn = isbn;
        this._pages = pages;
        this._timesCheckedOut = timesCheckedOut;
        this._isDiscarded = isDiscarded;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get copyrightDate() {
        return this._copyrightDate;
    }

    get isbn() {
        return this._isbn;
    }

    get pages() {
        return this._pages;
    }

    get timesCheckedOut() {
        return this._timesCheckedOut;
    }

    get isDiscarded() {
        return this._isDiscarded;
    }

    hasBeenCheckedOut(number) {
        this._timesCheckedOut = (this._timesCheckedOut + number);
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded);
    }

    shouldDiscard() {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        if (this._copyrightDate < (currentYear - 5)) {
            this._isDiscarded = true;
        }
        return this._isDiscarded;
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, isbn, pages, timesCheckedOut, isDiscarded);
    }

    shouldDiscard() {
        if (this._timesCheckedOut > 100) {
            this._isDiscarded = true;
        }
        return this._isDiscarded;
    }
}

// Declare the objects for exercises 2 and 3 here:
let ppNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, false);

let tssbmManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, false);


// Code exercises 4 & 5 here:
console.log(ppNovel.shouldDiscard());
console.log(tssbmManual.shouldDiscard());

ppNovel.hasBeenCheckedOut(5);
console.log(ppNovel.timesCheckedOut);