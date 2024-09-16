import React from "react";
import {useState} from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import "./HomeBodyStyle.css";
import "./ModelStyle.css";

const ModelComponent = () => {
    const [formData, setFormData] = useState({
        RI: '',
        Na: '',
        Mg: '',
        Al: '',
        Si: '',
        K : '',
        Ca: '',
        Ba: '',
        Fe: '',
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;

        const numericValue = value === '' ? '' : parseFloat(value);

        setFormData({
            ...formData,
            [name]: numericValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("handleSubmit test");

        if (Object.values(formData).some(val => val === '')) {
            console.error("Some fields are empty");
            return;
        }
        console.log("Form Data Submitted", formData);

        try {
            console.log("Inside try");
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("Response received", response.data)
            setPrediction(response.data.prediction);
        } catch (error) {
            console.log("Inside catch (error)");
            // console.error("Error sending data to backend: ", error.response ? error.response.data : error.message);

            if (error.response) {
                console.error("Server responded with a status: ", error.response.status);
                console.error("Response data: ", error.response.data);
                console.error("Headers: ", error.response.headers)
            } else if (error.request) {
                console.error("No response received: ", error.request);
            } else {
                console.error("Error message: ", error.message);
            }

            console.error("Config: ", error.config);
        }
    };
    
    return (
        <>
            <div className="homeBody">
                <div className="formBubble">
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tr class="row">
                                <th>
                                    <label htmlFor="RI">Refractive Index</label>
                                </th>
                                <td>
                                    <input type="number" name="RI" value={formData.RI} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="Na">Sodium</label>
                                </th>
                                <td>
                                    <input type="number" name="Na" value={formData.Na} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="Mg">Magnesium</label>
                                </th>
                                <td>
                                    <input type="number" name="Mg" value={formData.Mg} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="Al">Aluminium</label>
                                </th>
                                <td>
                                    <input type="number" name="Al" value={formData.Al} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="Si">Silicon</label>
                                </th>
                                <td>
                                    <input type="number" name="Si" value={formData.Si} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="K">Potassium</label>
                                </th>
                                <td>
                                    <input type="number" name="K" value={formData.K} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="Ca">Calcium</label>
                                </th>
                                <td>
                                    <input type="number" name="Ca" value={formData.Ca} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="Ba">Ba</label>
                                </th>
                                <td>
                                    <input type="number" name="Ba" value={formData.Ba} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="Fe">Iron</label>
                                </th>
                                <td>
                                    <input type="number" name="Fe" value={formData.Fe} onChange={handleChange} />
                                </td>
                            </tr>
                        </table>

                        <div className="buttonDiv">
                            <button type="submit" class="btn">Periksa Jenis Kaca</button>
                        </div>
                    </form>

                    {prediction && (
                        <div>
                            <h3>Prediction Result:</h3>
                            <p>{prediction}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ModelComponent;