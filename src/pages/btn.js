import React, { useState } from 'react';
import "./stylechat.css";
import audioPlayer from "./Click.mp3";
import Chatbot from './chatbot';

const Btn = ({msg}) => {
  const [showComponent, setShowComponent] = useState(false);
  let buttoncontent,chat,pd,len;
  console.log(msg);
  if(msg === "Smart Intract"){
    buttoncontent=["10th content","11th content","12th content"];
  }
  if(msg === "12th content"){
    buttoncontent=["12th Text Book","12th study materials","12th question paper"];
  }
  else if(msg === "12th Text Book"){
    chat="12th text Books"
    buttoncontent=["12th Biology Group Books","12th Computer Science Group Books"];
  }
  else if(msg === "12th Biology Group Books"){
    chat="12th Text Books for Biology Group"
    buttoncontent=["12th Tamil Book","12th English Book","12th Maths Book","12th Physics Book","12th Chemistry Book","12th Biology Book"];
  }
  else if(msg === "12th Computer Science Group Books"){
    chat="12th Text Books for Computer Science Group"
    buttoncontent=["12th Tamil Book","12th English Book","12th Maths Book","12th Physics Book","12th Chemistry Book","12th Computer Science"];
  }
  else if(msg === "12th Tamil Book"){
    pd="https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing";
    chat="12 Tamil Book";
  }
  else if(msg === "12th English Book"){
    pd="https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S";
    chat="12 English Book";
  }
  else if(msg === "12th Maths Book"){
    len=1;
    pd=["https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing","https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing"];
    chat=["12th Mathematics Volume 1 Book","12th Mathematics Volume 2 Book"];
  }
  else if(msg === "12th Physics Book"){
    len=1;
    pd=["https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing","https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing"];
    chat=["12th Physics Volume 1 Book","12th Physics Volume 2 Book"];
  }
  else if(msg === "12th Chemistry Book"){
    len=1;
    pd=["https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing","https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing"];
    chat=["12th Chemistry Volume 1 Book","12th Chemistry Volume 2 Book"];
  }
  else if(msg === "12th Biology Book"){
    len=1;
    pd=["https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing","https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing"];
    chat=["12th Botany Book","12th Zoology Book"];
  }
  else if(msg === "12th Computer Science"){
    pd="https://drive.google.com/file/d/1TpdFoVkkcFFEP15CrAPWa6XOftWWIaoC/view?usp=sharing";
    chat="12th Computer Science Book";
  }
  else if(msg === "12th study materials"){
    chat="Here Your Study Materials";
    buttoncontent=["12th Biology Group Study Materials","12th Computer Science Group Study Materials"];
  }
  else if(msg === "12th Biology Group Study Materials"){
    chat="Choose Your Subject";
    buttoncontent=["12th English Study Material","12th Tamil Study Material","12th Maths Study Material","12th Physics Study Material","12th Chemistry Study Material","12th Biology Study Material"];
  }
  else if(msg === "12th Computer Science Group Study Materials"){
    chat="Choose Your Subject";
    buttoncontent=["12th English Study Material","12th Tamil Study Material","12th Maths Study Material","12th Physics Study Material","12th Chemistry Study Material","12th Computer Science Study Materials"];
  }
  else if(msg === "12th English Study Material"){
    pd="https://drive.google.com/file/d/1ujB_1huRMdmlsueNVSsujj_FHgLE0fni/view?usp=drivesdk";
    chat="12th public English Guide"
  }
  else if(msg === "12th Tamil Study Material"){
    pd="https://drive.google.com/file/d/1VkSdU73CN8QSHYmBbiATLWN-16mOBdDk/view?usp=drive_link";
    chat="12th public Tamil Guide"
  }
  else if(msg === "12th Maths Study Material"){
    pd="https://drive.google.com/file/d/1jtAlQDQ7v30aTCZ10sWb1honQ1C2FukZ/view?usp=drivesdk";
    chat="12th public Maths Guide"
  }
  else if(msg === "12th Physics Study Material"){
    pd="https://drive.google.com/file/d/19YjCgBE2bqD6bsDJvi1EV7HTvvPWJbJT/view?usp=drivesdk";
    chat="12th public Physics Guide"
  }
  else if(msg === "12th Chemistry Study Material"){
    pd="https://drive.google.com/file/d/1GfUQyte4p1BQNJ7jHkjqDkl8flHVJEAb/view?usp=drivesdk";
    chat="12th public Chemistry Guide"
  }
  else if(msg === "12th Biology Study Material"){
    len=1;
    pd=["https://drive.google.com/file/d/1NsC7i1Ku69OCf1bROQXyQCbZV1dbLmBG/view?usp=drivesdk","https://drive.google.com/file/d/1Hutozc_51ye4UENYbseImJl3tJiPwZWn/view?usp=drivesdk"];
    chat=["12th public Botony Guide","12th public Zoology Guide"]
  }
  else if(msg === "12th Computer Science Study Materials"){
    pd="https://drive.google.com/file/d/10X2McWZ40-eqZ7vdgt0VGIpQF4lNpu5d/view?usp=drivesdk";
    chat="12th public Computer Science Guide"
  }
  else if(msg === "12th question paper"){
    buttoncontent=["2023 12th Public Question paper and Answer","2022 12th Public Question paper and Answer"];
  }
  else if(msg === "2023 12th Public Question paper and Answer"){
    buttoncontent=["2023 12th Biology Group Questions","2023 12th Computer Science Group Questions"]
  }
  else if(msg === "2023 12th Biology Group Questions"){  
    len=1;
    pd=["https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk"
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
    ,"https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing"]
    chat=["12th public Tamil Question 2023"
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
    ,"12th public Zoology Answer 2023"]
  }
  else if(msg === "2023 12th Computer Science Group Questions"){
    len=1;
    pd=["https://drive.google.com/file/d/1u9WldSmXYEQwZnr2pNBbrYY9ew-qVAHn/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1tYmq7mnXIa67W9mLxD_87g2ENzD1yhMb/view?usp=sharing"
    ,"https://drive.google.com/file/d/1yLVS4TrhbY10rXmf70h7Ni8er8VG33Cf/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1XyTxoB8R_I55WvbUiyz3111-gmK5QT45/view?usp=sharing"
    ,"https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing"
    ,"https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing"
    ,"https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing"
    ,"https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing"]
    chat=["12th public Tamil Question 2023"
    ,"12th public Tamil Answer 2023"
    ,"12th public English Question 2023"
    ,"12th public English Answer 2023"
    ,"12th public Maths Question 2023"
    ,"12th public Maths Answer 2023"
    ,"12th public Physics Question 2023"
    ,"12th public Physics Answer 2023"
    ,"12th public Chemistry Question 2023"
    ,"12th public Chemistry Answer 2023"
    ,"12th public Computer Science Question 2023"
    ,"12th public Computer Science Answer 2023"]
  }
  else if(msg === "2022 12th Public Question paper and Answer"){
    buttoncontent=["2022 12th Biology Group Questions","2022 12th Computer Science Group Questions"];
  }
  else if(msg === "2022 12th Biology Group Questions"){
    len=1;
    pd=["https://drive.google.com/file/d/1whpsvDSvsYYi0CCWczb8PFyrcHdVlJxX/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1zrsm3bIWcZnwAq_bKivYGzWBg1pVNOrd/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1z4QEWx6hQjKD-f3eF6wTmW7BY0L2YJJp/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1xo9l-SSPPNapylF3W4CLFgC2n9syLyX3/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing"
    ,"https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing"
    ,"https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing"
    ,"https://drive.google.com/file/d/1aic3ncEZqlfjX7fJGEmSmvmAcbvWngiY/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/15EBG3aPcLBj7gCGbMU2gH1GUgKnG6o4g/view?usp=sharing"
    ,"https://drive.google.com/file/d/1PAej7kKO6vh3vjkvKazhu5v5u0DBbsLi/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1f7U7txrX3O3qlBtFYPhKsd6RnDdv_X-2/view?usp=sharing"]
    chat=["12th public Tamil Question 2022"
    ,"12th public Tamil Answer 2022"
    ,"12th public English Question 2022"
    ,"12th public English Answer 2022"
    ,"12th public Maths Question 2022"
    ,"12th public Maths Answer 2022"
    ,"12th public Physics Question 2022"
    ,"12th public Physics Answer 2022"
    ,"12th public Chemistry Question 2022"
    ,"12th public Chemistry Answer 2022"
    ,"12th public Botony Question 2022"
    ,"12th public Botony Answer 2022"
    ,"12th public Zoology Question 2022"
    ,"12th public Zoology Answer 2022"]
  }
  else if(msg === "2022 12th Computer Science Group Questions"){
    len=1;
    pd=["https://drive.google.com/file/d/1whpsvDSvsYYi0CCWczb8PFyrcHdVlJxX/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1zrsm3bIWcZnwAq_bKivYGzWBg1pVNOrd/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1z4QEWx6hQjKD-f3eF6wTmW7BY0L2YJJp/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1xo9l-SSPPNapylF3W4CLFgC2n9syLyX3/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1OOkocgsnut8W7m-bkCPc7EtMBj8tFFv6/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/10V8c1T2-Sse95sOhqN_sjVziDPqcXyO4/view?usp=sharing"
    ,"https://drive.google.com/file/d/1BrQMAnH8RA9Bow-xr2ZCUOWgWKBhHcRM/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1ziQMJYR3ec9JVR6YFFqxr0Rpb_X3DgHa/view?usp=sharing"
    ,"https://drive.google.com/file/d/1emGa0DkGOI9fd3nlEcPlCJXlVnK1d_4P/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1ItyCxLpwbkcAK1h30c5N_17BXAJnf_IL/view?usp=sharing"
    ,"https://drive.google.com/file/d/11GNAAN340DRpmZ1MO5ft5sMbq7rJ3vr5/view?usp=drivesdk"
    ,"https://drive.google.com/file/d/1rNg5GV9AGd3VnRUsVnOvGD-8Rz60y9wE/view?usp=sharing"]
    chat=["12th public Tamil Question 2022"
    ,"12th public Tamil Answer 2022"
    ,"12th public English Question 2022"
    ,"12th public English Answer 2022"
    ,"12th public Maths Question 2022"
    ,"12th public Maths Answer 2022"
    ,"12th public Physics Question 2022"
    ,"12th public Physics Answer 2022"
    ,"12th public Chemistry Question 2022"
    ,"12th public Chemistry Answer 2022"
    ,"12th public Computer Science Question 2022"
    ,"12th public Computer Science Answer 2022"]
  }
  if(msg === "11th content"){
    buttoncontent=["11th Text Book","11th study materials","11th question paper"];
  }
  else if(msg === "11th Text Book"){
    chat="11th text Books"
    buttoncontent=["11th Biology Group Books","11th Computer Science Group Books"];
  }
  else if(msg === "11th Biology Group Books"){
    chat="11th Text Books for Biology Group"
    buttoncontent=["11th Tamil Book","11th English Book","11th Maths Book","11th Physics Book","11th Chemistry Book","11th Biology Book"];
  }
  else if(msg === "11th Computer Science Group Books"){
    chat="11th Text Books for Computer Science Group"
    buttoncontent=["11th Tamil Book","11th English Book","11th Maths Book","11th Physics Book","11th Chemistry Book","11th Computer Science"];
  }
  else if(msg === "11th Tamil Book"){
    pd="https://drive.google.com/file/d/10cvdPYOss79GQiHmrOLnCpNf4rKpW3zu/view?usp=sharing";
    chat="11th Tamil Book";
  }
  else if(msg === "11th English Book"){
    pd="https://drive.google.com/open?id=1ouYA8NRuwcaAUnv5tTz47ToW70S2fI0S";
    chat="11th English Book";
  }
  else if(msg === "11th Maths Book"){
    len=1;
    pd=["https://drive.google.com/file/d/1qCiom524Szt6SSXBiKoFs46_OAaiUhEo/view?usp=sharing","https://drive.google.com/file/d/1VHWA08TnYtXrhf3rt_z6OFsTrL3IJYCO/view?usp=sharing"];
    chat=["11th Mathematics Volume 1 Book","11th Mathematics Volume 2 Book"];
  }
  else if(msg === "11th Physics Book"){
    len=1;
    pd=["https://drive.google.com/file/d/17KF0l3aeS3yD2oBYJ37FEsyn5l8Twklz/view?usp=sharing","https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing"];
    chat=["11th Physics Volume 1 Book","11th Physics Volume 2 Book"];
  }
  else if(msg === "11th Chemistry Book"){
    len=1;
    pd=["https://drive.google.com/file/d/1R4PL75IdKXezP9ObdCSVc9bWE5eWo584/view?usp=sharing","https://drive.google.com/file/d/1vxTdRkPDF0z8mm0TBdugyawGbxBH-YHH/view?usp=sharing"];
    chat=["11th Chemistry Volume 1 Book","11th Chemistry Volume 2 Book"];
  }
  else if(msg === "11th Biology Book"){
    len=1;
    pd=["https://drive.google.com/file/d/1OfI2T-ateB_VwBC2K4vx_zKn2w_m6Z0E/view?usp=sharing","https://drive.google.com/file/d/1s1HnfRwwlThc194XLHP7C1g8fGHPfN-2/view?usp=sharing"];
    chat=["11th Botany Book","11th Zoology Book"];
  }
  else if(msg === "11th Computer Science"){
    pd="https://drive.google.com/file/d/1TpdFoVkkcFFEP15CrAPWa6XOftWWIaoC/view?usp=sharing";
    chat="11th Computer Science Book";
  }
  else if(msg === "11th study materials"){
    chat="Here Your Study Materials";
    buttoncontent=["11th Biology Group Study Materials","11th Computer Science Group Study Materials"];
  }
  else if(msg === "11th Biology Group Study Materials"){
    chat="Choose Your Subject";
    buttoncontent=["11th English Study Material","11th Tamil Study Material","11th Maths Study Material","11th Physics Study Material","11th Chemistry Study Material","11th Biology Study Material"];
  }
  else if(msg === "11th Computer Science Group Study Materials"){
    chat="Choose Your Subject";
    buttoncontent=["11th English Study Material","11th Tamil Study Material","11th Maths Study Material","11th Physics Study Material","11th Chemistry Study Material","11th Computer Science Study Materials"];
  }
  else if(msg === "11th English Study Material"){
    pd="https://drive.google.com/file/d/1ujB_1huRMdmlsueNVSsujj_FHgLE0fni/view?usp=drivesdk";
    chat="11th public English Guide"
  }
  else if(msg === "11th Tamil Study Material"){
    pd="https://drive.google.com/file/d/1VkSdU73CN8QSHYmBbiATLWN-16mOBdDk/view?usp=drive_link";
    chat="11th pu1blic Tamil Guide"
  }
  else if(msg === "11th Maths Study Material"){
    pd="https://drive.google.com/file/d/1jtAlQDQ7v30aTCZ10sWb1honQ1C2FukZ/view?usp=drivesdk";
    chat="11th public Maths Guide"
  }
  else if(msg === "11th Physics Study Material"){
    pd="https://drive.google.com/file/d/19YjCgBE2bqD6bsDJvi1EV7HTvvPWJbJT/view?usp=drivesdk";
    chat="11th public Physics Guide"
  }
  else if(msg === "11th Chemistry Study Material"){
    pd="https://drive.google.com/file/d/1GfUQyte4p1BQNJ7jHkjqDkl8flHVJEAb/view?usp=drivesdk";
    chat="11th public Chemistry Guide"
  }
  else if(msg === "11th Biology Study Material"){
    pd=["https://drive.google.com/file/d/1NsC7i1Ku69OCf1bROQXyQCbZV1dbLmBG/view?usp=drivesdk","https://drive.google.com/file/d/1Hutozc_51ye4UENYbseImJl3tJiPwZWn/view?usp=drivesdk"];
    chat=["11th public Botony Guide","11th public Zoology Guide"]
  }
  else if(msg === "11th Computer Science Study Materials"){
    pd="https://drive.google.com/file/d/10X2McWZ40-eqZ7vdgt0VGIpQF4lNpu5d/view?usp=drivesdk";
    chat="11th public Computer Science Guide"
  }
  else if(msg === "11th question paper"){
    buttoncontent=["2023 11th Public Question paper and Answer","2022 11th Public Question paper and Answer"];
  }
  else if(msg === "2023 11th Public Question paper and Answer"){
    buttoncontent=["2023 11th Biology Group Questions","2023 11th Computer Science Group Questions"]
  }
  else if(msg === "2023 11th Biology Group Questions"){   
      len=1;
      pd=["https://drive.google.com/file/d/1wJgKv7_qOxomS3I7O7t3vIVWbpLQ6hF7/view"
      ,"https://drive.google.com/file/d/1kzXbc6vPFYmUuMryV9WiVU1qpEXxmfsI/view"
      ,"https://drive.google.com/file/d/1-P582zxxQEy7shTZjFR9Y169bmmX4OAQ/view"
      ,"https://drive.google.com/file/d/10a6BXHdj017eW2uSR9koYLa1oXmyhdr4/view"
      ,"https://drive.google.com/file/d/1hyykcCiXYV4kcU6LlfyrkRecPScGCuO5/view"
      ,"https://padasalai.info/wp-content/uploads/2023/07/11th-Maths-EM-Supplementary-Exam-July-2023-Original-Question-Paper-with-Answer-Keys-SURA-Guides-English-Medium-PDF-Download.pdf"
      ,"https://drive.google.com/file/d/19OIdqFW8CyFoy_rFTE0Fu6toqTpGnrMY/view"
      ,"https://drive.google.com/file/d/1IvFsdIsz_JOYsjg-3A-jp9ySAOxMRdkr/view"
      ,"https://drive.google.com/file/d/1hyykcCiXYV4kcU6LlfyrkRecPScGCuO5/view"
      ,"https://drive.google.com/file/d/1l6qSC0r8ETEOvHR3RA4uI7wGuE7mzpql/view"
      ,"https://drive.google.com/file/d/1KA7J0nufwJQ_TB5a53s_PgJs-D8k0FLR/view"
      ,"https://drive.google.com/file/d/1Qlc2FBEeIi2uBIZrgL5AJ8PyPsvGaZLF/view"
      ,"https://padasalai.info/wp-content/uploads/2023/07/11th-Zoology-June-2023-Supplementary-Exam-Original-Question-Paper-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2023/07/11th-Zoology-EM-Supplementary-Exam-July-2023-Original-Question-Paper-with-Answer-Keys-SURA-Guides-English-Medium-PDF-Download.pdf"]
      chat=["12th public Tamil Question 2023"
      ,"11th public Tamil Answer 2023"
      ,"11th public English Question 2023"
      ,"11th public English Answer 2023"
      ,"11th public Maths Question 2023"
      ,"11th public Maths Answer 2023"
      ,"11th public Physics Question 2023"
      ,"11th public Physics Answer 2023"
      ,"11th public Chemistry Question 2023"
      ,"11th public Chemistry Answer 2023"
      ,"11th public Botony Question 2023"
      ,"11th public Botony Answer 2023"
      ,"11th public Zoology Question 2023"
      ,"11th public Zoology Answer 2023"]
    }
    else if(msg === "2023 12th Computer Science Group Questions"){
      len=1;
      pd=["https://drive.google.com/file/d/1wJgKv7_qOxomS3I7O7t3vIVWbpLQ6hF7/view"
      ,"https://drive.google.com/file/d/1kzXbc6vPFYmUuMryV9WiVU1qpEXxmfsI/view"
      ,"https://drive.google.com/file/d/1-P582zxxQEy7shTZjFR9Y169bmmX4OAQ/view"
      ,"https://drive.google.com/file/d/10a6BXHdj017eW2uSR9koYLa1oXmyhdr4/view"
      ,"https://drive.google.com/file/d/1hyykcCiXYV4kcU6LlfyrkRecPScGCuO5/view"
      ,"https://padasalai.info/wp-content/uploads/2023/07/11th-Maths-EM-Supplementary-Exam-July-2023-Original-Question-Paper-with-Answer-Keys-SURA-Guides-English-Medium-PDF-Download.pdf"
      ,"https://drive.google.com/file/d/19OIdqFW8CyFoy_rFTE0Fu6toqTpGnrMY/view"
      ,"https://drive.google.com/file/d/1IvFsdIsz_JOYsjg-3A-jp9ySAOxMRdkr/view"
      ,"https://drive.google.com/file/d/1VpwsavBC7O-LHrNLpNx1DjlkEie5MyQB/view"
      ,"https://drive.google.com/file/d/1l6qSC0r8ETEOvHR3RA4uI7wGuE7mzpql/view"
      ,"https://drive.google.com/file/d/1Z4qqoxgwdnaAlno38rSE2T7Bq9X2YFog/view"
      ,"https://drive.google.com/file/d/1Zy7WQMO9HA7t1vc8AUN7W_e08P3oIAHy/view"]

      chat=["11th public Tamil Question 2023"
      ,"11th public Tamil Answer 2023"
      ,"11th public English Question 2023"
      ,"11th public English Answer 2023"
      ,"11th public Maths Question 2023"
      ,"11th public Maths Answer 2023"
      ,"11th public Physics Question 2023"
      ,"11th public Physics Answer 2023"
      ,"11th public Chemistry Question 2023"
      ,"11th public Chemistry Answer 2023"
      ,"11th public Computer Science Question 2023"
      ,"11th public Computer Science Answer 2023"]
    }
    else if(msg === "2022 11th Public Question paper and Answer"){
      buttoncontent=["2022 11th Biology Group Questions","2022 11th Computer Science Group Questions"];
    }
    else if(msg === "2022 11th Biology Group Questions"){
      len=1;
      pd=["http://google.com/file/d/1gF2E3BkT_6_slR3RbKfs6A0O1vmHI7Sr/view"
      ,"https://padasalai.info/wp-content/uploads/2022/06/11th-Tamil-Official-Answer-Keys-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://app.box.com/s/8qwtromt0qx44hlmhkgkexxfh9wg6s3g"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-English-Answer-Keys-for-Public-Exam-2022-English-Medium-PD-Fdownload.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Maths-Original-Question-Paper-for-Public-Exam-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Maths-EM-Answer-Key-for-Public-Exam-2022-English-Medium-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/06/11th-Physics-Question-Paper-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/06/11th-Physics-EM-Official-Answer-Keys-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Chemistry-Question-Paper-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Chemistry-Answer-Key-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Botany-Question-Paper-for-Public-Exam-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Botany-EM-Answer-Key-for-Public-Exam-2022-English-Medium-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Zoology-Question-Paper-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Zoology-EM-Answer-Keys-for-Public-Exam-2022-English-Medium-PDF-Download.pdf"]

      chat=["11th public Tamil Question 2022"
      ,"11th public Tamil Answer 2022"
      ,"11th public English Question 2022"
      ,"11th public English Answer 2022"
      ,"11th public Maths Question 2022"
      ,"11th public Maths Answer 2022"
      ,"11th public Physics Question 2022"
      ,"11th public Physics Answer 2022"
      ,"11th public Chemistry Question 2022"
      ,"11th public Chemistry Answer 2022"
      ,"11th public Botony Question 2022"
      ,"11th public Botony Answer 2022"
      ,"11th public Zoology Question 2022"
      ,"11  th public Zoology Answer 2022"]
    }
    else if(msg === "2022 11th Computer Science Group Questions"){
      len=1;
      pd=["http://google.com/file/d/1gF2E3BkT_6_slR3RbKfs6A0O1vmHI7Sr/view"
      ,"https://padasalai.info/wp-content/uploads/2022/06/11th-Tamil-Official-Answer-Keys-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://app.box.com/s/8qwtromt0qx44hlmhkgkexxfh9wg6s3g"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-English-Answer-Keys-for-Public-Exam-2022-English-Medium-PD-Fdownload.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Maths-Original-Question-Paper-for-Public-Exam-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Maths-EM-Answer-Key-for-Public-Exam-2022-English-Medium-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/06/11th-Physics-Question-Paper-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/06/11th-Physics-EM-Official-Answer-Keys-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Chemistry-Question-Paper-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Chemistry-Answer-Key-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/05/11th-Computer-Science-Original-Question-Paper-for-Public-Exam-May-2022-PDF-Download.pdf"
      ,"https://padasalai.info/wp-content/uploads/2022/06/11th-Computer-Applications-EM-Official-Answer-Keys-for-Public-Exam-May-2022-PDF-Download.pdf"]
      
      chat=["11th public Tamil Question 2022"
      ,"11th public Tamil Answer 2022"
      ,"11th public English Question 2022"
      ,"11th public English Answer 2022"
      ,"11th public Maths Question 2022"
      ,"11th public Maths Answer 2022"
      ,"11th public Physics Question 2022"
      ,"11th public Physics Answer 2022"
      ,"11th public Chemistry Question 2022"
      ,"11th public Chemistry Answer 2022"
      ,"11th public Computer Science Question 2022"
      ,"11th public Computer Science Answer 2022"]
    }
   
if(msg === "10th content"){
  buttoncontent=["10th Text Book","10th study materials","10th question paper"];
}
else if(msg === "10th Text Book"){
  chat="10th Text Books"
  buttoncontent=["10th Tamil Book","10th English Book","10th Maths Book","10th Science Book","10th Social science Book"];
}
else if(msg === "10th Tamil Book"){
  pd="https://drive.google.com/file/d/1q0mJML8Atif-r4AJMstp-djl2qwdCKch/view";
  chat="10th Tamil Book";
}
else if(msg === "10th English Book"){
  pd="https://drive.google.com/file/d/1hZ_vWPaDR5CMzYusipb9t4Gkh3TQIENI/view";
  chat="10th English Book";
}
else if(msg === "10th Maths Book"){
  pd=["https://drive.google.com/file/d/1EC5Slxjr71wzJiG3weiQF4FafBNvOLKL/view"];
  chat="10th Maths Book";
}
else if(msg === "10th Science Book"){
  pd=["https://drive.google.com/file/d/1O8AiCcdhOcuR2B2ER-CsDSqYWpFNugvI/view"];
  chat="10th Science Book";
}
else if(msg === "10th Social science Book"){
  pd=["https://drive.google.com/file/d/1zoqmKJy6MbAFKkPMRJ7i7wvdGTywnXtf/view"];
  chat="12th Social science Book";
}
else if(msg === "10th study materials"){
  chat="Choose Your Subject";
  buttoncontent=["10th Tamil Study Material","10th English Study Material","10th Maths Study Material","10th Science study Material","10th Social science Study Material"];
}
else if(msg === "10th Tamil Study Material"){
  pd="https://padasalai.info/wp-content/uploads/2023/07/10th-Tamil-Dolphin-Guide-2023-2024-Sample-PDF-Download.pdf";
  chat="10th public Tamil Guide"
}
else if(msg === "10th English Study Material"){
  pd="https://padasalai.info/wp-content/uploads/2023/07/10th-English-Dolphin-Guide-2023-2024-Sample-PDF-Download.pdf";
  chat="10th public English Guide"
}
else if(msg === "10th Maths Study Material"){
  pd="https://padasalai.info/wp-content/uploads/2023/04/10th-Maths-EM-latest-School-Guides-Notes-2023-2024-Sura-Books-English-Medium-PDF-Download.pdf";
  chat="10th public Maths Guide"
}
else if(msg === "10th Science study Material"){
  pd="https://padasalai.info/wp-content/uploads/2023/04/10th-Science-EM-latest-School-Guides-Notes-2023-2024-Sura-Books-English-Medium-PDF-Download.pdf";
  chat="10th public Science Guide"
}
else if(msg === "10th Social science Study Material"){
  pd="https://padasalai.info/wp-content/uploads/2023/04/10th-Social-Science-EM-latest-School-Guides-Notes-2023-2024-Sura-Books-English-Medium-PDF-Download.pdf";
  chat="10th public Social science Guide"
}
  else if(msg === "10th question paper"){
    buttoncontent=["2023 10th Public Question paper and Answer","2022 10th Public Question paper and Answer"]
  }
else if(msg === "2023 10th Public Question paper and Answer"){
  len=1; 
  pd=["https://www.educationobserver.com/forum/attachment.php?aid=59664"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59661"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59671"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59672"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59682"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59683"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59698"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59699"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59718"
  ,"https://www.educationobserver.com/forum/attachment.php?aid=59718"];

  chat=["10th public Tamil Question 2023"
  ,"10th public Tamil Answer 2023"
  ,"10th public English Question 2023"
  ,"10th public English Answer 2023"
  ,"10th public Maths Question 2023"
  ,"10th public Maths Answer 2023"
  ,"10th public science Question 2023"
  ,"10th public science Answer 2023"
  ,"10th public social science Question 2023"
  ,"10th public social science Answer 2023"]
}
else if(msg === "2022 10th Public Question paper and Answer"){
  len=1;
  pd=["https://www.educationobserver.com/forum/attachment.php?aid=57117"
,"https://www.educationobserver.com/forum/attachment.php?aid=57118"
,"https://www.educationobserver.com/forum/attachment.php?aid=57115"
,"https://www.educationobserver.com/forum/attachment.php?aid=57116"
,"https://www.educationobserver.com/forum/attachment.php?aid=57124"
,"https://www.educationobserver.com/forum/attachment.php?aid=57126"
,"https://www.educationobserver.com/forum/attachment.php?aid=57119"
,"https://www.educationobserver.com/forum/attachment.php?aid=57121"
,"https://www.educationobserver.com/forum/attachment.php?aid=57123"
,"https://www.educationobserver.com/forum/attachment.php?aid=57123"];

  chat=["10th public Tamil Question 2022"
  ,"10th public Tamil Answer 2022"
  ,"10th public English Question 2022"
  ,"10th public English Answer 2022"
  ,"10th public Maths Question 2022"
  ,"10th public Maths Answer 2022"
  ,"10th public science Question 2022"
  ,"10th public science Answer 2022"
  ,"10th public social science Question 2022"
  ,"10th public social science Answer 2022"]
}
  const handleClick = () => {
    const audioElement = document.getElementById('audioPlayer');
    audioElement.play();
    setShowComponent(true);
  };

  return (
    <div>
      <audio id="audioPlayer" controls>
            <source src={audioPlayer} type="audio/mpeg"/>
      </audio>
      <button onClick={handleClick}>{msg}</button>
      {showComponent && <MyOtherComponent msg={buttoncontent} chat={chat} pdLink={pd} len={len}/>}
    </div>
  );
};

const MyOtherComponent = ({msg,chat,pdLink,len}) => {
  function renderbtn(){
    if(chat !== undefined){
      return <Chatbot bot_message={chat} pdLink={pdLink} lenMul={len}/>
    }
  }
    function mulres(){
      if(msg !== undefined){
        const mulres = [];
        for(let i=0;i<msg.length;i++){
          mulres.push(<Btn msg={msg[i]}/>);
        }
        return([mulres]);
      }
    }

  return (
    <div>
      {renderbtn()}
      {mulres()}
    </div>
  );
};

export default Btn;