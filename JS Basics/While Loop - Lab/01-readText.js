function readText(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Stop") {
            break;
        }
        console.log(input[i]);
    }
}

readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
;
