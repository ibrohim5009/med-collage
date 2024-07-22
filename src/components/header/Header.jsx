import React from 'react'
import anatomiya from "../../image/anatomiya.jpg"
import "../../css/header.css"
import { BiFingerprint } from "react-icons/bi";
import { LuGift,LuAtom } from "react-icons/lu";

const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="images">
                    <img src={anatomiya} alt="" />
                </div>
                <div>
                    <div className="tittle">
                        <h3>Afzalliklar</h3>
                        <p>Buxoro innovatsion tibbiyot texnikumida o'qishning bir qator afzalliklari mavjud.</p>
                    </div>
                    <div className="div">
                        <div className='gap'>
                            <div className="ib">
                                <BiFingerprint className='bi' />
                            </div>
                            <div>

                                <li>
                                    <a href="/">Zamonaviy uslub va texnologiyalar</a>
                                </li>
                                <p>Ta'lim muassasamizda darslar yangi pedagogik texnologiyalar innovatsion texnik
                                    vositalar yordamida tajribali ustozlar tomonidan olib boriladi</p>
                            </div>
                        </div>
                        <div className='gap'>
                            <div className="ib">
                                <LuGift className='bi' />
                            </div>
                            <div>

                                <li>
                                    <a href="/">Zamonaviy uslub va texnologiyalar</a>
                                </li>
                                <p>Ta'lim muassasamizda darslar yangi pedagogik texnologiyalar innovatsion texnik
                                    vositalar yordamida tajribali ustozlar tomonidan olib boriladi</p>
                            </div>
                        </div>
                        <div className='gap'>
                            <div className="ib">
                                <LuAtom className='bi' />
                            </div>
                            <div>
                                <li>
                                    <a href="/">Zamonaviy uslub va texnologiyalar</a>
                                </li>
                                <p>Ta'lim muassasamizda darslar yangi pedagogik texnologiyalar innovatsion texnik
                                    vositalar yordamida tajribali ustozlar tomonidan olib boriladi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header