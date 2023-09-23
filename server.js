// publicda  yana qaytaraman bizfront entga tegishli javascriptimiz, stylellar, imagelar boradi.
// assets bn css ni kuchirib olamiz
// hamda ejs fayilni viewga olib quyamiz.

console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();
const http = require("http");

//-------------------1------------------//
 app.use(express.static("public"));
 app.use(express.json());
app.use(express.urlencoded({extended: true }));

//------------------2--------------//



//-------------------------3-------------//
app.set("views","views");
app.set("view engine","ejs");

//--------------------------4-----------------//
app.post("create-item", (req, res) => {
    console.log(req.body);// bu yerda boddyni tekshirish
    res.json({ test: "success"})  // json shaklida malumotlarni qaytarish
    // post esa uzi bn malumotni olib kelib data basega yozadi
    // postda requestni tarkibida body qismida malumotlar keladi.
    // req 3 qismdan iborat
    // 1 startin line url qismi bu yerda create item
    //2 boshida headerda 
    // 3 body qismida itemni qiymatini olishda 
    // agar req uestni butun qismini log qilsak  uni polni tarkibi chiqadi.
})

app.get("/", function (req, res) {
    res.render("harid");  // git malumotni data basedan olishda ishlatiladi
});

 const server = http.createServer(app);
 let PORT = 3000;
 server.listen(PORT, function () {
 console.log(`server is running succssfully on port: ${PORT}`)
 });

 // bizda git log --oneline ni kiritib undan keyin:
 // (git reset --hard) bu bizga oldingi yozganimizni chiqarib beradi.
 // bizda public yoki viewsda ichiga biror papkani joylashtirsak uni udalit qilihda (git clean -df)  qilsak shu folderlarbi udalit qiladi.

 // bu yerda mening projectimga jonny91 yozilgan

 // biz endi node js ni  libuv dan urganamiz.