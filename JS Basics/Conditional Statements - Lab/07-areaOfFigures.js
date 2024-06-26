function areaOfFigures(input) {
    let type = input[0];
    let area = 0;

    if (type === "square") {
        let l = Number(input[1]);
        let area = l * l;
    } else if(type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
    } else if(type === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * Math.pow(r, 2);
    } else if(type === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = a * h / 2;
    } else {
        console.log("Invalid figure type!");
    }

    console.log(area.toFixed(3));
}

areaOfFigures(["triangle", "5", "6"]);