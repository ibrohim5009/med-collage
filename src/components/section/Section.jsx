import React from 'react';
import { BiReceipt } from "react-icons/bi";
import "../../css/sections.css";

const Section = () => {
  return (
    <div>
      <div className="all">
        <div className="fleux">
          <div id="contains">
            <h3>Nega BITT ni tanlashadi?</h3>
          </div>
          <div className="contains">
            <div className="contain">
              <BiReceipt className='i'/>
              <h4>Qabul jarayoni</h4>
              <p>Hujjat topshirish qulay va soddalashtirilgan, Imtihonlar shaffof tarzda tashkil qilingan.</p>
            </div>
          </div>
          <div className="contains">
            <div className="contain">
              <BiReceipt className='i'/>
              <h4>Qabul jarayoni</h4>
              <p>Hujjat topshirish qulay va soddalashtirilgan, Imtihonlar shaffof tarzda tashkil qilingan.</p>
            </div>
          </div>
          <div className="contains">
            <div className="contain">
              <BiReceipt className='i'/>
              <h4>Qabul jarayoni</h4>
              <p>Hujjat topshirish qulay va soddalashtirilgan, Imtihonlar shaffof tarzda tashkil qilingan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
