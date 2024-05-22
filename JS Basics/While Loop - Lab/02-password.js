function password(input) {
    let index = 0;
    let userName = input[0];
    index++;

    let password = input[index];
    index++;

    while (true) {
        let tempPass = input[index];
        index++;
        if (tempPass === password) {
            console.log(`Welcome ${userName}!`);
            break;
        }
    }
}

password (["Nakov", "1234","Pass", "1234"]);