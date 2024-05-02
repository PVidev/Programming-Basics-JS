function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let oddOrEven = '';
 
    switch(operator){
        case '+':
            result = num1 + num2;
            if (result % 2 === 0){
                oddOrEven = 'even'
            } else {
                oddOrEven = 'odd'
                } 
 
            console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`);
             break;
 
 
        case '-':
            result = num1 - num2;
            if (result % 2 === 0){
                oddOrEven = 'even'
            } else {
                oddOrEven = 'odd'               
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`); 
            break;
 
 
        case '*':
            result = num1 * num2;
            if (result % 2 === 0){
                oddOrEven = 'even'
            } else {
                oddOrEven = 'odd'
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`); 
            break;
 
 
 
        case '/':
            if (num2 === 0){
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                result = num1 / num2
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`); break;
            } 
            break;
 
        case '%':
            if (num2 === 0){
                console.log(`Cannot divide ${num1} by zero`)
            } else {
            result = num1 % num2
            console.log(`${num1} % ${num2} = ${result}`); 
            } break;
 
        } 
}