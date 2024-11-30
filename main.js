// // // Variables
// // let MyName;

// // MyName = "Hi";

// // let MyAge = 15;

// // alert(MyName);

// // let MyName = "josefino2",
// //   MyAge = 15,
// //   MyMessage = "hello";

// //   alert(MyName);
// //   alert(MyAge);
// //   alert(MyMessage);

// // constantes 
// const MyBirthDay = "oct-06-1998";

// // alert(MyBirthDay);
// let MyAge2 = 33;
// let IsActive  = true;
// let IsBlue = false;

// let MyHeight = null;
// let MyWeight2 = undefined;

// // ingreso de argumentos
// let year = prompt('año actual:')
// // alert(year);

// // confirm
// let isBoss = confirm("Eres el jefe");
// // alert(isBoss);

// // // operadores matematicos
// // let num1 = 10;
// // // let num2 = 20;

// // // //suma
// // // alert( Num1 + Num2 );

// // // //resta 
// // // alert( Num1 - Num2 );

// // // // multiplicacion
// // // alert( Num1 * Num2 );

// // // // division
// // // alert( Num1 / Num2 );

// // // incremento
// // let Num3 = 2;
// // Num3++;
// // alert(Num3);

// // operadores de comparacion
// // alert( 2 > 1 );
// // alert( 2 < 1 );
// // alert( 2 == 1 );
// // alert( 2 != 1 );

// // condicionales
// // let year = prompt("ingrese el año actual:")

// // if ( year == 2024 ) {
// //     alert("Muy Bien");
// //     alert("eres great");

// // else
// let year = prompt("ingrese el año actual:")

// if ( year == 2024 ) {
//     alert("Muy Bien");
//     alert("eres great");
// } else {
//     alert("No es correcto");
// }

// condicionales encadenados 

let year = prompt("ingrese el año actual:")

if ( year == 2024 ) {
    alert("Muy Bien");
    alert("eres great");
} else if ( year >2024 ) {
    alert("Muy alto");
} else if ( year < 2024 ) {
    alert("Muy bajo");
} else {
    alert("No es correcto");
// }
// operadores logicos
// or ||
// alert( true || true ); // true
// alert( true || false); // true
// alert( false || true ); // true
// alert( false || false ); // false


let hour = 12;
let isweekend = false;

if ( hour < 9 || hour > 18 || isweekend){
     alert("la oficina esta cerrada");
//   alert("Open!");
// and &&
// alert( true && true ); // true
// alert( true && false ); // false
// alert(false && true ); // false
// alert( false && false ); // false

// solution n 
let userName = prompt('Quien eres tu?', ");
alert (userName == "Admin" ) {
    let passWord = prompt('clave?', '');
    if ( passWord == "TheMaster" ) {
        alert("Welcome");
        } else if ( passWord == ''|| password == null)
        alert( "Cancelado" )

}else{
    alert("clave incorrepta");
}else if (userName == ""|| userName == null) {
     alert("no se quien eres :b")
     
}