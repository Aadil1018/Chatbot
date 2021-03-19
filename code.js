//document.write("<h1> Hello! </h1>");
alert("You can chat online!!");

dataset = {
   "Hello" : "Hey! how may i help you?",
   "Good Morning" : "Hey! how may i help you?",
   "university" : "FAST-NU Lahore",
   "GPA" : "2.8",
   "study" : "BS(CS) from FAST",
   "live" : "Lahore,Pakistan",
   "name" : "Aadil Hassan"
};

var questions = [
   "Hello",
   "Hi",
   "hello",
   "Good Morning",
   "GPA",
   "gpa",
   "study",
   "university",
   "city",
   "live",
   "hobby",
   "hobbies",
   "programming lang",
   "languages",
   "interests",
   "intrest",
   "goals",
   "name",
   "age",
   "bye",
   "favourite subject",
   "ualification",
   "ow are you",
   "ho are yo"
];

var answers = [
   "Hey! what do you want to know?",
   "Hey! what do you want to know?",
   "Hey! what do you want to know?",
   "Have a good day!",
   "2.8",
   "2.8",
   "BS(CS) from FAST-NU",
   "FAST-NU Lahore",
   "Lahore",
   "Lahore",
   "Watching Football and Cricket Match",
   "Watching Football and Cricket Match",
   "C/C++, python, JS",
   "Urdu & English",
   "AI, Software Engineering",
   "AI, Software Engineering",
   "Want to become professional Software Engineer",
   "Aadil Hassan",
   "21 years",
   "Come Again!",
   "Data Structrues",
   "BS(CS){enrolled}",
   "i am fine",
   "Aadil"
];


function _chat(){
    var usr_msg = document.getElementById("chat_msg").value;
    document.getElementById("chat_msg").value="";
    document.getElementById("chat_text").innerHTML+="Q: "+usr_msg+"<br>";
    var q = false;
    for(var i=0; i<questions.length; i++){
        var str = questions[i];
        if(usr_msg.includes(str)){
            document.getElementById("chat_text").innerHTML+="A: "+answers[i]+"<br>";
            q = true;
            break;
        }
    }
    if(q==false){
        document.getElementById("chat_text").innerHTML+="A: "+"Sorry! couldn't understand."+"<br>";
    }
   /* if (usr_msg in dataset){
        document.getElementById("chat_text").innerHTML+="A: "+dataset[usr_msg]+"<br>";
    }
    else{
        document.getElementById("chat_text").innerHTML+="A: "+"Sorry! couldn't understand."+"<br>";
    } */
}

function end_chat(){
    document.getElementById("chat_msg").value="";
    document.getElementById("chat_text").innerHTML="Ask Anything!"+"<br>";
}