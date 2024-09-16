import React from "react";
import "./FooterStyle.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="email">
                            <h4>Andre Butarbutar</h4>
                            <p>andrebutarbutar@students.unnes.ac.id</p>
                        </div>

                        <div className="location">
                            <div>
                                <p>Samarinda | Semarang</p>
                                <p>Indonesia</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <h4>About the Project</h4>
                        <p>Sebuah project untuk melihat pengaruh teknik <em>oversampling</em> dan <em>feature selection</em> pada sebuah model Random Forest</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;