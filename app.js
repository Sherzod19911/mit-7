// publicda  yana qaytaraman bizfront entga tegishli javascriptimiz, stylellar, imagelar boradi.
// assets bn css ni kuchirib olamiz
// hamda ejs fayilni viewga olib quyamiz.

console.log("Web serverni boshlash");
const express = require("express");
//const res = require("express/lib/response")
const app = express();
//const http = require("http");
const fs = require("fs");
// mongono chaqirish;
const db = require("./server").db();
// bu db orqali databasega turli xilmalumotlarni yozish uqish uchurish yoki delete qilishni.
//amalga oshiradi

let user;
fs.readFile("database/user.json","utf8", (err,data) => {
    if(err) {
        console.log("ERROR:",err);
} else {
    user = JSON.parse(data);
}
})

// MongoDB connect


//-------------------1------------------//
 app.use(express.static("public"));
 app.use(express.json());
app.use(express.urlencoded({extended: true }));

//------------------2--------------//



//-------------------------3-------------//
app.set("views","views");
app.set("view engine","ejs");

//--------------------------4-----------------//
app.post("/create-item", (req, res) => {
  //  console.log(req);                    // bu yerda boddyni tekshirish
    //res.json({ test: "success"});
});
    app.get('/author', (req, res ) => {
        res.render("author", {user: user});  //user.jsondagi malumorlarni biz tugridan tugri olib klib quya ololmaymiz,uni biz fayl system bn olib kela olomiz.
        // fayl system core modul bulgani uchun biz uni install qilish shart emas biz uni chaqiramiz
    });

    module.exports = app;
    
    
    // json shaklida malumotlarni qaytarish
    // post esa uzi bn malumotni olib kelib data basega yozadi
    // postda requestni tarkibida body qismida malumotlar keladi.
    // req 3 qismdan iborat
    // 1 startin line url qismi bu yerda create item
    //2 boshida headerda 
    // 3 body qismida itemni qiymatini olishda 
    // agar req uestni butun qismini log qilsak  uni polni tarkibi chiqadi.


app.get("/", function (req, res) {
    res.render("reja");               // git malumotni data basedan olishda ishlatiladi
});

//  const server = http.createServer(app);
//  let PORT = 4000;
//  server.listen(PORT, function () {
//  console.log(`server is running succssfully on port: ${PORT}, http://localhost:${PORT}`);
//  });

 // bizda git log --oneline ni kiritib undan keyin:
 // (git reset --hard) bu bizga oldingi yozganimizni chiqarib beradi.
 // bizda public yoki viewsda ichiga biror papkani joylashtirsak uni udalit qilihda (git clean -df)  qilsak shu folderlarbi udalit qiladi.

 // bu yerda mening projectimga jonny91 yozilgan

 // biz endi node js ni  libuv dan urganamiz.

// EJS Frameworkda portofolia publishing qilamiz
// fayl system orqali  uzimizni data basedegan folder ichidagi user.jsondi uqishga harakat qiqlayapman




//savol?:  json format bn objectni farqijson formatda keylarida qushtirnoq ham buladi,
// objectda bulmaydi
// bu yerda stringdan objectga aylantirib beradi