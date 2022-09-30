const prompt = require('prompt-sync')({sigint: true});

const verify = (numero) => {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const showAllNumbers = (numbers, tipo) => {
    numbers.forEach((number) => {
        console.log(`${number} é ${tipo}`);
    })
}

const verificador = () => {
    const par = [];
    const impar = [];
    count = 0;

    while (count <= 30) {
        let input = prompt(`digite 1 numero e aperte ENTER: ${count}/30 \n`);

        if (input == 0) {
            if (par.length != 0) {
                par.pop();
            } else {
                console.log("pilha par está vazia");
            }
            if (impar.length != 0) {
                impar.pop();
            } else {
                console.log("pilha impar está vazia");
            }
        } else if (verify(input)) {
            par.push(input);
        } else {
            impar.push(input);
        }
        count++;

    }

    showAllNumbers(par, "par");
    showAllNumbers(impar, "impar");
}

verificador();