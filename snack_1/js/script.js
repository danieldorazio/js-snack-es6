const bici = [
    
    {
        nome: "bici_1",
        peso: 10,
    },

    {
        nome: "bici_2",
        peso: 20,
    },

    {
        nome: "bici_3",
        peso: 30,
    }
]

// let biciCorispondente;
// let pesoMax = 0;
// bici.forEach((curBici) => {
//     if (curBici.peso > pesoMax) {
//         pesoMax = curBici.peso;
//         biciCorispondente = curBici
//     }
// })
// console.log(biciCorispondente);

const [firstBici, secondBici, thirdBici ] = bici;

function compareWeight(firstObject, secondObject, thirdObject) {
    let biciMax;

    if (firstObject.peso < secondObject.peso) {
        if (firstObject.peso < thirdObject.peso) {
            biciMax = firstObject;
        } else {
            biciMax = thirdObject;
        }

    } else if (secondObject.peso < thirdObject.peso) {
                biciMax = secondObject;
            } else {
                        biciMax = thirdObject;
                    }
    
    return biciMax;
    }


const biciMax = compareWeight(firstBici, secondBici, thirdBici);


const container = document.querySelector(".container").innerHTML = `
la bici che pesa di meno è ${biciMax.nome} con il peso di ${biciMax.peso}`