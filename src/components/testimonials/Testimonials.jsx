import React from 'react'
import { FaUserMd,FaRegHospital,FaFlask,FaAward } from "react-icons/fa";
import "../../css/testimonials.css"

const Testimonials = () => {
    return (
        <div className='background'>
            <div className="wrap">
                <div className="card">
                    <div className="count_title">
                        <div className="ICONT">
                            <FaUserMd size={25} className="icon_count" />
                        </div>
                        <h1>85</h1>
                        <p>Professor-o'qituvchilar</p>
                    </div>
                </div>
                <div className="card">
                    <div className="count_title">
                        <div className="ICONT">
                            <FaRegHospital size={25} className="icon_count" />
                        </div>
                        <h1>85</h1>
                        <p>Professor-o'qituvchilar</p>
                    </div>
                </div>
                <div className="card">
                    <div className="count_title">
                        <div className="ICONT">
                            <FaFlask size={25} className="icon_count" />
                        </div>
                        <h1>85</h1>
                        <p>Professor-o'qituvchilar</p>
                    </div>
                </div>   <div className="card">
                    <div className="count_title">
                        <div className="ICONT">
                            <FaAward size={25} className="icon_count" />
                        </div>
                        <h1>85</h1>
                        <p>Professor-o'qituvchilar</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Testimonials