const squadre = [
    
    {
        nome: "squadra_1",
        puntiFatti: 0,
        puntiSubiti: 0,
    },

    {
        nome: "squadra_2",
        puntiFatti: 0,
        puntiSubiti: 0,
    },

    {
        nome: "squadra_3",
        puntiFatti: 0,
        puntiSubiti: 0,
    },
]



const nuoveSquadre = [...squadre];
const [primaSquadra, secondaSquadra, terzaSquadra] = nuoveSquadre;

primaSquadra.puntiFatti = getRndInteger();
primaSquadra.puntiSubiti = getRndInteger();

secondaSquadra.puntiFatti = getRndInteger();
secondaSquadra.puntiSubiti = getRndInteger();

terzaSquadra.puntiFatti = getRndInteger();
terzaSquadra.puntiSubiti = getRndInteger();

console.log(squadre);
console.log(nuoveSquadre);

/***************************************************************/
// FUNZIONE CREA NUMERI RANDOM
function getRndInteger() {
    return Math.floor(Math.random() * (50 - 0 + 1) ) + 0;
  }
