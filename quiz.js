const quizData = {
  q1: {
    question: "ลักษณะอาการที่พบ",
    description: "ลักษณะอาการโดยรวมที่พบบริเวณบริเวณช่องท้อง",
    choices: {
      A: { text: "ปวดท้อง(ธรรมดา)", next: "q_one" },
      B: { text: "ปวดและมีไข้", next: "q_two" },
      C: { text: "ท้องผูก", next: "q_three" },
      D: { text: "ปวดแบบเป็น ๆ หาย ๆ", next: "q_four" },
      E: { text: "ปวดบิด", next: "q_five" },
      F: { text: "ปวดท้องน้อยในผู้หญิงวัยเจริญพันธุ์", next: "q_six" },
      G: { text: "ท้องเดิน", next: "q_seven" }
    }
  },

  // ปวดท้องธรรมดา
  q_one: {
    question: "ปวดบิดเป็นพัก ๆ ?",
    description: "ปวดท้องบิด= ปวดท้องบีบ ๆ เป็นพัก ๆ เหมือนตอนท้องเสียหรือปวดอุจจาระ",
    choices: {
      A: { text: "ใช่", next: "q2_1" },
      B: { text: "ไม่", next: "q3" }
    }
  },
  q2_1: {
    question: "อาเจียนรุนแรง?",
    description: "กินอะไรก็อาเจียนออกมาหมด",
    choices: {
      A: { text: "ใช่", next: "result54" },
      B: { text: "ไม่", next: "q2_2" }
    }
  },
  q2_2: {
    question: "ปวดชายโครงขวาหลังกินอาหารมัน ๆ ?",
    choices: {
      A: { text: "ใช่", next: "result40" },
      B: { text: "ไม่", next: "q2_3" }
    }
  },
  q2_3: {
    question: "ปวดตรงท้องน้อยและร้าวไปที่อัณฑะหรือช่องคลอดข้างเดียวกัน ?",
    choices: {
      A: { text: "ใช่", next: "result139" },
      B: { text: "ไม่", next: "q3" }
    }
  },

  q3: {
    question: "ปวดตรงใต้ลิ้นปี่หรือยอดอก ?",
    choices: {
      A: { text: "ใช่", next: "q3_1" },
      B: { text: "ไม่", next: "q4" }
    }
  },
  q3_1: {
    question: "ปวดเค้นหรือจุกแน่นและร้าวไปที่ขากรรไกร คอ หรือแขน?",
    choices: {
      A: { text: "ใช่", next: "q3_1_1" },
      B: { text: "ไม่", next: "q3_2" }
    }
  },
  q3_1_1: {
    question: "นานครั้งละ 2-3 นาที (ไม่เกิน15นาที) หรือนั่งพักแล้วดีขึ้น ?",
    choices: {
      A: { text: "ใช่", next: "result96" },
      B: { text: "ไม่", next: "result96_1" }
    }
  },
  q3_2: {
    question: "ปวดแสบเวลาหิวหรือหลังกินข้าวอิ่ม ? หรือปวดตอนดึก ?",
    choices: {
      A: { text: "ใช่", next: "result49" },
      B: { text: "ไม่", next: "q3_3" }
    }
  },
  q3_3: {
    question: "แสบตรงยอดอก? แสบร้าวจากยอดอกขึ้นไปถึงคอหอย? หรือ เรอเปรี้ยวขึ้นคอหอย ?",
    choices: {
      A: { text: "ใช่", next: "result49_1" },
      B: { text: "ไม่", next: "q3_4" }
    }
  },
  q3_4: {
    question: "มีลมในท้องหรืออึดอัดท้องเฟ้อ ?",
    choices: {
      A: { text: "ใช่", next: "result49" },
      B: { text: "ไม่", next: "q4" }
    }
  },

  q4: {
    question: "ปวดเสียวอยู่แถบหนึ่งบริเวณที่เคยเป็นงูสวัด ?",
    choices: {
      A: { text: "ใช่", next: "result188" },
      B: { text: "ไม่", next: "q5" }
    }
  },

  q5: {
    question: "ปวดแสบปวดร้อนอยู่แถบหนึ่ง ?",
    choices: {
      A: { text: "ใช่", next: "result188_1" },
      B: { text: "ไม่", next: "resultfinal" }
    }
  },

  // ปวดท้องและมีไข้
  q_two: {
    question: "มีอาการอย่างใดอย่างหนึ่งต่อไปนี้ ?",
    description: "ปวดรุนแรง / หน้าท้องเกร็งแข็ง / ปวดติดต่อกันนานเกิน 6 ชม. / กระเทือนหรือกดแล้วเจ็บ",
    choices: {
      A: { text: "ใช่", next: "q_two1_1" },
      B: { text: "ไม่", next: "q_two2" }
    }
  },
  q_two1_1: {
    question: "กดตรงท้องน้อยข้างขวาแล้วเจ็บ ?",
    choices: {
      A: { text: "ใช่", next: "result46" },
      B: { text: "ไม่", next: "q_two1_2" }
    }
  },
  q_two1_2: {
    question: "กดเจ็บตรงลิ้นปี่หรือทั่วทั้งท้อง ?",
    choices: {
      A: { text: "ใช่", next: "q_two1_2_1" },
      B: { text: "ไม่", next: "q_two2_1" }
    }
  },
  q_two1_2_1: {
    question: "มีประวัติเป็นโรคกระเพาะ หรือ กินยาแก้ปวดหรือยาชุดมานาน?",
    choices: {
      A: { text: "ใช่", next: "result52" },
      B: { text: "ไม่", next:"result47 "}
    }
  },

  q_two2: {
    question: "หนาวสั่นมาก ?",
    choices: {
      A: { text: "ใช่", next: "q_two2_1" },
      B: { text: "ไม่", next: "q_two3"}
    }
  },
  q_two2_1: {
    question: "กดเจ็บตรงชายโครงข้างขวา ?",
    choices: {
      A: { text: "ใช่", next: "q_two2_1_1" },
      B: { text: "ไม่", next: "q_two2_2"}
    }
  },
  q_two2_1_1: {
    question: "กดเจ็บเพียงจุดเล็ก ๆ หรือมีประวัติถ่ายเป็นมูกเลือด ?",
    choices: {
      A: { text: "ใช่", next: "result39" },
      B: { text: "ไม่", next: "result40_1"}
    }
  },
  q_two2_2: {
    question: "เคาะเจ็บที่สีข้าง และ ปัสสาวะขุ่น ?",
    choices: {
      A: { text: "ใช่", next: "result137" },
      B: { text: "ไม่", next: "q_two2_3"}
    }
  },
  q_two2_3: {
    question: "ปวดตรงท้องน้อยในผู้หญิง และ ตกขาวมีกลิ่น ?",
    choices: {
      A: { text: "ใช่", next: "result147" },
      B: { text: "ไม่", next: "resultNon"}
    }
  },

  q_two3: {
    question: "ท้องเดิน ?",
    choices: {
      A: { text: "ใช่", next: "q_seven" },
      B: { text: "ไม่", next: "q_two4"}
    }
  },

  q_two4: {
    question: "มีไข้เกิน 7 วัน ?",
    choices: {
      A: { text: "ใช่", next: "result224" },
      B: { text: "ไม่", next: "q_two5"}
    }
  },

  q_two5: {
    question: "ไข้สูงตลอดเวลา ? และ ทดสอบทูร์นิเคต์ให้ผลบวก ?",
    description : "ทูร์นิเคต์ (Tourniquet test) : เป็นการตรวจที่ทำได้ยากและไม่สามารถทำเองที่บ้านได้ ส่วนใหญ่ต้องให้พยาบาลหรือแพทย์เป็นผู้ตรวจ ดังนั้นหากไปโรงพยาบาลจะสามารถทราบผลจากการตรวจนี้ได้ทันที",
    choices: {
      A: { text: "ใช่", next: "result225" },
      B: { text: "ไม่", next: "resultfinal"}
    }
  },

  // ปวดผูก
  q_three: {
    question: "ปวดท้องหรืออาเจียนรุนแรง ?",
    choices: {
      A: { text: "ใช่", next: "result54" },
      B: { text: "ไม่", next: "q_three1"}
    }
  },

  q_three1: {
    question: "น้ำหนักลดฮวบ หรือ มีอาการท้องผูกสลับท้องเดินเป็น ๆ หาย ๆ นานกว่า 1 เดือน ?",
    choices: {
      A: { text: "ใช่", next: "result237_13" },
      B: { text: "ไม่", next: "q_three1"}
    }
  },

  q_three2: {
    question: "ถ่ายเป็นเลือดสด ?",
    choices: {
      A: { text: "ใช่", next: "q_three2_1" },
      B: { text: "ไม่", next: "q_three3"}
    }
  },
  q_three2_1: {
    question: "มีอาการอย่างใดอย่างหนึ่งต่อไปนี้ ?",
    description: "เป็นลายติดอุจจาระ / เปื้อนกระดาษชำระ / ออกเป็นหยดในโถส้วมเฉพาะเวลาเบ่งถ่ายอุจจาระ",
    choices: {
      A: { text: "ใช่", next: "q_three2_1_1" },
      B: { text: "ไม่", next: "q_three2_1_2"}
    }
  },
  q_three2_1_1: {
    question: "เจ็บปวดเวลาถ่ายหรือพบรอยปริที่ปากทวารหนัก ?",
    choices: {
      A: { text: "ใช่", next: "result58" },
      B: { text: "ไม่", next: "result58_1"}
    }
  },
  q_three2_1_2: {
    question: "เกิดหลังลงแช่น้ำในห้วยหนองคลองบึง ?",
    choices: {
      A: { text: "ใช่", next: "result223" },
      B: { text: "ไม่", next: "q_three3"}
    }
  },

  q_three3: {
    question: "มีประวัติกินยาหรือ ดื่มชา กาแฟ ?",
    choices: {
      A: { text: "ใช่", next: "result51" },
      B: { text: "ไม่", next: "q_three4"}
    }
  },

  q_three4: {
    question: "มีอาการมากกว่า 12 สัปดาห์ในช่วงเวลา 12 เดือนที่ผ่านมาหรือมีความเครียด วิตกกังวล นอนไม่หลับ ?",
    choices: {
      A: { text: "ใช่", next: "result88" },
      B: { text: "ไม่", next: "resultfinal"}
    }
  },

  // ปวดแบบเป็น ๆ หาย ๆ
  q_four: {
    question: "ปวดไม่เหมือนที่เคยเป็น ?",
    choices: {
      A: { text: "ใช่", next: "q_one" },
      B: { text: "ไม่", next: "q_four1"}
    }
  },

  q_four1: {
    question: "มีไข้ ?",
    choices: {
      A: { text: "ใช่", next: "q_two" },
      B: { text: "ไม่", next: "q_four2"}
    }
  },

  q_four2: {
    question: "ปวดตรงลิ้นปี่ หรือยอดอก ?",
    choices: {
      A: { text: "ใช่", next: "q_four2_1" },
      B: { text: "ไม่", next: "q_four3"}
    }
  },
  q_four2_1: {
    question: "ปวดเค้นหรือจุกแน่นและร้าวไปที่ขากรรไกรนานครั้งละ 2-3 นาที (ไม่เกิน15นาที) ?",
    choices: {
      A: { text: "ใช่", next: "result96" },
      B: { text: "ไม่", next: "q_four2_2"}
    }
  },
  q_four2_2: {
    question: "ปวดแสบเวลาหิว หรือหลังกินข้าวอิ่ม หรือปวดตอนดึก ?",
    choices: {
      A: { text: "ใช่", next: "result49" },
      B: { text: "ไม่", next: "q_four2_3"}
    }
  },
  q_four2_3: {
    question: "แสบตรงยอดอก แสบร้าวจากยอดอกไปถึงคอหอย หรือเรอเปรี้ยวขึ้นคอหอย ?",
    choices: {
      A: { text: "ใช่", next: "result49_1" },
      B: { text: "ไม่", next: "q_four3"}
    }
  },
  q_four3: {
    question: "ปวดบิดเป็นพัก ๆ ?",
    description: "ปวดท้องบิด= ปวดท้องบีบ ๆ เป็นพัก ๆ เหมือนตอนท้องเสียหรือปวดอุจจาระ",
    choices: {
      A: { text: "ใช่", next: "q_four3_1" },
      B: { text: "ไม่", next: "q_four4"}
    }
  },
  q_four3_1: {
    question: "ปวดบริเวณใต้ชายโครงขวาหลังกินอาหารมัน ๆ ?",
    choices: {
      A: { text: "ใช่", next: "result40" },
      B: { text: "ไม่", next: "q_four3_2"}
    }
  },
  q_four3_2: {
    question: "ปวดที่ท้องน้อยหรือสีข้าง และร้าวไปที่อัณฑะหรือช่องคลอดข้างเดียวกัน ?",
    choices: {
      A: { text: "ใช่", next: "result139" },
      B: { text: "ไม่", next: "q_four3_3"}
    }
  },
  q_four3_3: {
    question: "ปวดท้องน้อยเวลามีประจำเดือน ?",
    choices: {
      A: { text: "ใช่", next: "result150" },
      B: { text: "ไม่", next: "q_four4"}
    }
  },
  q_four4: {
    question: "เกิดขึ้นในเด็ก ?",
    choices: {
      A: { text: "ใช่", next: "q_four4_1" },
      B: { text: "ไม่", next: "q_four5"}
    }
  },
  q_four4_1: {
    question: "ถ่ายหรืออาเจียนเป็นตัวไส้เดือน หรือ สงสัยเป็นพยาธิ ?",
    choices: {
      A: { text: "ใช่", next: "result230" },
      B: { text: "ไม่", next: "q_four5"}
    }
  },
  q_four5: {
    question: "คนที่ทำงานเกี่ยวกับตะกั่ว หรือ เด็กเล่นสี/สัมผัสสารตะกั่ว ?",
    choices: {
      A: { text: "ใช่", next: "result220" },
      B: { text: "ไม่", next: "q_four6"}
    }
  },
  q_four6: {
    question: "มีความเครียด วิตกกังวล ซึมเศร้า หรือนอนไม่หลับ ?",
    choices: {
      A: { text: "ใช่", next: "result88" },
      B: { text: "ไม่", next: "resultfinal"}
    }
  },

//ปวดบิด
  q_five: {
    question: "ปวดท้องรุนแรง กดเจ็บท้องมาก หน้าท้องเกร็งแข็ง อาเจียนเป็นพัก หรือมีภาวะขาดน้ำรุนแรง ?",
    choices: {
      A: { text: "ใช่", next: "q_five1_1" },
      B: { text: "ไม่", next: "q_five2"}
    }
  },
  q_five1_1: {
    question: "พบในเด็กเล็ก ?",
    choices: {
      A: { text: "ใช่", next: "result54_1" },
      B: { text: "ไม่", next: "result36_1_2"}
    }
  },

  q_five2: {
    question: "น้ำหนักลดฮวบ ซีด ดีซ่าน ถ่ายนานกว่า 2 สัปดาห์ เป็น ๆ หาย ๆ เรื้อรังหรือคลำได้ก้อนในท้อง ?",
    choices: {
      A: { text: "ใช่", next: "result327_13" },
      B: { text: "ไม่", next: "q_five3"}
    }
  },
  
  q_five3: {
    question: "ทวารหนักโผล่ในเด็ก ?",
    choices: {
      A: { text: "ใช่", next: "result234" },
      B: { text: "ไม่", next: "q_five4"}
    }
  },

  q_five4: {
    question: "อุจจาราเหม็นเหมือนหัวกุ้งเน่า กินยารักษาบิดชิเกลลาแล้วไม่ดีขึ้น หรือตับโตกดแล้วเจ็บ ?",
    choices: {
      A: { text: "ใช่", next: "result36_2" },
      B: { text: "ไม่", next: "q_five5"}
    }
  },

  q_five5: {
    question: "มีไข้และถ่ายเป็นน้ำนำมาก่อน ?",
    choices: {
      A: { text: "ใช่", next: "result36_1" },
      B: { text: "ไม่", next: "resultfinal"}
    }
  },

//ปวดท้องน้อยในผู้หญิงวัยเจริญพันธุ์
  q_six: {
    question: "ปวดที่บริเวณใต้สะดือลงมา ?",
    choices: {
      A: { text: "ใช่", next: "q_one" },
      B: { text: "ไม่", next: "q_six2"}
    }
  },

  q_six2: {
    question: "มีอาการอย่างใดอย่างหนึ่งต่อไปนี้ ?",
    description: "ปวดรุนแรง / หน้าท้องแข็งเกร็ง / ปวดติดต่อกันนานเกิน 6 ชั่วโมง / เหงื่อออก หน้าซีด ตัวเย็น / ความดันและชีพจรเบาเร็ว",
    choices: {
      A: { text: "ใช่", next: "q_six2_1" },
      B: { text: "ไม่", next: "q_six3"}
    }
  },
  q_six2_1: {
    question: "กดเจ็บตรงท้องน้อยช่วงขวา ?",
    choices: {
      A: { text: "ใช่", next: "result46_147" },
      B: { text: "ไม่", next: "q_six2_2"}
    }
  },
  q_six2_2: {
    question: "กดเจ็บตรงท้องน้อยข้างซ้ายหรือทั้ง2ข้าง และ มีไข้สูง ?",
    choices: {
      A: { text: "ใช่", next: "result147" },
      B: { text: "ไม่", next: "q_six2_3"}
    }
  },
  q_six2_3: {
    question: "ประจำเดือนขาด ?",
    choices: {
      A: { text: "ใช่", next: "q_six2_3_1" },
      B: { text: "ไม่", next: "result153_237"}
    }
  },
  q_six2_3_1: {
    question: "ตกเลือดทางช่องคลอดและมีเศษเนื้อเศษรกออกมา ?",
    choices: {
      A: { text: "ใช่", next: "result156" },
      B: { text: "ไม่", next: "q_six2_3_2"}
    }
  },
  q_six2_3_2: {
    question: "ประจำเดือนขาดไม่เกิน 3 เดือนและลุกนั่งจะเป็นลม ?",
    choices: {
      A: { text: "ใช่", next: "result156_2" },
      B: { text: "ไม่", next: "q_six_2_3_3"}
    }
  },
  q_six2_3_3: {
    question: "อายุครรภ์มากกว่า 6 เดือนและมดลูกแข็งเกร็ง ?",
    choices: {
      A: { text: "ใช่", next: "result160" },
      B: { text: "ไม่", next: "resultNon"}
    }
  },

  q_six3: {
    question: "มีไข้ ?",
    choices: {
      A: { text: "ใช่", next: "q_six3_1" },
      B: { text: "ไม่", next: "q_six4"}
    }
  },
  q_six3_1: {
    question: "หนาวสั่น ปัสสาวะขุ่น และเคาะเจ็บที่สีข้าง ?",
    choices: {
      A: { text: "ใช่", next: "result137" },
      B: { text: "ไม่", next: "q_six3_2"}
    }
  },
  q_six3_2: {
    question: "กดเจ็บตรงท้องน้อยข้างขวา ?",
    choices: {
      A: { text: "ใช่", next: "result46_147" },
      B: { text: "ไม่", next: "resultNon_2"}
    }
  },

  q_six4: {
    question: "ปวดบิดเป็นพัก ๆ ?",
    description: "ปวดท้องบิด= ปวดท้องบีบ ๆ เป็นพัก ๆ เหมือนตอนท้องเสียหรือปวดอุจจาระ",
    choices: {
      A: { text: "ใช่", next: "q_six4_1" },
      B: { text: "ไม่", next: "resultfinal"}
    }
  },
  q_six4_1: {
    question: "ครรภ์แก่และมีลักษณะแบบปวดท้องคลอด ?",
    choices: {
      A: { text: "ใช่", next: "result_gb" },
      B: { text: "ไม่", next: "q_six4_2"}
    }
  },
  q_six4_2: {
    question: "ปวดท้องน้อยตรงสีข้างและร้าวไปที่ช่องคลอดข้างเดียวกัน ?",
    choices: {
      A: { text: "ใช่", next: "result139" },
      B: { text: "ไม่", next: "q_six4_3"}
    }
  },
  q_six4_3: {
    question: "ปวดเวลามีประจำเดือน ?",
    choices: {
      A: { text: "ใช่", next: "q_six4_3_1" },
      B: { text: "ไม่", next: "resultfinal"}
    }
  },
  q_six4_3_1: {
    question: "ปวดรุนแรงมีประจำเดือนออกมากหรือกะปริดกะปรอย หรือ มีบุตรยาก?",
    choices: {
      A: { text: "ใช่", next: "result152_153" },
      B: { text: "ไม่", next: "result150"}
    }
  },

//ท้องเดิน
  q_seven: {
    question: "มีภาวะขาดน้ำรุนแรง หรือ ช็อก?",
    choices: {
      A: { text: "ใช่", next: "result32" },
      B: { text: "ไม่", next: "q_seven2"}
    }
  },
  q_seven2: {
    question: "เป็นหลังกินปลาปักเป้า/แมงดาถ้วย/คางคก/เห็ดป่า/เนื้อหมูดิบ/อาหารที่บรรจุภาชนะที่ปิดมิดชิด/ยาฆ่าแมลง?",
    description: "มีอาการเหล่านี้:หนังตาตก/เจ็บปวดตามกล้ามเนื้อ/เห็นภาพซ้อน/กล้ามเนื้ออ่อนแรง/น้ำลายฟูมปาก/ชาปากและลิ้น",
    choices: {
      A: { text: "ใช่", next: "result67_1" },
      B: { text: "ไม่", next: "q_seven3" }
    }
  },
  q_seven3: {
    question: "มีไข้ ?",
    choices: {
      A: { text: "ใช่", next: "q_seven3_1" },
      B: { text: "ไม่", next: "q_seven4" }
    }
  },
  q_seven3_1: {
    question: "กดเจ็บตรงท้องน้อยข้างขวา ?",
    choices: {
      A: { text: "ใช่", next: "result46" },
      B: { text: "ไม่", next: "q_seven3_2" }
    }
  },
  q_seven3_2: {
    question: "เจ็บปวดตามกล้ามเนื้อมากหลังกินแหนมหรือลาบหมู ?",
    choices: {
      A: { text: "ใช่", next: "result235" },
      B: { text: "ไม่", next: "q_seven3_3" }
    }
  },
  q_seven3_3: {
    question: "ปวดบิดเป็นพัก ๆ หรือ อาเจียน ?",
    description: "ปวดท้องบิด= ปวดท้องบีบ ๆ เป็นพัก ๆ เหมือนตอนท้องเสียหรือปวดอุจจาระ",

    choices: {
      A: { text: "ใช่", next: "result34_1" },
      B: { text: "ไม่", next: "q_seven3_2" }
    }
  },
  q_seven4: {
    question: "ถ่ายเป็นมูกหรือมูกปนเลือด ?",
    choices: {
      A: { text: "ใช่", next: "q_five" },
      B: { text: "ไม่", next: "q_seven5" }
    }
  },

  q_seven5: {
    question: "ถ่ายเป็นน้ำหรือถ่ายเหลวมีกลิ่นเหม็นจัด ?",
    choices: {
      A: { text: "ใช่", next: "result32_2" },
      B: { text: "ไม่", next: "q_seven6" }
    }
  },
  q_seven6: {
    question: "มีลมพิษ ผื่นคัน หรือผิวหนังบวมคันร่วมด้วย หรือ มีอาการกำเริบเมื่อกินอาหารที่แพ้ ?",
    description: "เช่น นมวัว ไข่ กุ้ง หอย ปู ปลา ถั่วลิสง",
    choices: {
      A: { text: "ใช่", next: "result_f" },
      B: { text: "ไม่", next: "q_seven7" }
    }
  },

  q_seven7: {
    question: "ปวดบิดท้องเป็นพัก ๆ อาเจียน ถ่ายรุนแรง หรือ เป็นพร้อมกันหลายคน?",
    description: "ปวดท้องบิด= ปวดท้องบีบ ๆ เป็นพัก ๆ เหมือนตอนท้องเสียหรือปวดอุจจาระ",

    choices: {
      A: { text: "ใช่", next: "q_seven7_1" },
      B: { text: "ไม่", next: "q_seven8" }
    }
  },
  q_seven7_1: {
    question: "มีประวัติสัมผัสผู้ป่วยอหิวาต์ หรือ อยู่ในถิ่นที่มีการระบาดของโรคนี้ ?",
    choices: {
      A: { text: "ใช่", next: "result35" },
      B: { text: "ไม่", next: "q_seven7_2" }
    }
  },
  q_seven7_2: {
    question: "ปากและลิ้นชาหรือรู้สึกเสียวแปลบ ๆ เกิดอาการหลังกินปลา/หอยทะเล ?",
    choices: {
      A: { text: "ใช่", next: "result219_2" },
      B: { text: "ไม่", next: "result34_1_1" }
    }
  },
  q_seven8: {
    question: "เป็นหลังกินยาถ่าย ยาต้านกรด ยาปฎิชีวนะ หรือยาอื่น ๆ ?",
    choices: {
      A: { text: "ใช่", next: "result_medi" },
      B: { text: "ไม่", next: "resultfinal" }
    }
  },




};

const results = {
  
  result54: "กระเพาะลำไส้อุดกั้น",
  result40: "นิ่วน้ำดี",
  result139: "นิ่วท่อไต",
  result96: "หัวใจขาดเลือดชั่วขณะ",
  result96_1: "กล้ามเนื้อหัวใจตาย",
  result49: "อาหารไม่ย่อย",
  result49_1: "กรดไหลย้อน",
  result188: "ปวดประสาทหลังเป็นงูสวัด",
  result188_1: "งูสวัด",

  result46: "ไส้ติ่งอักเสบ",
  result52: "กระเพาะอาหารทะลุ",
  result47: "เยื่อบุช่องท้องอักเสบ",
  result39: "ฝีตับอะมีบา",
  result40_1: "ถุงน้ำดีอักเสบ",
  result137: "กรวยไตอักเสบเฉียบพลัน",
  result147: "ปีกมดลูกอักเสบ/เยื่อบุมดลูกอักเสบ",

  resultNon: "หากมีอาการปวดท้องต่อเนื่อง ควรดูแลอาการเบื้องต้นโดยบุคลากรทางการแพทย์",
  resultNon_2 : "รักษาตามอาการ",
  result_medi : "สาเหตุจากยา",
  
  result224: "มาราเรีย/ไทฟอยด์",
  result225: "ไข้เลือดออก",
  result237_13: "พบความผิดปกติที่อาจสัมพันธ์กับโรคเรื้อรังหรือโรคสำคัญ ควรเข้ารับการตรวจเพิ่มเติมโดยแพทย์",
  result58: "ริดสีดวงทวาร" ,
  result58_1: "แผลปริที่ทวารหนัก",
  result51: "ท้องผูกจากการกินยา",
  result88: "โรคกังวลทั่วไป / ซึมเศร้า / โรคลำไส้แปรปรวน",
  result250: "ปวดประจำเดือน",
  result230: "โรคพยาธิไส้เดือน",
  result220: "ตะกั่วเป็นพิษ",

  result327_13: "พบความผิดปกติที่อาจสัมพันธ์กับโรคเรื้อรังหรือโรคสำคัญ ควรเข้ารับการตรวจเพิ่มเติมโดยแพทย์",

  result54_1: "ลำไส้กลืนกันเอง",
  result36_1_2: "บิดชิเกลลา/บิดอะมีบา",
  result36_2 : "บิดอะมีบา",
  result36_1: "บิดชิเกลลา",
  result234: "โรคพยาธิแส้ม้า/บิดชิเกลลา",
  
  result46_147: "ไส้ติ่งอักเสบ / ปีกมดลูกอักเสบ",
  result156: "แท้งบุตร",
  result153_237: "เนื้องอก/ถุงน้ำรังไข่/มะเร็งรังไข้ที่มีภาวะบิดขั้ว",
  result156_2: "ครรภ์นอกมดลูก",
  result160: "รอลอกตัวก่อนกำหนด",
  result_gb: "ปวดท้องคลอด",
  result152_153: "เนื้องอกมดลูก/เยื่อบุมดลูกต่างที่",
  result150: "ปวดประจำเดือน",

  result32: "ท้องเดินชนิดรุนแรง",
  result67_1:"โบทูลิซึม/พิษยาฆ่าแมลง/พิษสัตว์/พิษเห็ด/โรคพยาธิทริคิโนซิส",
  result235: "โรคพยาธิทริคิโนซิส",
  result34_1: "อาหารเป็นพิษจากเชื้อโรค/บิดชิเกลลา/ท้องเดินจากเชื้อไวรัสโรตา",
  result32_1: "ท้องเดินจากเชื้อไกอาร์เดีย",
  result_f : "แพ้อาหาร",
  result35: "อหิวาต์",
  result219_2: "พิษปลาทะเล/พิษหอยทะเล",
  result34_1_1: "อาหารเป็นพิษจากเชื้อโรค",


  resultfinal: "หากมีอาการปวดท้องต่อเนื่อง ควรดูแลอาการเบื้องต้นโดยบุคลากรทางการแพทย์"
};

let currentQuestion = "q1";
let userAnswers = [];
function showQuestion(id) {
  const container = document.getElementById("choices");
  const questionEl = document.getElementById("question");
  const descEl = document.getElementById("description");
  const resultEl = document.getElementById("result");
  const backBtn = document.getElementById("backBtn");
  const footer = document.getElementById("footer");

  

  container.innerHTML = "";
  resultEl.innerHTML = "";
  descEl.innerHTML = "";

  if (id.startsWith("result")) {
    questionEl.innerHTML = "โรคที่ตรวจพบ :";
    resultEl.innerHTML = results[id];
    backBtn.style.display = userAnswers.length > 0 ? "inline-block" : "none";
    footer.style.display = "block";   // ✅ แสดง footer
    return;
  }

  const q = quizData[id];
  currentQuestion = id;
  questionEl.innerHTML = q.question;
  descEl.innerHTML = q.description || "";

  for (const key in q.choices) {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.innerText = q.choices[key].text;
    btn.onclick = () => {
      userAnswers.push({ questionId: id, answer: q.choices[key].text });
      showQuestion(q.choices[key].next);
    };
    container.appendChild(btn);
  }

  backBtn.style.display = userAnswers.length > 0 ? "inline-block" : "none";
  footer.style.display = "none";  // ❌ ซ่อน footer ตอนที่ยังไม่ใช่ result
}

// ฟังก์ชันกดย้อนกลับ
document.getElementById("backBtn").onclick = () => {
  if (userAnswers.length > 0) {
    // เอาคำตอบล่าสุดออก
    const lastAnswer = userAnswers.pop();

    // กลับไปยังคำถามที่เลือกก่อนหน้านี้ (แค่ 1 ขั้น)
    showQuestion(lastAnswer.questionId);
  } else {
    // ถ้าไม่มีคำตอบใน stack ให้กลับไป q1
    showQuestion("q1");
  }
};


showQuestion(currentQuestion);

