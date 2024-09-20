import React from "react";
import "./AboutBodyStyle.css";
import "./ProjectBodyStyle.css";

const AboutBody = () => {
    return (
        <>
            <div className="projectBody">
                <h1>About</h1>

                <div className="formBubble">
                    <h3>Author</h3>
                    <table>
                        <tr className="row">
                            <th>Name</th>
                            <td>Butarbutar, Andre Zuriel Hasudungan</td>
                        </tr>
                        <tr className="row">
                            <th>Student ID</th>
                            <td>4611420007</td>
                        </tr>
                        <tr className="row">
                            <th>Email</th>
                            <td>andrebutarbutar@students.unnes.ac.id</td>
                        </tr>
                        <tr className="row">
                            <th>Research Supervisor</th>
                            <td>Budi Prasetyo, S. Si., M. Kom.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AboutBody;