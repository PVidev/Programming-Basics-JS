function oldBooks(input) {
    let favoriteBook = input[0];
    let index = 1;
    let checkedBooks = 0;

    while (index < input.length) {
        let currentBook = input[index];

        if (currentBook === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${checkedBooks} books.`);
            return;
        }

        if (currentBook === favoriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            return;
        }

        checkedBooks++;
        index++;
    }

    console.log("The book you search is not here!");
    console.log(`You checked ${checkedBooks} books.`);
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]); 