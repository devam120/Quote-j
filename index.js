var quotes = [
    "બસ એટલી સમજ મને પરવરદિગાર દે,<br/>સુખ જ્યારે જ્યાં મળે, બધાના વિચાર દે.- મરીઝ",
    "ચોપાસે પીડાની સણસણતી વીંઝાતી ગોફણ છે ગોફણ છે ગોફણ છે,<br/>આયખાનું પંખી તો ડાળી પર ટહુકાતું તો પણ છે તો પણ છે તો પણ છે. -અનિલ ચાવડા",
    "હવે શાની તમન્ના છે, હવે શાનો સવાલી છે?<br/>સિકંદરના જનાઝામાંથી નીકળ્યા હાથ ખાલી છે.-મરીઝ",
    "ઘર તો હતાં અનેક ને ઝાંપા હતા અનેક,<br/>પણ આશરાના આપણે ફાંફા હતા અનેક.-અનિલ ચાવડા",
    "મનહર છબી લટકતી રહી’તી જે સ્થાન પર,<br/>ખીલી જ રહી ગઈ છે હવે એ દીવાલ પર.-મનોજ ખંડેરિયા",
    "ક્ષણોને તોડવા બેસું તો વરસોનાં વરસ લાગે,<br/>બુકાની છોડવા બેસું તો વરસોનાં વરસ લાગે.-મનોજ ખંડેરિયા",
    "ઠોકરની સાથે નામ તુજ લેવાય છે ઈશ્વર,<br/>તું કેવો અક્સ્માતથી સર્જાય છે ઈશ્વર.-મરીઝ",
    "સાંકળ જો હોય બંધ તો ખોલીને નીકળું,<br/>ખુલ્લી જગાને કેમ હું તોડીને નીકળું.-રમેશ પારેખ",
    "આ શહેર તમારા મનસૂબા ઉથલાવી દે કહેવાય નહીં,<br/>એક ચહેરા પર બીજો ચહેરો ચિપકાવી દે કહેવાય નહીં.-રમેશ પારેખ",
    "સરળતાથી જીવવાને માટે અમે,<br/>જીવનભર મરણિયા પ્રયત્નો કર્યા.-રમેશ પારેખ",
    "જૂઠા ના પડે ક્યાંક તબીબો નાં ટેરવાં,<br/>પ્રેમની નાડ છે કોઈ મામૂલી નાડ નથી.- શૂન્ય પાલનપુરી",
    "તબીબો પાસેથી હું નિકળ્યો દિલની દવા લઈ ને,<br/>જગત સામે જ ઊભું હતું દર્દો નવા લઈ ને.-બેફામ",
    "હું પણ ન કંઈ કરું અને એ પણ ન કંઈ કરે,<br/>મારા જ જેવો આળસુ પરવરદિગાર છે-મરીઝ",
    "ઋષિ , મુનિ, નબીની બીજી ફિલસુકી છે શું?<br/>જે કંઈ બનો આશા તથા ભય વિના બનો.-મરીઝ",
    "એક વેળા નહીં બચાવે તો મરી જઈશું 'મરીઝ',<br/>કંઈક વેળા મારા અલ્લાહે બચાવ્યો છે મને.-મરીઝ",
    "હવે જિંદગીભર રૂદન કરવું પડશે,<br/>કે મોકા પર આંખોમાં આંસુ ન આવ્યા.-મરીઝ",
    "આજ વરસાદ નથી એમ ના કહેવાય 'રમેશ',<br/>એમ કહીએ કે..હશે, આપણે ભીના ન થયા.-રમેશ પારેખ"

]

const twitterButton = document.getElementById("twitter");
const quoteContainer = document.getElementById("quote-container");
const whatsappButton = document.getElementById("whatsapp");
const newButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const quoteContent = document.getElementById("quote-content");
const quoteAuthor = document.getElementById("quote-author");
const download = document.getElementById("download");


function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;

}
function complete() {
    if (!loader.hidden) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
}
// trigger();
async function getQuote() {
    loading();
    var randomNumber = Math.floor(Math.random() * (quotes.length))
    var quotes_string = quotes[randomNumber];
    var [sher, shayar] = quotes_string.split("-")

    quoteContent.innerText = sher.replace("<br/>", '\n');
    quoteAuthor.innerText = shayar;
    complete();
}
// function save_img{
//     document.querySelector('button').addEventListener('click', function () {

//     }
function tweetQuote() {
    const tweetURL = `https://twitter.com/intent/tweet?text=${quoteContent.innerText}%0a  - ${quoteAuthor.innerText}`;
    window.open(tweetURL, '_blank');
}
function wappQuote() {
    const tweetURL = `https://api.whatsapp.com/send?text=${quoteContent.innerText}%0a - ${quoteAuthor.innerText}`;

    window.open(tweetURL, '_blank');
}


// download.addEventListener("click", save_img);
newButton.addEventListener("click", getQuote);
twitterButton.addEventListener("click", tweetQuote);
whatsappButton.addEventListener("click", wappQuote);
getQuote();
