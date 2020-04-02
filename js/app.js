//document.getElementById('app').innerHTML='hola mundo javascript';
let nombre=prompt('Cual es tu nombre');
let edad=prompt('Cual es tu edad');
document.getElementById('app').innerHTML=`Bienvenido ${nombre} de ${edad} años`;
console.log("enviando a la consola");
console.table([1,2,3]);
//console.timeEnd('hola');

//----------------
var nombre2="vale 'hola' ";
console.log(nombre2.concat('','probando'));

let aprendiendo='aprendiendo';
    tecnologia='Javascript';
    console.log(`${aprendiendo} ${tecnologia}`);
//----------------------
mensaje='java script aprendiendo full js para el ser buena profesional';
console.log(mensaje.slice(0,6));//-1 atras hacia delante
//0,21 comienza en 0 hasta el 11
//slice acorta el mensaje
console.log(mensaje.split(' '));//separar por el espacio en blanco
console.log(mensaje.replace('js' ,'php'));
console.log(mensaje.includes('js'));
console.log(aprendiendo.repeat(10));
const n1=11;
const n2=10;

let resultado;
resultado=Math.PI;
resultado=Math.floor(2.99);
resultado=Math.sqrt(144);
resultado=Math.pow(8,3);
resultado=Math.min(2,4,5,6,7,8,9);
resultado=Math.max(2,4,5,6,7,8,9);
resultado=Math.random();
console.log(resultado);
//_-----------------------
let valor=[1,2,3,4];
console.log(valor);
valor=new Date();
// === revisa el valor y el tipo de dato que es
// 2!=3  2 diferente de 3 verdadero
// console.log('hola' == ' hola'); 