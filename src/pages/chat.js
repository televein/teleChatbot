import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./stylechat.css";
import ChatbotMessage from "./chatbot";
import send from "./images/send-message.png";
import televein from "./images/televein.png";
import Contact from "./images/chatbot-contact.png";

const Chatbot = () => {
  const navigate = useNavigate();
  const [conversation, setConversation] = useState([]);
  // const [botResponse, setBotResponse] = useState('');
  const storedValue = localStorage.getItem('storageName');

  var chat;
  const date = new Date();
  let currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  let link,len;
  // function evalExpression(expression) {
  //   // Use parseFloat to safely evaluate the expression
  //   return parseFloat(eval(expression));
  // }
  
  function discription(){
    return <ChatbotMessage bot_message="Type Hi, to Start conversation..."/>
  }

function display(text) {
if(text.indexOf("hi" ) !== -1 ||text.indexOf("hello") !== -1 ||text.indexOf("hai") !== -1 ||text.indexOf("hey") !== -1)
{
 //  btn("Hello! How can I assist you today?" ,h,i(   ;
}
else if(text.indexOf("televein") !== -1 || text.indexOf("tele vein") !== -1){
  len =1;
  chat = ["Tele Vein is a technology oriented Company."   ,
          "For more about televein.I provide thier //link below." ]  ;
//  b="<a href='#'id='li' >Mail</a>";
  //link(b   ;
}
else if(text.indexOf("your" ) !== -1 && text.indexOf("name") !== -1 ){
  chat = "My name is Tele Vein"   ;
}
// else if(text.indexOf("img"  ) !== -1 ||text.indexOf("name"   ) !== -1 ){
//    image("/images/qrcode.png" )  ;
// }
// else if(text.indexOf("team"  ) !== -1 ||(text.indexOf("done by"  ) !== -1 &&(text.indexOf("televein"  ) !== -1 ||text.indexOf("tele vein"  ) !== -1 ||text.indexOf("chatbot"  ) !== -1 ||text.indexOf("chat bot"    ) !== -1 ){
//    image("images/bharathan.jpg"   ;
//    image("images/dinesh.jpg"   ;
//    image("images/gokul.jpg"   ;
//    image("images/bharath.jpg"   ;
//    chat = "Bharathan R"   ;
//    chat = "Dinesh S"   ;
//    chat = "Gokula Kannan V"   ;
//    chat = "BharathKumar D"   ;
// }
else if(text.indexOf("pdf"   ) !== -1 ){
  link ="/chatbot/pdf/TELE VEIN licence.pdf"  ;
  chat = "Tele Vein licence"   ;
}

else if(text.indexOf("doubt"  ) !== -1 ||text.indexOf("q/a"   ) !== -1 ){
  len=1;
  chat = ["Tele Vein is a technology oriented Company."   
  ,"For more about televein.I provide thier //link below." ]  ;
  // a = "<a href='mail/index.html'>Mail</a>";
  //link(a   ;
}

else if((text.indexOf("12"  ) !== -1 ||text.indexOf("Twelfth")   !== -1) && text.indexOf("group") !== -1) {
  
  len=1;
  chat = ["Computer Science"   
  ,"Biology"   
  ,"Arts"  ] 
}
else if(text.indexOf("jee"   ) !== -1 ){
 if(text.indexOf("jee" ) !== -1 &&(text.indexOf("stands"  ) !== -1 ||text.indexOf("expand"  ) !== -1 ||text.indexOf("full form" ) !== -1 ) ){
    chat = "JEE stands for Joint Entrance Examination (JEE "   
 }
 else if(text.indexOf("jee" ) !== -1 &&(text.indexOf("apply"  ) !== -1 ||text.indexOf("application"  ) !== -1 ||text.indexOf("register")  !== -1) &&(text.indexOf("when"  ) !== -1 ||text.indexOf("date") !== -1 ) ){
  len =1;  
  chat = ["session 1"   
    ,"Registration Starts on 2nd week of December 2023"   
    ,"Registration Ends on 1st week of January 2024"   
    ,"session 2"   
    ,"Registration Starts on 2nd week of February 2024"   
    ,"Registration Ends on 2nd week of March 2024"   
    ,"DISCLAIMER:There may be change will occur , so please visit the official website for updates :"]   
  //  a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
    //link(a)   
 }
 else if(text.indexOf("jee" ) !== -1 &&(text.indexOf("when"  ) !== -1 ||text.indexOf("date"   ) !== -1 ||text.indexOf("exam") !== -1 ) ){
  len=1;  
  chat = ["Session 1 - January 24 to February 1, 2024 \nSession 2 - April 1 to April 15, 2024"   
    ,"DISCLAIMER:There may be change will occur , so please visit the official website for updates :"]  
  //  a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
 }
 else if(text.indexOf("jee" ) !== -1 &&(text.indexOf("fee"  ) !== -1 ||text.indexOf("cost") !== -1 ) ){
    chat = ["The Appilcation fee for JEE exam is divided into different category"   
    ,"For Indian Nationals\n\n1.Female Candidates (all categories  -₹ 1450.\n2.SC, ST, and PwD Candidates -₹ 1450.\n3.All Other Candidates -₹ 2900."   
    ,"For OCI/PIO card holders\n\n1.Female Candidates (GEN and GEN-PwD 	-₹ 1450.\n2.OPEN (GEN-PwD  -₹ 1450.\n3.OPEN (GEN  -₹ 2900."   
    ,"For Foreign Nationals\n\n1.Candidates Residing in SAARC Countries -$90.\n2.Candidates Residing in Non-SAARC Countries -$180"   
    ,"DISCLAIMER:There may be change will occur , so please visit the official website for updates :"]   
  //  a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
 }
 else if(text.indexOf("jee" ) !== -1 &&(text.indexOf("conduct"  ) !== -1 ||text.indexOf("organize") !== -1 ) ){
  len=1;  
  chat = ["JEE is conducted by National Testing Agency(NTA) "   
    ,"Visit their Official web site for further queries :"]  
    // a = "<a href='https://jeemain.nta.nic.in'>nta.in</a>" 
 }
 else if(text.indexOf("jee" ) !== -1 &&text.indexOf("subject"   ) !== -1 ){
  len=1;  
  chat = ["The subjects that are required for JEE exam"   
    ,"Physics"   
    ,"Chemistry"   
    ,"Mathematics"   
    ,"Language" ]  
 }
 else if(text.indexOf("jee" ) !== -1 &&(text.indexOf("application"  ) !== -1 ||text.indexOf("apply"  ) !== -1 ||text.indexOf("registration") !== -1 ) ){
    chat = "Candidates will be able to access the jeemain.nta.nic.in 2024 application form in online mode. Below are the steps to fill the application form of JEE Main.\n\n1.Visit the JEE Main official website - jeemain.nta.nic.in .\n2.Complete registration using details name, mobile number, and email address.\n3.Fill detailed in registration form with personal and educational details.\n4.Uploading scanned images of photograph and signature.\n5.Payment of JEE Main application fees.\n6.Download the confirmation page for future reference."   
 }
 else if(text.indexOf("jee") !== -1 ){
    chat = "JEE stands for Joint Entrance Exam and it is a national entrance exam held for candidates seeking to pursue an engineering course from various colleges across the country."   
 }
}
else if(text.indexOf("neet") !== -1 ){
 if(text.indexOf("neet" ) !== -1 &&(text.indexOf("stands"  ) !== -1 ||text.indexOf("expand"  ) !== -1 ||text.indexOf("full form") !== -1 )){
    chat = "NEET stands for National Eligibility cum Entrance Test(NEET "   
 }
 else if(text.indexOf("neet" ) !== -1 &&text.indexOf("subject"   ) !== -1 ){
  len=1;  
  chat = ["The subjects that are required for NEET exam"   
    ,"Physics"   
    ,"Chemistry"   
    ,"Biology/BioTechnology"]  
 }
 else if(text.indexOf("neet" ) !== -1 &&(text.indexOf("course"  ) !== -1 ||text.indexOf("degree" ) !== -1 ) ){
  len=1;  
  chat = ["MBBS"   
    ,"BDS"   
    ,"BAMS"   
    ,"BUMS"   
    ,"BHMS"   
    ,"BSMS"   
    ,"BVSc"   
    ,"Visit their Official web site for further queries :"]  
  //  a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
 }
 else if(text.indexOf("neet" ) !== -1 &&(text.indexOf("conduct"  ) !== -1 ||text.indexOf("organize") !== -1 ) ){
  len=1;  
  chat = ["NEET is conducted by National Testing Agency(NTA) "   
    ,"Visit their Official web site for further queries :" ] 
  //  a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
 }
 else if(text.indexOf("neet" ) !== -1 &&(text.indexOf("when"  ) !== -1 ||text.indexOf("date"   ) !== -1 ||text.indexOf("exam"   ) !== -1 ) ){
  len=1;  
  chat = ["The National Testing Agency (NTA  is going to conduct the NEET-UG examination on May 5, 2024, all over India.\nNOTE :Exam date may change visit the official web site of NTA for further information.\nThe //link for the web site is given below->"   
    ,"DISCLAIMER:There may be change will occur , so please visit the official website for updates :" ]  
  //  a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
    //link(a   
 }
 else if(text.indexOf("neet" ) !== -1 &&(text.indexOf("apply"  ) !== -1 ||text.indexOf("registration"  ) !== -1 ||text.indexOf("application" )  !== -1) &&(text.indexOf("when"  ) !== -1 ||text.indexOf("date") !== -1 ) ){
    chat = ["NEET 2024 is held on may 5"   
    ,"The Application submission starts on March 2024"   
    ,"The Application submission ends on April 2024"  
    ,"DISCLAIMER:There may be change will occur , so please visit the official website for updates :"]  
  //  a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
 }
 else if(text.indexOf("neet" ) !== -1 &&(text.indexOf("fee"  ) !== -1 ||text.indexOf("cost"    ) !== -1 ) ){
    chat = "The application fee of NEET exam is divided into three category\n\n1.General category candidates will be charged an examination fee of Rs. 1700/-\n2.General-EWS and OBC-NCL candidates are required to pay Rs. 1600/-.\n3.For SC, ST, PH, and Third gender candidates, the examination fee is only Rs. 1000/-."   
   // a = "<a href='https://neet.nta.nic.in'>nta.in</a>"
   //  chat = "DISCLAIMER:There may be change will occur , so please visit the official website for updates :"+a   
 }
 else if(text.indexOf("neet" ) !== -1 &&(text.indexOf("duration"  ) !== -1 ||text.indexOf("time" )  !== -1) ){
    chat = "The Exam duration of NEET is '3 Hours 20 Minutes' in offline mode"   
 }
 else if(text.indexOf( "need materials") !== -1 ){
  len=1;
   chat = ["If,you want more information about NEET you cantact me."
   ,"I provide the //link below. " ] 
  //  a ="a href='/mail/index.html'>Contact</a>";
   //link(a   ;
  }
  else{
     chat = "NEET (UG  is one of the toughest medical entrance examinations conducted in India. National Eligibility cum Entrance Test (NEET is conducted by the National Testing Agency (NTA  for admission to undergraduate (MBBS/BDS/Ayush Courses  every year. As per Government of India, it is a mandated requirement to qualify NEET Exam to study medical courses in India and abroad. The single national level undergraduate medical entrance exam, NEET held every year for admission to 542 medical, 313 dental, 914 AYUSH, and 47 BVSc and AH colleges in India."   
  }
}
else if((text.indexOf("is"  ) !== -1 ||text.indexOf("are")  !== -1) &&text.indexOf("you" ) !== -1 &&text.indexOf("human") !== -1 ){
  chat = "NO,I'm just a programmed chatbot"   
}
else if(text.indexOf("who" ) !== -1 &&text.indexOf("made" ) !== -1 &&text.indexOf("you"   ) !== -1 ){
  chat = "I was made by a software and service providing company called 'Tele Vein'"   
}
else if(text.indexOf("language" ) !== -1 &&(text.indexOf("speak"  ) !== -1 ||text.indexOf("spoke"  ) !== -1 ||text.indexOf("spoken")  !== -1) &&text.indexOf("you"   ) !== -1 ){
  chat = "I can't speak any languages.But,I can write programmed English words."   
}
else if(text.indexOf("language" ) !== -1 &&(text.indexOf("write"  ) !== -1 ||text.indexOf("wrote"  ) !== -1 ||text.indexOf("written")  !== -1) &&text.indexOf("you"   ) !== -1 ){
  chat = "I can write programmed English words."   
}
else if(text.indexOf("course"  ) !== -1 ||text.indexOf("degree"  ) !== -1 ||text.indexOf("courses"  ) !== -1 ||text.indexOf("degrees"   ) !== -1 ){
  len=1;
  chat=["Information Technology"   
  ,"Computer Science Engineering"   
  ,"Civil Engineering"   
  ,"Mechanical Engineering"   
  ,"Artificial Intelligence and Data Science"   
  ,"Artificial Intelligence and Machine Learning"   
  ,"Electrical and Electronical Engineering"   
  ,"Electronics and Communication Engineering"   
  ,"Bio-Medical Engineering"   
  ,"Bio-Technology"   
  ,"Computer Science and Business Systems"   
  ,"Chemical Engineering"   
  ,"Computer and Communication Engineering" 
  ,"Science and Humanities"  ]
}
else if(text.indexOf("why are you here"  ) !== -1 ||text.indexOf("what can you do"  ) !== -1 ||text.indexOf("how did you use for me"  ) !== -1 ||text.indexOf("use of you"  ) !== -1 ||text.indexOf("use of televvein chatbot"   ) !== -1 ){
 let t=Math.round(Math.random()*2)
 if(t===0  ){
    chat = "I'm here to assist you with any questions or concerns you may have. 📩"   ;
 }
 else {
    chat = "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡"   ;
 }
}
else if(text === "it" || text.indexOf("information techonolgy"   ) !== -1 ){

 if((text.indexOf("scope" ) !== -1 ||text.indexOf("value"    ) !== -1 ) ){
  chat =[ "Software development"   
  ,"Networking"   
  ,"DataBase Management"   
  ,"CyberSecurity"   
  ,"Cloud Computing"   
  ,"IT services and Support"   
  ,"Artificial Intelligence"   
  ,"Virtualization"   
  ,"Mobile Computing" 
  ,"E-Commerce"  
  ,"Digital Education"   
  ,"Heathcare IT"  
  ,"Research and Development"   
  ,"Telecommunication" ]
}
else {
  chat = "Information technology (IT  refers to the use of computers, software, hardware, networks, and other technologies to store, process, transmit, and manage data and information. IT plays a crucial role in modern society and businesses, enabling them to streamline operations, improve efficiency, and enhance communication and decision-making."   
}
}
else if(text === "cse" ||text.indexOf("computer science engineering"   ) !== -1 ){

 if(text.indexOf("scope"  ) !== -1 ||text.indexOf("value"    ) !== -1 ){
  len=1;
  chat = ["Software Development"   
  ,"Data Science and Big Data"   
  ,"Artificial Intelligence (AI  and Machine Learning (ML "   
  ,"Cybersecurity"   
  ,"Cloud Computing"   
  ,"Mobile App Development"   
  ,"Web Development"   
  ,"Database Management"   
  ,"Computer Hardware"   
  ,"Gaming Industry" 
  ,"Robotics and Automation"   
  ,"Blockchain Technology"  
  ,"Academia and Research"   
  ,"Startups and Entrepreneurship"  
  ,"Consulting" ];
}
else {
  chat = "Computer Science, is a branch of engineering that focuses on the design, development, and application of computer systems and software. It encompasses a wide range of topics related to computing and technology, including programming, algorithms, data structures, computer hardware, networking, databases, artificial intelligence, machine learning, and more."   
}}
else if(text === "eee" ||text.indexOf("electrical and electronic engineering"   ) !== -1 ){

 if(text.indexOf("scope"  ) !== -1 ||text.indexOf("value"    ) !== -1 ){
  len =1;
  chat = ["Power Generation and Distribution"   
  ,"Renewable Energy"   
  ,"Electrical Machines and Motors"   
  ,"Electronics and Circuit Design"   
  ,"Control Systems"   
  ,"Telecommunications"   
  ,"Automation and Robotics"   
  ,"Embedded Systems"   
  ,"Power Electronics"
  ,"Research and Development"   
  ,"Consulting and Project Management" 
  ,"Aerospace and Defense"  
  ,"Healthcare" 
  ,"Academia and Education" ]
}
else {
  chat = "EEE stands for Electrical and Electronic Engineering. It is a branch of engineering that focuses on the study of electrical systems, electronics, and electromagnetism. Electrical and Electronic Engineers work with various electrical and electronic devices, systems, and technologies."   
}}
else if(text.indexOf( "civil"  ) !== -1 ||text.indexOf("civil engineering"   ) !== -1 ){
 if(text.indexOf("scope"  ) !== -1 ||text.indexOf("value"    ) !== -1 ){
  len=1;
  chat =[ "Structural Engineering"   
  ,"Geotechnical Engineering"   
  ,"Transportation Engineering"   
  ,"Environmental Engineering"   
  ,"Water Resources Engineering"   
  ,"Construction Management"   
  ,"Urban and Regional Planning"   
  ,"Coastal and Ocean Engineering"   
  ,"Materials Engineering"  
  ,"Infrastructure Rehabilitation"  ] 
}
else{
  chat = "Civil Engineering is a branch of engineering that deals with the design, construction, maintenance, and infrastructure development of various physical structures and systems. Civil engineers play a crucial role in shaping the world's physical environment, from bridges and buildings to transportation systems and water supply networks."   
}
}
else if(text.indexOf( "chemical Engineering"  ) !== -1 ||text.indexOf( "chemical"   ) !== -1 ){
 if(text.indexOf("scope"  ) !== -1 ||text.indexOf("value"    ) !== -1 ){
  len=1;
  chat = ["Petroleum and Petrochemical Engineering"   
  ,"Pharmaceutical Engineering"   
  ,"Bioprocess Engineering"   
  ,"Environmental Engineering"   
  ,"Materials Engineering" ]
}
else {
  chat = "Chemical engineering is a branch of engineering that combines principles of chemistry, physics, mathematics, biology, and economics to efficiently use, produce, design, transport, and transform energy and materials. Chemical engineers work in various industries to design and optimize processes for manufacturing chemicals, materials, pharmaceuticals, and a wide range of products"   
}}
else if(text.indexOf( "ece"  ) !== -1 ||text.indexOf("electrical and communication engineering"   ) !== -1 ){
 if(text.indexOf("scope"  ) !== -1 ||text.indexOf("value"    ) !== -1 ){
  len=1;
   chat = ["Integrated Circuit Design and Microelectronics"   
   ,"Communications and Networking"   
   ,"Embedded Systems and IoT"   
   ,"Signal Processing and Image/Video Processing"   
   ,"Control Systems and Automation"];  
}
else{
  chat = "ECE can stand for different things depending on the context. In the context of education and engineering, ECE commonly refers to 'Electrical and Computer Engineering.' This is a branch of engineering that combines aspects of electrical engineering and computer science."   
}}
else if(text.indexOf("ai"  ) !== -1 ||text.indexOf("artificial intelligence"   ) !== -1 ){
if(text.indexOf("scope"  ) !== -1 ||text.indexOf("value"    ) !== -1 ){
  len =1;
  chat = ["Automation and Robotics"   
  ,"Machine Learning and Predictive Analytics"   
  ,"Natural Language Processing (NLP "   
  ,"Computer Vision"   
  ,"Healthcare"   
  ,"Finance"  
  ,"Autonomous Vehicles"   
  ,"Entertainment"  
  ,"E-commerce"  
  ,"Cybersecurity"  
  ,"Education"  
  ,"Environmental Monitoring"   
  ,"Smart Cities"];
}
else  {
  chat = "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think, learn, and problem-solve like a human. It encompasses a wide range of technologies and techniques that enable computers and machines to perform tasks that typically require human intelligence. These tasks include understanding natural language, recognizing patterns, making decisions, and adapting to new information."   
}
}
else if(text.indexOf("book") !== -1){
if(text.indexOf("12" ) !== -1 &&text.indexOf("tamil" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
  link ="https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing";   ;
  chat = "12th Tamil Book"   
}
else if(text.indexOf("12" ) !== -1 &&text.indexOf("english" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
  link ="https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S"   ;
  chat = "12th English Book"   
}
else if((text.indexOf("12" ) !== -1 && text.indexOf("physics 1" ) !== -1 && text.indexOf("book") !== -1 )||(text.indexOf("12" ) !== -1 &&text.indexOf("physics1" ) !== -1 &&text.indexOf("book") !== -1 ) ){
  link ="https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing";   ;
  chat = "12th Physics Volume 1 Book"   
}
else if(((text.indexOf("12" ) !== -1 && text.indexOf("physics 2" ) !== -1 && text.indexOf("book") !== -1 ) ||(text.indexOf("12" ) !== -1 &&text.indexOf("physics2") !== -1 && text.indexOf("book") !== -1 )) ){
  link ="https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing";   
  chat = "12th Physics Volume 2 Book" ;
}
else if(text.indexOf("12") !== -1 && text.indexOf("physics") !== -1 && text.indexOf("book") !== -1 ){
  len=1;
  chat = ["12th Physics Volume 1 Book",   
  "12th Physics Volume 2 Book"]
  link =["https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing"
  ,"https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing"]
}
else if((text.indexOf("12" ) !== -1 &&text.indexOf("chemistry 1" ) !== -1) ||(text.indexOf("12" ) !== -1 &&text.indexOf("chemistry1")  !== -1 &&text.indexOf("book"    ) !== -1 )){
  link ="https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing"; ;
  chat = "12th Chemistry Volume 1 Book"   
}
else if((text.indexOf("12" ) !== -1 &&text.indexOf("chemistry 2" ) !== -1 &&text.indexOf("book")  !== -1) ||(text.indexOf("12" ) !== -1 &&text.indexOf("chemistry2" ) !== -1 &&text.indexOf("2" ) !== -1  &&text.indexOf("book"    ) !== -1) ){
  link ="https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing";;
  chat = "12th Chemistry Volume 2 Book"   
}
else if(text.indexOf("12" ) !== -1 &&text.indexOf("chemistry" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
  len=1;
  link =["https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing"
  ,"https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing"]
  chat = ["12th Chemistry Volume 1 Book"   
  ,"12th Chemistry Volume 2 Book"]
}
else if((text.indexOf("12" ) !== -1 &&(text.indexOf("mathematics 1"  ) !== -1 ||text.indexOf("maths 1"  ) !== -1 ||text.indexOf("mat 1"  ) !== -1 )&&text.indexOf("book" )  !== -1) ||(text.indexOf("12" ) !== -1 &&(text.indexOf("mathematics1"  ) !== -1 ||text.indexOf("maths1"  ) !== -1 || text.indexOf("mat1")  !== -1) &&text.indexOf("book")  !== -1) ){
  link ="https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing";;
  chat = "12th Mathematics Volume 1 Book"   
}
else if((text.indexOf("12" ) !== -1 &&(text.indexOf("mathematics 2"  ) !== -1 ||text.indexOf("maths 2"  ) !== -1 ||text.indexOf("mat 2"  ) !== -1 )&&text.indexOf("book" )  !== -1) ||(text.indexOf("12" ) !== -1 &&(text.indexOf("mathematics2"  ) !== -1 ||text.indexOf("maths2"  ) !== -1 ||text.indexOf("mat2")  !== -1) &&text.indexOf("book")  !== -1)){
  link ="https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing"; ;
  chat = "12th Mathematics Volume 2 Book"   
}
else if(text.indexOf("12" ) !== -1 &&text.indexOf("mat" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
  len=1;
  link =["https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing"
  ,"https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing"]
  chat = ["12th Mathematics Volume 1 Book"   
  ,"12th Mathematics Volume 2 Book"]   
}
else if((text.indexOf("12" ) !== -1 &&text.indexOf("cs" ) !== -1 &&text.indexOf("book"  )  !== -1) ||(text.indexOf("12" ) !== -1 &&text.indexOf("computer" ) !== -1 &&text.indexOf("science" ) !== -1 &&text.indexOf("book") !== -1 ) ){   
   link ="https://drive.google.com/file/d/1TpdFoVkkcFFEP15CrAPWa6XOftWWIaoC/view?usp=sharing";  ;
  chat = "12th Computer Science Book"   
}
// else if(text.indexOf("12" ) !== -1 &&text.indexOf("physics" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
//    link ="https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing"   ;
//    chat = "12th Physics Volume 2 Book"   
// }
else if(text.indexOf("12" ) !== -1 &&text.indexOf("botany" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
  link ="https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing";  ;
  chat = "12th Botany Book"   
}
else if(text.indexOf("12" ) !== -1 &&text.indexOf("zoology" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
  link ="https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing"; ;
  chat = "12th Zoology Book"   
}
else if(text.indexOf("12" ) !== -1 &&text.indexOf("biology" ) !== -1 &&text.indexOf("book"   ) !== -1 ){
  len=1;
  link =["https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing"
  ,"https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing"]
  chat = ["12th Botany Book"   
  ,"12th Zoology Book" ]  
}
else if(text.indexOf( "12" ) !== -1 && text.indexOf( "book") !== -1 ){
  len=1;
  link =["https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing",
  "https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S"   ,
  "https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing",
  "https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing",
  "https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing",
  "https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing",
  "https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing",
  "https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing",
  "https://drive.google.com/file/d/1TpdFoVkkcFFEP15CrAPWa6XOftWWIaoC/view?usp=sharing",
  "https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing",
  "https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing"];
  chat = ["12th Tamil Book",
  "12th English Book" ,
  "12th Mathematics Volume 1 Book",
  "12th Mathematics Volume 2 Book",
  "12th Chemistry Volume 1 Book",
  "12th Chemistry Volume 2 Book",
  "12th Physics Volume 1 Book",
  "12th Physics Volume 2 Book",
  "12th Computer Science Book",
  "12th Botany Book",
  "12th Zoology Book" ]; 
}
}
else if(text.indexOf("12" ) !== -1 &&(text.indexOf("question"  ) !== -1 ||text.indexOf("exam"  ) !== -1 ||text.indexOf("answer"   )  !== -1 )){
 if(text.indexOf("tamil") !== -1 ){
    len=1;
    console.log(len);
    link =["https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk","https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing"];
    chat =["12th public Tamil Question 2023","12th public Tamil Answer 2023"]  
 }
 else if(text.indexOf("english"   ) !== -1 ){
  len=1;
    link =["https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk"   
    ,"https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing"] 
    chat = ["12th public English Question 2023",
    "12th public English Answer 2023"]
 }
 else if(text.indexOf("maths"  ) !== -1 ||text.indexOf("mathematics"   ) !== -1 ){
  len=1;
    link =["https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk"  
    ,"https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing"]
    chat = ["12th public Maths Question 2023",   
    "12th public Maths Answer 2023"]   
 }
 else if(text.indexOf("physics"   ) !== -1 ){
  len=1;
    link =["https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk" 
    ,"https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing"]
    chat = ["12th public Physics Question 2023"   
    ,"12th public Physics Answer 2023"]
 }
 else if(text.indexOf("chemistry"   ) !== -1 ){
  len=1;
    link =["https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk"   
    ,"https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing"]
    chat = ["12th public Chemistry Question 2023"
    ,"12th public Chemistry Answer 2023"] 
 }
 else if(text.indexOf("biology"   ) !== -1 ){
  len=1
   chat = ["12th public Botony Question 2023"   
   ,"12th public Botony Answer 2023"   
   ,"12th public Zoology Question 2023"   
   ,"12th public Zoology Answer 2023"]   
    link =["https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk" 
    ,"https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing"
    ,"https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk"   
    ,"https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing"]   
 }
 else if(text.indexOf("botony"   ) !== -1 ){
  len=1
    link =["https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing"]   
    chat = ["12th public Botony Question 2023"   
    ,"12th public Botony Answer 2023"]   
 }
 else if(text.indexOf("zoology"   ) !== -1 ){
  len=1;
    link =["https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk"  
    ,"https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing"]
    chat = ["12th public Zoology Question 2023"   
    ,"12th public Zoology Answer 2023"]
 }
 else if(text.indexOf("cs"  ) !== -1 ||text.indexOf("computer science"   ) !== -1 ){
  len=1;
    link =["https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk"  
    ,"https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing"]
    chat = ["12th public Computer Science Question 2023"   
    ,"12th public Computer Science Answer 2023"]   
 }
 else if(text.indexOf( "12" ) !== -1 && text.indexOf( "question") !== -1 ){
  len=1;
   chat = ["12th public Tamil Question 2023"   
   ,"12th public Tamil Answer 2023"   
   ,"12th public English Question 2023"   
   ,"12th public English Answer 2023"   
   ,"12th public Maths Question 2023"  
   ,"12th public Maths Answer 2023"  
   ,"12th public Physics Question 2023"  
   ,"12th public Physics Answer 2023"  
   ,"12th public Chemistry Question 2023"   
   ,"12th public Chemistry Answer 2023"  
   ,"12th public Botony Question 2023"  
   ,"12th public Botony Answer 2023"  
   ,"12th public Zoology Question 2023" 
   ,"12th public Zoology Answer 2023"  
   ,"12th public Computer Science Question 2023"  
   ,"12th public Computer Science Answer 2023"]  
    link =["https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk"   
    ,"https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing"   
    ,"https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk"   
    ,"https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing"   
    ,"https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk"   
    ,"https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing"  
    ,"https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk"   
    ,"https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing"  
    ,"https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk"  
    ,"https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing"  
    ,"https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk"  
    ,"https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing" 
    ,"https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk" 
    ,"https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing"  
    ,"https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk"  
    ,"https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing"]  
 }
}
else  if((text.indexOf("12"  ) !== -1 ||text.indexOf("public")  !== -1) && ((text.indexOf("prepare") !== -1 ||text.indexOf("preparation")  !== -1 )||(text.indexOf("good"  ) !== -1 ||text.indexOf("more" ) !== -1)) &&text.indexOf("marks") !== -1){
 if(text.indexOf("tamil"   ) !== -1 ){
   chat = ["படிக்க திட்டம் உருவாக்குக:\n1.அனைத்து பாடங்களும் மற்றும் பாடகங்களை சேர்ந்த விரிவான படிக்க திட்டம் உருவாக்குக.\n2.நீங்கள் கடினமாகக் கணிக்கும் பாடங்களுக்கு அதிக நேரம் ஒதுக்கவும்.\n3.சேர்ந்த நேரங்களில் முகநூல் சூழ்நிலைகளை தடுக்க உத்தமமான நேர ஒதுக்கவும்."   
   ,"பாடங்களை முன்னின்னும் பதிவிடுக:\n1.தேர்வுகளில் அதிக புரியும் பாடங்களை அதிக பதிவிடுக.\n2.நீங்கள் விசித்திரமாக கணிக்கும் பாடங்களுக்கு அதிக படிக்க நேரம் அளிக்கவும்."   
   ,"குறிப்பாக்குகள் உள்ளன:\n1.ஒவ்வொரு படிக்க அமைக்கும் விரிவான, அதிசாரிய குறிப்புகளை அமைக்கும். உ஦ாகமாக, ஒரு குறிப்பு அல்லது பழைய வருடங்களின் கேள்விகளை பரிசோதிக்க."   
   ,"பாடப் படிப்பை மொழியாக்குக:\n1.புரியும் அவதாரம் அமைத்து அதை சுட்டிக்காட்டுவதைக் குறைக்க அல்லது சக மாணவர்களுடன் விவாதிக்கும் வழிகளை பயன்படுத்த முயற்சிக்கவும்."   
   ,"தானியங்கி கழிக்கவும்:\n1.செயற்கை கற்பிக்கும் முறைகள் புரிந்து படியை அமைத்து உள்ளிட்டு அறிந்து கொள்ள உத்தமமாகும்.\n2.கடைசியில் வருவாய் சேர்ந்த பரீட்சை கேள்விப் பேப்பர்கள் மற்றும் மாதிரி பேப்பர்களை பயிற்சிக்க தயாரிக்கவும்."   
   ,"தவறு பண்ணாதிருக்க:\n1.படித்து அளிக்கும் நேரங்களை அறிந்து கொள்ளுங்கள் மற்றும் படிக்க பயன்படுத்த வாய்ப்புகளை குறைக்க உத்தமமாக நீங்கள் செய்ய முயற்சிக்கவும்.\n2.படிக்குழுக்களைத் தேர்வுச் செய்ய பரிசோதித்து அந்தக் கேள்விகளை வெளியிட விடாமல் செய்யுங்கள்."   
   ,"நித்தியமாக உடைய:\n1.படிக்க தேர்வுகளுக்கு சரியாக உடைய, பலான உணவுகளை சேவிக்க உடையதாக்குங்கள்.\n2.உடையதாக்க மற்றும் சுவிசேஷமாக விரிக்கவும், அமைந்திருக்க உத்தமமாக குடிகாப்பது படிக்க மற்றும் அறிவு குதிக்க உத்தமமாக இருக்கும்."   
   ,"தொழில்நுட்பம்:\n1.உற்சாகமாக போக்குக்கள், பணியாக்குக்கள், மற்றும் உணவை குறிக்க உத்தமமாக அளிக்குக உத்தமமான முயற்சியைச் செய்யுங்கள்."   
   ,"அன்பை கேட்க போக:\n1.ஒரு குறிப்பை பார்த்து சிரிக்கும்போது, உங்கள் ஆசிரியர்கள் அல்லது வகுப்புப் பக்கங்கள் உங்கள் உத்தமமான அலைக்கு உத்தமமாக உத்தமமாக உத்தமமாக அனுப்புகின்றனர்.\n2.படிக்க குழுக்களுக்கு சேர்ந்து விவாதிக்க மற்றும் சந்தேகங்களை விளக்கவும்." 
   ,"கோடித்துக்காட்டு:\n1.தடுத்த படிக்க நேரங்களில் சரியாக கோடித்துக்காட்டிகளை அநுப்பவும்.\n2.நீங்கள் சொல்வதில் அநிர்ணயம் இருக்கும்போது, அந்த கேள்வியை விடுங்கள், பின்னர் நேரம் அநுப்ப முடியும் படிக்க முடியும்."  
   ,"சந்திப்புக்களை நிர்வகிக்க:\n1.உண்டாகின்ற தேர்வுகளில் நிர்வகிக்க போக்கிலும் கோடித்துக்காட்டுக்களை செய்ய வேண்டிய நேரம் உள்ளிட்டுக் கொள்ளுங்கள்.\n2.நீங்கள் ஒரு கேள்வியின் பரிசோதனையில் நம ்பிக்கை கொண்டிருக்கலாம், அதை நெருங்கி செய்யுங்கள்" 
   ,"செய்ய அந்தக் கடிதத்தில் அந்தக் கேள்வியிற்கு நம்பிக்கை கொண்டிருக்கவில்லை:\n1.உண்டாகின்ற தேர்வில், ஒவ்வொரு பிரிவு அல்லது கேள்விக்குக் கோடித்துக்காட்டுங்கள்.\n2.நீங்கள் அநிதிக்கு சொல்லாக இருக்காதீர்கள், பின்னர் அந்தக் கேள்விக்கு வரல் செய்ய வாய்ப்பு உள்ளிட்டு செய்யுங்கள்." ]
   }
 else{
   chat = "Create a Study Schedule:\n1.Make a detailed study schedule that covers all subjects and topics.\n2.Allocate more time to subjects or topics you find challenging.\n3.Include breaks in your schedule to avoid burnout.\n\n\n Prioritize Subjects:\n1.Identify the subjects that carry more weight in the exams and focus on them first.\n2.Allocate more study time to subjects you are less confident in.\n\n\n Set Specific Goals:\n1.Set clear, achievable goals for each study session. For example, complete a specific chapter or solve a set of practice questions.\n\n\n Break Down the Syllabus:\n1.Divide the syllabus into manageable sections or chapters.\n2.Focus on completing one section before moving on to the next.\n\n\n Use Effective Study Techniques:\n1.Active learning techniques like summarizing, teaching, or discussing topics with peers can enhance understanding.\n2.Practice previous years' question papers and sample papers to get a sense of the exam pattern.\n\n\n Avoid Procrastination:\n1.Identify your most productive study times and schedule difficult subjects during these hours.\n2.Minimize distractions, such as turning off social media and mobile notifications while studying.\n\n\nTake Regular Breaks:\n1.Short breaks between study sessions can help improve focus and prevent burnout.\n2.Use techniques like the Pomodoro method (25 minutes of focused study followed by a 5-minute break .\n\n\nStay Healthy:\n1.Get enough sleep, eat balanced meals, and stay hydrated to ensure your mind and body are in optimal condition for studying.\n\n\nRevise Regularly:\n1.Plan time for revision in your schedule, as revision is essential for retention.\n2.Create flashcards or summary notes for quick revision\n\n\n Seek Help When Needed:\n1.If you're struggling with a particular topic, don't hesitate to ask your teachers or classmates for help.\n2.Consider joining study groups to discuss and clarify doubts.\n\n\n Practice Time Management During the Exam:\n1.During the actual exam, allocate time wisely to each section or question.\n2.If you're unsure about a question, move on and come back to it later if time permits.\n\n\nStay Positive and Manage Stress:\n1.Maintain a positive mindset and believe in your abilities.\n2.Practice relaxation techniques like deep breathing and meditation to manage exam-related stress."   
   }
}//
else if (text.indexOf("college"   ) !== -1 ){
 if(text.indexOf("tn"   ) !== -1 ){
    link ="/chatbot/pdf/Tamil Nadu Top College list.pdf"   ;
    chat = "Tamil Nadu Top College list"   
 }
 else if(text.indexOf("india"  ) !== -1 ||text.indexOf("ind"   ) !== -1 ){
    link ="/chatbot/pdf/India Top College list.pdf";
    chat = "India Top College list"   
 }
 else  {
    chat = "which college do you prepare ?\n\t1.Engineering College\n\t2.Medical College\n\t3.Arts and Science College"   ; 
 }
}
else if(text.indexOf("vsb"  ) !== -1 ||text.indexOf("v.s.b"   ) !== -1 ){
  chat = "V.S.B. Educational Trust was founded in the year 2000 by Mr. V.S. Balsamy, the founder and correspondent of the V.S.B. Engineering College, with an interest in promoting, managing and administrating educational institutions with high academic standards, discipline and to take up and help other allied activities in the field of education. Under the Trust, V.S.B. Engineering College,Karur was established in the year 2002 and V.S.B College of Engineering Technical Campus,Coimbatore in the year 2012."   
}
else if((text.indexOf("kalam"  ) !== -1 ||text.indexOf("a.p.j" )  !== -1 )&&text.indexOf("birth" ) !== -1 &&(text.indexOf("date"  ) !== -1 ||text.indexOf("day") !== -1 ) ){
  chat = "15 October 1931"   
}
else if(text.indexOf("sachin" ) !== -1 &&text.indexOf("birth" ) !== -1 &&(text.indexOf("date"  ) !== -1 ||text.indexOf("day"    ) !== -1 ) ){
  chat = "24 April 1973"   
}
else if(text.indexOf("vijay" ) !== -1 &&text.indexOf("birth" ) !== -1 &&(text.indexOf("date"  ) !== -1 ||text.indexOf("day"    ) !== -1 ) ){
  chat = "22 June 1974"   
}
else if(text.indexOf("ajith" ) !== -1 &&text.indexOf("birth" ) !== -1 &&(text.indexOf("date"  ) !== -1 ||text.indexOf("day"    ) !== -1 ) ){
  chat = "1 May 1971"   
}
else if(text.indexOf("kamarajar" ) !== -1 &&text.indexOf("birth" ) !== -1 &&(text.indexOf("date"  ) !== -1 ||text.indexOf("day" )  !== -1) ){
  chat = "15 July 1903"   
}
else if(text.indexOf("date") !== -1 || (text.indexOf("today" ) !== -1 &&text.indexOf("date")  !== -1 )){
  chat = currentDate ;  
}
else if(text.indexOf("time"  ) !== -1 ||text.indexOf("currenttime"   ) !== -1 ){
  chat = currentTime ;
}
else if(text.indexOf("day"   ) !== -1 ){
  switch(date.getDay()){
   case 1:
     chat = "Monday" ;
     break;
   case 2:
     chat = "Tuesday" ;
     break;
   case 3:
     chat = "Wednesday" ;
     break;
   case 4:
     chat = "Thursday" ;
     break;
   case 5:
     chat = "Friday" ;
     break;
   case 6:
     chat = "saturday" ;
     break;
   default:
     chat = "Sunday" ;
     break;
}  
}
else if(text.indexOf("month"   ) !== -1 ){
  var month = date.getMonth() +1 ;
  chat = month.toString(); 
}
else if(text.indexOf("year") !== -1 ){
  chat = date.getFullYear().toString()    
}
// else if(text.indexOf("*" ) !== -1 ||text.indexOf("+"  ) !== -1 ||text.indexOf("-"  ) !== -1 ||text.indexOf("/"  ) !== -1 ||text.indexOf("%"   ) !== -1 ){
//  const result = evalExpression(text);
//   chat = result.toString()   
// }
else  {
 
}
}
  function handleInput(event) {
    event.preventDefault();
    let btn;
    const inputField = document.getElementById("input-field");
    // Add the user input to the conversation.
    var str = inputField.value;
    var text = str.toLowerCase();
    display(text);
    if(text === "hi"){
      chat="Hello "+storedValue+", How can I assist you today?";
      btn="Smart Intract";
    }
    console.log(len);

    setConversation([...conversation, {
      request: "user",
      user_message: text,
      response: "chatbot",
      bot_message: chat,
      senttime: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      pd:link,
      len:len,
      btn:btn
    }]);
    
console.log(conversation)    
    inputField.value = "";
  } 
  function ContactPage(){
    navigate('/contact')
  }
   useEffect(() => {
    // Scroll to the bottom of the conversation.
    const conversationElement = document.getElementById("conversation");
    conversationElement.scrollTop = conversationElement.scrollHeight;
  }, [conversation]);
    

  return (
    <div className="body">
    <div className="chatbot-container">
      <div id="chatbot">
        <div id="conversation" key="conversation">
        <div id="header">
            <h1>
                <img className="head-img" src={televein} alt="" />
                <strong id="vsb">TELE Chat Bot</strong>
            </h1>
        </div>
          {discription()}
          {conversation.map((message , index) => (
      <ChatbotMessage key={index} user_message={message.user_message} bot_message={message.bot_message} sentTime={message.senttime} pdLink={message.pd} lenMul={message.len} btn={message.btn}/>
    ))}
        </div>
        <form id="input-form" onSubmit={handleInput}>
          <message-container>
            <input id="input-field" type="text" label="Type your message here" placeholder="Type your message here" />
            <button id="submit-button" type="submit">
              <img className="send-icon" src={send} alt="send" />
            </button>
          </message-container>
        </form>
      </div>
    </div>
      <div>
            <button className="contact" onClick={ContactPage}>
              <img className="contact-img" src={Contact} alt="Contact"/>
            </button>
      </div>
      </div>    
  );
};

export default Chatbot;
