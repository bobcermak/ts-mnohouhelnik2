/* spolužák po levici:  Vítek Dobrovský*/
/* spolužák po pravici: Vítek Provazník*/
/* Zadání:
   Vypište souhrnnou délku úseček tvořících jeden "mnohoúhelník". 
   Pomocí funkce next_point() získávejte jednotlivé body mnohoúhelníku (A, B, C, D, E, F, G, H, …)
   Úsečku tvoří dvojice po sobě jdoucích bodů (např. |AB| nebo |BC| atd.)
   
   Poznámka:
   Například pokud bod A a F mají stejnou souřadnici, pak mnohoúhelník je "uzavřen",
   bod G je počátečním bodem dalšího mnohoúhelníku.

   Poznámka2:
   Pro hodnocení nejlépe 2 stačí zjistit, z kolika úseček se mnohoúhelník skládá.

   Poznámka3:
   Pro hodnocení nejlépe 3, lze použít funkci getAllPoints()

   Poznámka4:
   Pro hodnocení nejlépe 4: Stejné jako Poznámka2 + Poznámka3
*/

/*console.log("--- getAllPoints() ---")
console.log(JSON.stringify(polyLine.getAllPoints()))

console.log("--- nextPoint() ---")
console.log(JSON.stringify(polyLine.nextPoint()))

console.log("--- getSegmentLength({x: 1, y: 5}, {x: 10, y: 5}) ---")
console.log(getSegmentLength({ x: 0, y: 5 }, { x: 10, y: 5 }))*/




/*let data = polyLine.getAllPoints()
let zacatek = data[0]
let next 
let obvod = getSegmentLength(data[1], zacatek)


for (let i = 1; i < data.length; i++) {
    next = data[i]
    if (zacatek.y !== next.y && zacatek.x !== next.x) {
        obvod += getSegmentLength(data[i], data[i - 1])
    }


    else {
        console.log(obvod)
    }
}*/

let run: boolean = true
let firstPoint = polyLine.nextPoint()
let nextPoint

let celkObvod: number = 0
let pocetStran: number = 0

while (run) {
    pocetStran++
    nextPoint = polyLine.nextPoint()
    celkObvod += getSegmentLength(firstPoint,nextPoint)
    if (firstPoint.x === nextPoint.x && firstPoint.y === nextPoint.y) {
        run = false
    }
}


console.log("Celkový obvod: " + celkObvod)

console.log("Celkový počet stran: " + pocetStran)





