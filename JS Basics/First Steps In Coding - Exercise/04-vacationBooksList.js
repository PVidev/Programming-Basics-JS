function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let totalPages = pages / pagesPerHour / days;

    console.log(totalPages);
}