import React from "react";
import "./ProjectBodyStyle.css";
import "./ResultBodyStyle.css";
import {Link} from 'react-router-dom';

const ResultBody = () => {
    return (
        <>
            <div className="projectBody">
                <div className="opening">
                    <h1>How did the research go?</h1>
                    <p>Cari tahu lebih banyak tentang hasil dari penelitian</p>
                </div>
                
                <p>
                    Random Forest dengan SMOTE dan RFE <b><em>mengungguli</em></b> performa dari teknik oversampling lain, SMOTE, dan teknik feature selection lain, ANOVA, baik di accuracy, precision, recall, hingga F1-score.
                </p>

                <div className="accuracy step">
                    <h2>Accuracy</h2>
                    <table className="resultTable">
                        <tr>
                            <th></th>
                            <th>No Oversampling</th>
                            <th>ADASYN</th>
                            <th>SMOTE</th>
                        </tr>
                        <tr>
                            <th>No Feature Selection</th>
                            <td>0.77</td>
                            <td>0.86</td>
                            <td>0.82</td>
                        </tr>
                        <tr>
                            <th>ANOVA</th>
                            <td>0.82</td>
                            <td>0.73</td>
                            <td>0.82</td>
                        </tr>
                        <tr>
                            <th>RFE</th>
                            <td>0.86</td>
                            <td>0.86</td>
                            <td className="bestResult"><b>0.91</b></td>
                        </tr>
                    </table>
                </div>

                <div className="precision step">
                    <h2>Precision</h2>
                    <table className="resultTable">
                        <tr>
                            <th></th>
                            <th>No Oversampling</th>
                            <th>ADASYN</th>
                            <th>SMOTE</th>
                        </tr>
                        <tr>
                            <th>No Feature Selection</th>
                            <td>0.86</td>
                            <td>0.92</td>
                            <td>0.88</td>
                        </tr>
                        <tr>
                            <th>ANOVA</th>
                            <td>0.90</td>
                            <td>0.82</td>
                            <td>0.89</td>
                        </tr>
                        <tr>
                            <th>RFE</th>
                            <td>0.92</td>
                            <td>0.95</td>
                            <td className="bestResult"><b>0.96</b></td>
                        </tr>
                    </table>
                </div>

                <div className="recall step">
                    <h2>Recall</h2>
                    <table className="resultTable">
                        <tr>
                            <th></th>
                            <th>No Oversampling</th>
                            <th>ADASYN</th>
                            <th>SMOTE</th>
                        </tr>
                        <tr>
                            <th>No Feature Selection</th>
                            <td>0.84</td>
                            <td>0.90</td>
                            <td>0.87</td>
                        </tr>
                        <tr>
                            <th>ANOVA</th>
                            <td>0.79</td>
                            <td>0.81</td>
                            <td>0.86</td>
                        </tr>
                        <tr>
                            <th>RFE</th>
                            <td>0.89</td>
                            <td>0.88</td>
                            <td className="bestResult"><b>0.92</b></td>
                        </tr>
                    </table>
                </div>

                <div className="f1score step">
                    <h2>F1-Score</h2>
                    <table className="resultTable">
                        <tr>
                            <th></th>
                            <th>No Oversampling</th>
                            <th>ADASYN</th>
                            <th>SMOTE</th>
                        </tr>
                        <tr>
                            <th>No Feature Selection</th>
                            <td>0.84</td>
                            <td>0.90</td>
                            <td>0.87</td>
                        </tr>
                        <tr>
                            <th>ANOVA</th>
                            <td>0.83</td>
                            <td>0.81</td>
                            <td>0.87</td>
                        </tr>
                        <tr>
                            <th>RFE</th>
                            <td>0.87</td>
                            <td>0.90</td>
                            <td className="bestResult"><b>0.93</b></td>
                        </tr>
                    </table>
                </div>

                <p>
                    Model yang diusulkan juga <b><em>mengungguli</em></b> hasil dari penelitian-penelitian yang telah dilakukan sebelumnya.
                </p>

                <div className="reference step">
                    <h2>Reference</h2>
                    <table className="resultTable">
                        <tr>
                            <th></th>
                            <th>Method</th>
                            <th>Data Set</th>
                            <th>Result</th>
                        </tr>
                        <tr>
                            <th>No Feature Selection</th>
                            <td>0.84</td>
                            <td>0.90</td>
                            <td>0.87</td>
                        </tr>
                        <tr>
                            <th>ANOVA</th>
                            <td>0.83</td>
                            <td>0.81</td>
                            <td>0.87</td>
                        </tr>
                        <tr>
                            <th>RFE</th>
                            <td>0.87</td>
                            <td>0.90</td>
                            <td className="bestResult"><b>0.93</b></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ResultBody;