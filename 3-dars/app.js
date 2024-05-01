
const uzunlik =+prompt("Birorta sm kiriting")
const res = uzunlik/100
console.log((res));
console.log(Math.floor(uzunlik/100)); // 300 3 


// 2- misol 

const tonna =+prompt("Kilogram kiriting->")
const kg = Math.floor(tonna/1000)
console.log(`${kg}tonna`);

// 3 - misol

const a =+prompt("a tomonini kirting")
const b =+prompt("b tomonini kirting")
console.log(`${Math.floor(a/b)}marta joylashadi`);

// 4- misol 

const ikkixona =+prompt("Ikkixonali son kiriting")
console.log(`Birlar xonasida ${ikkixona%10} raqami bor. 
 O'nlar xonasida ${Math.floor(ikkixona/10)} raqami bor`);

console.log(ikkixona);
const birlarxonasi = ikkixona%10
console.log(`Birlar xonasida ${birlarxonasi} raqami bor`);
const unlar = Math.floor(ikkixona/10)
console.log(`O'nlar xonasida ${unlar} raqami bor`);

let nul

console.log(nul);

