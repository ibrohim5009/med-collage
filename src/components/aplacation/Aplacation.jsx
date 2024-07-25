import React, { useState } from 'react';

function ApplicationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        phoneNumber: '',
        education: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', backgroundColor: '#f0f4f7', padding: '30px' }}>
            <form onSubmit={handleSubmit} style={{ width: '1256px', padding: '40px', borderRadius: '8px' }}>
                <h2 style={{ textAlign: 'center', color: '#a00', marginBottom: '30px' }}>ONLAYN ARIZA TOPSHIRING</h2>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        placeholder='Ismingiz'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px', outline: "none", margin: '5px 0', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        placeholder='Familyangiz'
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{ width: '100%', outline: "none", padding: '12px', margin: '5px 0', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        placeholder='Otasining ismi'
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        style={{ width: '100%', outline: "none", padding: '12px', margin: '5px 0', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+998"
                        style={{ width: '100%', outline: "none", padding: '12px', margin: '5px 0', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px', margin: '5px 0', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff', color: '#333' }}
                        required
                    >
                        <option value="">TA'LIM YO'NALISHLARI</option>
                        <option value="Hamshiralik ishi - 2 yil">Hamshiralik ishi - 2 yil</option>
                        <option value="Hamshiralik ishi - 3 yil">Hamshiralik ishi - 3 yil</option>
                        <option value="Farmatsiya - 3 yil">Farmatsiya - 3 yil</option>
                        <option value="Feldsherlik - 3 yil">Feldsherlik - 3 yil</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <button type="submit" style={{ width: "208px", height: "44px", padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
                        ARIZA TOPSHIRISH
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ApplicationForm;
