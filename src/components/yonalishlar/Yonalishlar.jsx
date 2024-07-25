import React, { useState } from 'react';
import '../../css/yonalishlar.css';

function Yonalishlar() {
  const [activeTab, setActiveTab] = useState('hamshiralik-3');

  const renderContent = () => {
    switch (activeTab) {
      case 'hamshiralik-3':
        return (
          <div className="tab-content">
            <h2 className='h2'>Hamshiralik ishi - 3 yil</h2>
            <p className='p'>O’qish muddati – 3 yillik</p>
            <p className='p'>O’qish kontrakti - 9 900 000 so’m</p>
            <p className='f'>-Barcha davolash-profilaktika muassasalarida, QVP (qishloq vrachlik punkti) larda, tuman tibbiyot birlashmalari, viloyat va Respublika tibbiyot muassasalarida; - Respublika shoshilinch tibbiy yordam ilmiy markazi va uning filiallarida; - Nodavlat davolash muassasalarida ish faoliyatini olib boradilar.</p>
          </div>
        );
      case 'hamshiralik-2':
        return (
          <div className="tab-content">
            <h2 className='h2'>Hamshiralik ishi - 2 yil</h2>
            <p className='p'>O’qish muddati – 2 yillik</p>
            <p className='p'>O’qish kontrakti - 7 500 000 so’m</p>
            <p className='f'>- Barcha davolash-profilaktika muassasalarida, QVP (qishloq vrachlik punkti) larda, tuman tibbiyot birlashmalari, viloyat va Respublika tibbiyot muassasalarida ish faoliyatini olib boradilar.</p>
          </div>
        );
      case 'farmatsiya-3':
        return (
          <div className="tab-content">
            <h2 className='h2'>Farmatsiya - 3 yil</h2>
            <p className='p'>O’qish muddati – 3 yillik</p>
            <p className='p'>O’qish kontrakti - 9 500 000 so’m</p>
            <p className='f'>- Barcha dorixonalar, farmatsevtika kompaniyalari va dori-darmon ishlab chiqaruvchi zavodlarda ish faoliyatini olib boradilar.</p>
          </div>
        );
      case 'feldsherlik-3':
        return (
          <div className="tab-content">
            <h2 className='h2'>Fel'dsherlik ishi - 3 yil</h2>
            <p className='p'>O’qish muddati – 3 yillik</p>
            <p className='p'>O’qish kontrakti - 9 900 000 so’m</p>
            <p className='f'>-Barcha davolash-profilaktika muassasalarida, QVP (qishloq vrachlik punkti) larda, tuman tibbiyot birlashmalari, viloyat va Respublika tibbiyot muassasalarida; - Respublika shoshilinch tibbiy yordam ilmiy markazi va uning filiallarida; - Nodavlat davolash muassasalarida ish faoliyatini olib boradilar.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="yonalishlar">
      <h1 className='title_item'>Yo'nalishlar</h1>
      <h3 className='avetsiy'>AVITSENNA tibbiyot texnikumida 3 xil yo'nalish mavjud.</h3>
      <div className="content-container">
        <div className="navbarss">
          <li><a href="#!" className={activeTab === 'hamshiralik-3' ? 'active' : ''} onClick={() => setActiveTab('hamshiralik-3')}>Hamshiralik ishi - 3 yil</a></li>
          <li><a href="#!" className={activeTab === 'hamshiralik-2' ? 'active' : ''} onClick={() => setActiveTab('hamshiralik-2')}>Hamshiralik ishi - 2 yil</a></li>
          <li><a href="#!" className={activeTab === 'farmatsiya-3' ? 'active' : ''} onClick={() => setActiveTab('farmatsiya-3')}>Farmatsiya - 3 yil</a></li>
          <li><a href="#!" className={activeTab === 'feldsherlik-3' ? 'active' : ''} onClick={() => setActiveTab('feldsherlik-3')}>Fel'dsherlik ishi - 3 yil</a></li>
        </div>
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Yonalishlar;
