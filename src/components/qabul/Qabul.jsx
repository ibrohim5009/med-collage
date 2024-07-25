import React, { useState } from 'react';
import "../../css/qabul.css";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Qabul = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Nodavlat texnikumning diplomi o'tadimi?",
      answer: "O'zbekiston Respublikasi 'Ta'lim to'g'risida'gi qonunning 31-moddasiga muvofiq, Davlat ta'lim standartlari va davlat ta'lim talablariga muvofiq ta'lim xizmatlarini ko'rsatuvchi nodavlat ta'lim tashkilotlari bitiruvchilarga davlat tomonidan tasdiqlangan namunadagi ta'lim to'g'risidagi hujjatlarni beradi. Ya'ni, tegishli litsenziyaga ega nodavlat ta'lim tashkilotlari tomonidan berilgan diplomlar davlat ta'lim muassasalari diplomlari bilan teng darajada qabul qilinadi."
    },
    {
      question: "Bir o'quv yili uchun kontrakt to'lovi qancha?",
      answer: "Eng kam mehnatga haq to'lash miqdorining 13 barobariga teng. (12.740.000 so'm)"
    },
    {
      question: "Kontrakt to'lovini bo'lib to'lasam bo'ladimi?",
      answer: "Ha, albatta. Birinchi va ikkinchi semestr boshida 10 kun ichida to'lashingiz kerak."
    },
    {
      question: "Kontrakt to'lovi uchun ta'lim krediti olish mumkinmi?",
      answer: "Ha albatta, batafsil ma'lumotni istalgan bankdan yoki texnikum buxgalteriya bo'limidan olishingiz mumkin."
    }
  ];

  return (
    <div className="container">
      <h1 className="titless">Qabul ma'lumotlari</h1>
      <p className="subtitle">Kerakli hujjatlar ro'yxati quyida keltirilgan</p>
      <div className="document">
        <h1>O'rta maxsus diplom yoki 11-sinf shahodatnomasi</h1>
      </div>
      <div className="document">
        <h1>Passport nusxasi</h1>
      </div>
      <h1 className="faq-title">Ko'p so'ralgan savollar</h1>
      <p className="faq-subtitle">Talabalar va abiturientlar tomonidan eng ko'p berilgan savollar quyida keltirilgan.</p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <h2>
            {faq.question}
            <span>{activeIndex === index ? <IoMdArrowDropdown className='io'/> : <MdOutlineArrowDropUp className='md'/>}</span>
          </h2>
          {activeIndex === index && <div className="faq-content">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Qabul;
