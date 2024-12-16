
import cors from 'cors'
import express from 'express' 
import bodyParser from 'body-parser'


let advertiser = [
    { id: "111", fName: "שמואל", lName: "כהן", email: "shmuel.kohen@gmail.com", phone1: "050-123-4567", phone2: "03-123-4567", password: "password1" },
    { id: "222", fName: "יוסף", lName: "לוי", email: "yosef.levi@yahoo.com", phone1: "050-234-5678", phone2: "03-234-5678", password: "password2" },
    { id: "333", fName: "אברהם", lName: "יצחקי", email: "avraham.yitzhaki@hotmail.com", phone1: "050-345-6789", phone2: "03-345-6789", password: "password3" },
    { id: "444", fName: "משה", lName: "רוזנברג", email: "moshe.rozenberg@gmail.com", phone1: "050-456-7890", phone2: "03-456-7890", password: "password4" },
    { id: "555", fName: "דוד", lName: "קליין", email: "david.klein@yahoo.com", phone1: "050-567-8901", phone2: "03-567-8901", password: "password5" },
    { id: "666", fName: "יהודה", lName: "גולדשטיין", email: "yehuda.goldstein@hotmail.com", phone1: "050-678-9012", phone2: "03-678-9012", password: "password6" },
    { id: "777", fName: "בנימין", lName: "פרידמן", email: "binyamin.friedman@gmail.com", phone1: "050-789-0123", phone2: "03-789-0123", password: "password7" },
    { id: "888", fName: "שמואל", lName: "הרשקוביץ", email: "shmuel.hershkowitz@yahoo.com", phone1: "050-890-1234", phone2: "03-890-1234", password: "password8" },
    { id: "999", fName: "חיים", lName: "בלוי", email: "chaim.bloi@hotmail.com", phone1: "050-901-2345", phone2: "03-901-2345", password: "password9" },
    { id: "1010", fName: "אריה", lName: "פישר", email: "arye.fisher@gmail.com", phone1: "050-012-3456", phone2: "03-012-3456", password: "password10" },
    { id: "1111", fName: "מנחם", lName: "כץ", email: "menachem.katz@yahoo.com", phone1: "050-123-4567", phone2: "03-123-4567", password: "password11" },
    { id: "1212", fName: "יעקב", lName: "שפירא", email: "yaakov.shapira@hotmail.com", phone1: "050-234-5678", phone2: "03-234-5678", password: "password12" },
    { id: "1313", fName: "שלמה", lName: "כהנמן", email: "shlomo.kahaneman@gmail.com", phone1: "050-345-6789", phone2: "03-345-6789", password: "password13" },
    { id: "1414", fName: "אליעזר", lName: "וייס", email: "eliezer.weiss@yahoo.com", phone1: "050-456-7890", phone2: "03-456-7890", password: "password14" },
    { id: "1515", fName: "רפאל", lName: "גרינברג", email: "rafael.grinberg@hotmail.com", phone1: "050-567-8901", phone2: "03-567-8901", password: "password15" },
    { id: "1616", fName: "מאיר", lName: "זלצמן", email: "meir.zaltsman@gmail.com", phone1: "050-678-9012", phone2: "03-678-9012", password: "password16" },
    { id: "1717", fName: "מיכאל", lName: "אייכלר", email: "michael.eichler@yahoo.com", phone1: "050-789-0123", phone2: "03-789-0123", password: "password17" },
    { id: "1818", fName: "שמואל", lName: "טויב", email: "shmuel.toib@hotmail.com", phone1: "050-890-1234", phone2: "03-890-1234", password: "password18" },
    { id: "1919", fName: "אורי", lName: "גולדברג", email: "uri.goldberg@gmail.com", phone1: "050-901-2345", phone2: "03-901-2345", password: "password19" },
    { id: "2020", fName: "יצחק", lName: "הלוי", email: "itzhak.halevi@yahoo.com", phone1: "050-012-3456", phone2: "03-012-3456", password: "password20" },
    { id: "2121", fName: "יהושע", lName: "וולף", email: "yehoshua.wolf@hotmail.com", phone1: "050-123-4567", phone2: "03-123-4567", password: "password21" },
    { id: "2222", fName: "ברוך", lName: "אלבוים", email: "baruch.elboim@gmail.com", phone1: "050-234-5678", phone2: "03-234-5678", password: "password22" },
    { id: "2323", fName: "מנחם", lName: "שטרן", email: "menachem.stern@yahoo.com", phone1: "050-345-6789", phone2: "03-345-6789", password: "password23" },
    { id: "2424", fName: "בנימין", lName: "רוט", email: "binyamin.rot@hotmail.com", phone1: "050-456-7890", phone2: "03-456-7890", password: "password24" },
    { id: "2525", fName: "שמעון", lName: "כהנמן", email: "shimon.kahaneman@gmail.com", phone1: "050-567-8901", phone2: "03-567-8901", password: "password25" },
    { id: "2626", fName: "דניאל", lName: "שטיין", email: "daniel.stein@yahoo.com", phone1: "050-678-9012", phone2: "03-678-9012", password: "password26" },
    { id: "2727", fName: "יוחנן", lName: "ליפשיץ", email: "yohanan.lifshitz@hotmail.com", phone1: "050-789-0123", phone2: "03-789-0123", password: "password27" },
    { id: "2828", fName: "נתן", lName: "קרליבך", email: "natan.carlebach@gmail.com", phone1: "050-890-1234", phone2: "03-890-1234", password: "password28" },
    { id: "2929", fName: "ישראל", lName: "פריד", email: "israel.fried@yahoo.com", phone1: "050-901-2345", phone2: "03-901-2345", password: "password29" },
    { id: "3030", fName: "יונתן", lName: "גרוס", email: "yonatan.gross@hotmail.com", phone1: "050-012-3456", phone2: "03-012-3456", password: "password30" }
  ];
  let apartment = [
    { name: "פנטהאוז עם נוף לים", description: "פנטהאוז מפואר עם נוף מהמם לים באשדוד.", pic: "pic8.webp", city: "Ashdod", address: "רחוב הרצל", numBeds: 4, adds: "ליד החוף", price: 100000, codeadv: "111" },
    { name: "וילה מרווחת", description: "וילה גדולה המושלמת לאירועים משפחתיים בנתניה.", pic: "pic8.webp", city: "Netania", address: "רחוב השלום", numBeds: 8, adds: "גינה", price: 1000, codeadv: "111" },
    { name: "דירה נעימה", description: "דירה נעימה וזולה בלב נתניה.", pic: "pic3.webp", city: "Netania", address: "רחוב הרצל", numBeds: 2, adds: "ליד המרכז", price: 1, codeadv: "333" },
    { name: "דירה מודרנית", description: "דירה מודרנית עם כל השירותים בנתניה.", pic: "pic3.webp", city: "Netania", address: "רחוב הרצל", numBeds: 4, adds: "קרוב לתחבורה", price: 100000, codeadv: "111" },
    { name: "מגורים אלגנטיים", description: "מגורים אלגנטיים בשכונה נכסה בירושלים.", pic: "pic4.webp", city: "Jerusalem", address: "רחוב המלך ג'ורג' ר'", numBeds: 5, adds: "אזור היסטורי", price: 1000, codeadv: "111" },
    { name: "בית משפחתי", description: "בית משפחתי מרווח בירושלים.", pic: "pic5.webp", city: "Jerusalem", address: "רחוב יפו", numBeds: 4, adds: "גני משחקים בקרבה", price: 1, codeadv: "333" },
    { name: "דירה מרכזית", description: "דירה מרכזית בלב ירושלים.", pic: "pic5.webp", city: "Jerusalem", address: "רחוב בן יהודה", numBeds: 2, adds: "קרוב לכל מקום", price: 100000, codeadv: "111" },
    { name: "קונדו יוקרתי", description: "קונדו יוקרתי במיקום מרכזי בתל אביב.", pic: "pic6.webp", city: "Tel aviv", address: "שדרות רוטשילד", numBeds: 4, adds: "ציוד יוקרתי", price: 3000, codeadv: "111" },
    { name: "בית כפרי", description: "בית כפרי עם נוף יפה בבית שמש.", pic: "pic1.webp", city: "Beit Shemesh", address: "רחוב נחל דולב", numBeds: 5, adds: "אזור שקט", price: 1, codeadv: "333" },
    { name: "מקום מבודד לחוף", description: "מקום מבודד לחוף יפה בנתניה.", pic: "pic8.webp", city: "Netania", address: "רחוב גלי ים", numBeds: 8, adds: "גישה פרטית לחוף", price: 3000, codeadv: "111" },
    { name: "סטודיו זול", description: "דירת סטודיו זולה בנתניה.", pic: "pic3.webp", city: "Netania", address: "רחוב סמילנסקי", numBeds: 2, adds: "מתאים לרווקים", price: 1, codeadv: "333" },
    { name: "לופט יוקרתי", description: "לופט יוקרתי בבניין מודרני בנתניה.", pic: "pic3.webp", city: "Netania", address: "רחוב גורדון", numBeds: 4, adds: "נוף עיר", price: 100000, codeadv: "111" },
    { name: "בית היסטורי", description: "בית היסטורי עם אופי ייחודי בירושלים.", pic: "pic4.webp", city: "Jerusalem", address: "רחוב עמק רפאים", numBeds: 5, adds: "תקופתי מבנה תרבותי", price: 1000, codeadv: "444" },
    { name: "בית מקסים", description: "בית מקסים באזור שקט של ירושלים.", pic: "pic5.webp", city: "Jerusalem", address: "רחוב אגרון", numBeds: 4, adds: "קרוב לפארקים", price: 1, codeadv: "333" },
    { name: "דירה אלגנטית", description: "דירה אלגנטית עם נוף לים בתל אביב.", pic: "pic5.webp", city: "Tel aviv", address: "רחוב הירקון", numBeds: 4, adds: "ליד החוף", price: 1000, codeadv: "111" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Beit Shemesh", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 2500, codeadv: "444" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Beit Shemesh", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 2300, codeadv: "333" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Bney Brack", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 1200, codeadv: "333" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Arad", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 1000, codeadv: "444" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Beit Shemesh", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 1300, codeadv: "333" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Bney Brack", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 1, codeadv: "444" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Arad", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 1, codeadv: "333" },
    { name: "בית משפחתי", description: "בית משפחתי נוח בבית שמש.", pic: "pic1.webp", city: "Beit Shemesh", address: "רחוב נחל סניר", numBeds: 5, adds: "קרוב לבתי ספר", price: 1, codeadv: "333" },

  ]



let app = express()

app.listen(8080, () => {
    console.log("run!!!!!!!!!!!!");
})
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
///////////////////////////////////////////-advertister-////////////////////////////////////////////////////
app.post('/register', (req, res) => {
    try {
        console.log("Request body:", req.body); // בדיקת הנתונים שמגיעים בבקשה
        const newA = req.body;
        advertiser.push(newA);
        res.send(true);  // שליחת תגובה
    } catch (error) {
        console.log("Error:", error);  // הדפסת השגיאה
        res.send(false);  // שליחת תגובה
    }
});
//התחברות
app.get('/login/:email/:password', (req, res) => {
    
    console.log("khkhkhkhkhkkh")
    try {
       
       console.log("jhjhjhjhjhjhjj")
        const { email, password } = req.params
        const login = advertiser.find(o => o.email == email && o.password == password)
       
        if(login){
            res.json(login)
        }
        else{
            res.json(null)
        }
       
    }
    catch {
        res.json(null)
    }
})

///////////////////////////////////////////-sapartment-////////////////////////////////////////////////////

//לפי עיר

app.get('/getApartmentCity/:city', (req, res) => {
 const { city } = req.params
 const ap = apartment.filter(o => o.city == city)
 res.json(ap)
})
//לפי מחיר
app.get('/getApartmentByPrice/:from/:to', (req, res) => {
 const { from,to } = req.params
 const ap = apartment.filter(o => o.price >= from && o.price <= to) 
 console.log("price")
 res.json(ap)

})
//לפי שם
app.get('/getApartmentBya/:fname', (req, res) => {
        const{fname}=req.params
        const advertiser1=advertiser.filter(x=>x.fName == fname)[0].id
        const ap=apartment.filter(x=>x.codeadv==advertiser1) 
        res.json(ap)
        console.log("name")

    })
app.get('/getAllApartment',(req,res)=>{
    console.log("aaa")
    res.json(apartment)
}
)
app.get('/a',(req,res)=>{
    console.log("aaa")
    res.json(advertiser)
}
)