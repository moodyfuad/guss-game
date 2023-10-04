
let team1 = 0; let team2= 0;
function element(id, value) { return document.getElementById(id).innerHTML = value; }
function button(id) { return document.getElementById(id); }
/////////////////
let words = "بقالة,مستشفى,حمام,زواج,رسول,ملاهي,طفل,حادث,شيشة,مجرة,سباق,تيكتوك,حمار,نجس,فأر,انسان,حمار,وحيد,سوبر ماركت,تنتعش,حمار وحشي,شيش طاووق,معسل,الله,علاقة,لابتوب,استاقرام,كوب,جك,عبقري,مخمل,رموش,عدسات,عدس,سوشي,لبان,الكودة,قرد,زمزمية,سمك,سوق الصيد,دسكو,بار,سينما,اندومي,غراب,اسد,ثعلب,العاب,مزاح,جد وجد,سنافر,سبايدرمان,كامبةالمكلا,الجامعة,جراحة,هيكل عضمي,بولا بولا,القران الكريم,شاهي كرك,مكرونة,مكيف,ديموقراطية,درجات,مفاتيح,عيون الصقر,نقطة,فريق,عمولة,بقشيش,عطر,ريموت تلفويون,دكتور اسنان,فيوري,تايتانك,".split(",");
/////////////////
let digitNo = words.length -1;
let ranIndex = []
changeWord();
/////////////
function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (ranIndex.includes(randInt)) {
       return RandomInt(min, max);
    }
    else{
        ranIndex.push(randInt);
        return randInt;
    }
  }
/////////////
function changeWord(){
    let index = RandomInt(0, digitNo);
    element("word", words[index]);
}

/////////////
function reset() {
    team1 = 0; team2 = 0;
    digitNo = words.length - 1 ;
    ranIndex = [];
    element("p1", team1);
    element("p2", team2);
    changeWord();
    timer();
}

/////////////
function inc(id) {
    if (id == 'p1') {
        team1 += 1;
        element(id,team1)
    }
    else{
        team2 +=1
        element(id,team2)
    }
    changeWord();
}

//////////////
function timer() {
   // Set the initial count value to 0
//    let index = RandomInt(0, digitNo);
//     document.getElementById("word").innerHTML = words[index];
    if (button("timer").disabled == false) {
        button("timer").disabled = true;
    }
    
    
    if (button("inc1").disabled == true) {
        button("inc1").disabled = false;
        button("inc2").disabled = true;
        alert("الفريق الاول")
    }
    else if(button("inc1").disabled == false){
        button("inc1").disabled = true;
        button("inc2").disabled = false;
        alert("الفريق الثاني")

    }
    let startTime = new Date().getTime();
    let duration = 60000; // 5 minutes in milliseconds
    let timerElement = document.getElementById("counter");
  
    let intervalId = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = duration - (now - startTime);
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    timerElement.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft < 0) {
      clearInterval(intervalId);
      alert("انتهى الوقت")
      timer();
    }
  }, 1000); // Update the timer display every second
}
/////////////