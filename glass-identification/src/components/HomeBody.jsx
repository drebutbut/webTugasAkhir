import React from "react";
import "./HomeBodyStyle.css";
import {Link} from 'react-router-dom';

const HomeBody = () => {
    return (
        <>
            <div className="homeBody">
                <h1>Glass Identification.</h1>
                <p>Diambil dari penelitian dengan judul 'Optimasi Algoritma <span className="pBold">Random Forest</span> untuk Identifikasi Jenis Kaca menggunakan <span className="pBold">SMOTE, Recurseive Feature Selection, dan RandomizedSearchCV</span>'.</p>

                <div className="btn-group">
                    <Link to='/project' className="btn">Pelajari lebih lanjut</Link>
                    <Link to='/predict' className="btn">Coba model</Link>
                </div>
            </div>
        </>
    )
}

export default HomeBody;