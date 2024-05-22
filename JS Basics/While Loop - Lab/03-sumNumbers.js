function sumNumbers(input) {
    let targetSum = Number(input[0]);
    let currentSum = 0;
    let index = 1;
    
    while (currentSum < targetSum) {
        currentSum += Number(input[index]);
        index++;
    }
    
    console.log(currentSum);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);