import React from "react";
import "./ProjectBodyStyle.css";
import "./HomeBodyStyle.css";
import {Link} from 'react-router-dom';

const ProjectBody = () => {
    return (
        <>
            <div className="homeBody">
                <div className="opening">
                    <h1>How does this thing work?</h1>
                    <p>Cari tahu lebih banyak tentang cara penelitian</p>
                </div>

                <div className="btn-group">
                    <Link to='/project/how' className="btn">Cara kerja penelitian</Link>
                    <Link to='/project/what' className="btn">Teknologi yang digunakan</Link>
                    <Link to='/project/result' className="btn">Hasil penelitian</Link>
                </div>
            </div>
        </>
    )
}

export default ProjectBody;