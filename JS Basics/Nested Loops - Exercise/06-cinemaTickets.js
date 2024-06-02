function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    while (command !== 'Finish') {
        let movieName = command;

        index++;
        let totalSeatCount = Number(input[index]);
        let takenSeatCount = 0;

        index++;
        let command1 = input[index];

        while (command1 !== 'End') {
            let ticketType = command1;

            if (ticketType === 'student') {
                studentTicketCount++;
            } else if (ticketType === 'standard') {
                standardTicketCount++;
            } else {
                kidTicketCount++;
            }

            takenSeatCount++;

            if (takenSeatCount === totalSeatCount) {
                break;
            }

            index++;
            command1 = input[index];
        }

        let takenSeatPercent = (takenSeatCount / totalSeatCount) * 100;
        console.log(`${movieName} - ${takenSeatPercent.toFixed(2)}% full.`);

        index++;
        command = input[index];
    }

    let totalTicketCount = studentTicketCount + standardTicketCount + kidTicketCount;
    console.log(`Total tickets: ${totalTicketCount}`);

    let studentTicketPercent = (studentTicketCount / totalTicketCount) * 100;
    let standardTicketPercent = (standardTicketCount / totalTicketCount) * 100;
    let kidTicketPercent = (kidTicketCount / totalTicketCount) * 100;

    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", 
"standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);