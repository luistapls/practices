let posibilidadBisiesto = years => years % 4 === 0 && years % 100 !== 0  || years % 400 === 0
// var posibilidadBisiesto = year => year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? true : false: true : false;
var c1 = 0;
var fechaSum = new Date (prompt("Indique una fecha (YY/MM/DD)."));
while(!posibilidadBisiesto(fechaSum.getFullYear() + c1)) {
    c1++;
}
var siEsBisiesta = new Date(fechaSum.getFullYear(),1,29);
var proxFechaBisiesto = new Date(c1 === 0 ? siEsBisiesta - fechaSum > 0 ? fechaSum.getFullYear() : fechaSum.getFullYear() + 4 : fechaSum.getFullYear() + c1, 1, 29);
var diasFaltantes = (proxFechaBisiesto - fechaSum)/(8.64 * (10 ** 7));

console.log(`${c1 === 0 ? 'Es bisiesto.': 'No es bisiesto.'} 
${diasFaltantes === 1 ? 'Falta un día':
diasFaltantes === 2 ? 'Faltan dos días': 
diasFaltantes === 3 ? 'Faltan tres días' : 
diasFaltantes === 4 ? 'Faltan cuatro días' : 
diasFaltantes === 5 ? 'Faltan cinco días' : 
diasFaltantes === 6 ? 'Faltan seis días' : 
diasFaltantes === 7 ? 'Faltan siete días': 
diasFaltantes === 8 ? 'Faltan ocho días': 
diasFaltantes === 9 ? 'Faltan nueve días' : 
diasFaltantes === 10 ? 'Faltan dies días' : 
`Faltan ${diasFaltantes} días`} para el proximo 29 de febrero`);

