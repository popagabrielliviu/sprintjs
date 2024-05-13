function tellFortune(numarCopii, numePartener, locatieGeografica, locMunca){
    let message = `Vei fi un ${locMunca} in ${locatieGeografica} ,casatorit cu ${numePartener} si vei avea ${numarCopii} copii.`
    console.log (message)
}

let numarCopii = 3 
let numePartener = "Emanuel"
let locatieGeografica = "Italia"
let locMunca = "Programator"
tellFortune (numarCopii, numePartener, locatieGeografica, locMunca)
