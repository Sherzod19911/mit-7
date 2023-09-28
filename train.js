// //backendlar odatda  php
// //phpda userlar zapros qilsa har bir user uchun bittadan hona ochiladi
// // masalan 10mlnta user bulsa 10 mlnta hona ocish kerak 
// //resoursesave nuqtayi nazaridan kam harajatli  emas.

// //const { setTimeout } = require("timers/promises");

// // node jsda
// //// node js single thread hisoblanadi 
// // shuning uchun hamma userlar uchun bitta hona ochadi
// //hammasini talabini qoldiradi
// // eng muhimi u uzidan keyin kichkina poollarga uzini zaprosini junatadi
// // shuni bilish kerakki kamida 4 ta pool js ishlab turadi node jsda
// // node jsni hatarli joyi shundaki  biz notugri logikani tashkillashtirib quysak,
// // bu keyin boshqa klentlarga javob bera olomaydi.
// // shuning uchun biz tugri tashkillashtirish uchun biz assyncunis va callback yaxshi bilish kerak


// console.log("Jackma maslahatlari");
// const list = [
//     "yaxshi talaba buling", //0-20
//     "togri  boshliq tanlang va kuproq hato qiling", //20-30
//     "uzingizga ishlashni boshlang",  //30-40
//     "siz kuchli bulgan narsani qiling", //40-50
//     "yoshlarga investitsiya qiling" , //50-60
//     "endi dam olong", //60
// ];
// function maslahatBering(a,callback)  {
//     if(typeof a !== "number") callback("insert a number",null); // data mavjud emas shuning uchun null qudik.
//     else if(a<=20) callback(null, list[0]);
//     else if (a>20 && a<=30) callback(null. list[1]);
//     else if(a>30 && a<=40) callback(null, list[2]);
//     else if(a>40 && a<=50) callback(null, list[3]);
//     else if(a>50 && a<=60) callback(null, list[4]);
//     else {
//         //Callback(null, list[5]);  
//          setTimeout( function () {
//              Callback(null, list[5]);
//          },5000);
//     }
// };
// console.log("passed here 0");
// maslahatBering("salom", (err,data) => {
//     if (err) console.log("error:", err);
//     console.log("javob:",data);

// });

// maslahatBering(45, (err,data) => {
//     if (err) console.log("error:", err);
//     console.log("javob:",data);
// });
// console.log("passed here 1");

// maslahatBering(10, (err,data) => {
//     if (err) console.log("error:", err);
//     console.log("javob:",data);
// });


//data mavjuda bulmasa null quyiladi
// a deganda yoshi nazarda tutiladi-



//------------------------async functions-----------------------//


//assyn functionlar
//shuni aytish kerakki biz hozirga qadar ishaygan functionlar hammasi syncular function edi.
//masalan file system read 
// yani bu immidiatey yani srazi ishga tushadi
// shuni aytish keraki async functionda core packages yani set timeoutlar ishlamaydi.
const list = [
        "yaxshi talaba buling", //0-20
       "togri  boshliq tanlang va kuproq hato qiling", //20-30
       "uzingizga ishlashni boshlang",  //30-40
       "siz kuchli bulgan narsani qiling", //40-50
       "yoshlarga investitsiya qiling" , //50-60
       "endi dam olong", //60
    ];
 async function maslahatBering(a) {
     if(typeof a !=='number') throw new Error("insert a number");
     else if(a<=20) return list[0];
    else if(a>20 && a<=30) return list[1];
    else if (a>30 && a<=40) return list[2];
    else if (a>40 &&a<=50) return list[3];
    else if (a>50 && a<=60) return list[4];
     else {
        return list[5]
//         // bu yerda promiseni kuchli tomoni  settimeout ni ishlaydi.
//         // return new Promise((resolve, reject)=> {
//         //     setTimeout(()=> {
//         //         resolve(list[5]);
//         //     },5000)
//         // });
   }
 };
// // bu yerda async lar functionda  call qilishda (then) va ( catch) qismdan foydalndik
// // then data bn ishlaydi catch esa errorlar bn ishlaydi

//----------------------than and catch-------------------------//
 console.log("passed here 0");
 maslahatBering(15)
 .then((data)=> {
     console.log("javob:",data)
 })
 .catch((err) =>{
     console.log("error:",err);
 });
 console.log("passed hre 1");
 
 // bu yerda birinchi sync function ishlab bulgandan sung esync ishlaydi.

// // shuningdek biz async functionlarda await ni ham ishlatamiz call qilsihda 
// // await qilishdan asosiy maqsad biz bazida qayta qayta savol surashda bu tezkor yechim hissoblanadi.

//---------------------await-------------------//
//console.log("await:",await)
async function run() {
let javob = await maslahatBering(20);
console.log(javob);
javob= await maslahatBering(32);
console.log(javob);
javob= await maslahatBering(45);
console.log(javob);
javob=await maslahatBering(55);
console.log(javob);
 };
 run();

//  async function run() {
//     let javob = await maslahatBering(18);
//     console.log(javob);
//     javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(38);
//     console.log(javob);
//     javob = await maslahatBerin(55);
//     console.log(javob);
// };
// run();
// // await nimaga kutib turadi chunki ikkinchi operatsiyani qiymati birinchi operatsiyaga ham bogliq bulishi mumkin.
// // bu yerda async ni call qildik judayam sodda va tushinarli bunda biz await dan foydalandik.
// // awaitni eng ustunligi shundagi u bitta natija chiqmagunga qadar ikkinchi jarayonga utmaydi kutradi.
// // qulay tarafi u ketma ket amalga oshadi


// // qachonki biz promise function bn settime out da ishlatsa buladi.

