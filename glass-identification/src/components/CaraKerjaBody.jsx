import React from "react";
import "./ProjectBodyStyle.css";
import {Link} from 'react-router-dom';

const CaraKerjaBody = () => {
    return (
        <>
            <div className="projectBody">
                <div className="opening">
                    <h1>How does this thing work?</h1>
                    <p>Cari tahu lebih banyak tentang cara penelitian</p>
                </div>
                
                <div className="dataset step">
                    <h2>Data Set</h2>
                    <p>
                        Penelitian menggunakan data set <a className="pBold" href="http://archive.ics.uci.edu/dataset/42/glass+identification">Glass Identification</a> milik UC Irvine Machine Learning Repository. Data set yang terdiri dari <span className="pBold">214 baris, 9 fitur, dan 1 label</span> ini tersedia untuk publik.
                    </p>

                    <h3>Missing Value dan Duplicate Data</h3>
                    <p>
                        Data tidak memiliki missing value. Namun, data memiliki satu data duplikat yang ditangani dengan hanya menyimpan satu dari dua data yang terduplikat.
                    </p>
                    
                    <h3>Data Splitting</h3>
                    <p>
                        Data displit menjadi train set dan test set dengan ratio 90:10. Pemilihan ratio dipilih untuk memberikan kesempatan kepada model untuk belajar dari data yang relatif kecil.
                    </p>
                </div>

                <div className="pipeline step">
                    <h2>Pipeline</h2>
                    <p>
                        Data kemudian masuk ke dalam Pipeline
                    </p>

                    <h3>Preprocessor</h3>
                    <p>
                        Tiap-tiap fitur data akan dinilai tingkat kemiringannya menggunakan nilai <i>skew</i>. Data dengan nilai skew negatif (right-skewed) akan diaplikasikan reflect and log transform, sedangkan yang memiliki nilai positif (left-skewed) akan diaplikasikan log transform.
                    </p>

                    <h3>Feature Selection</h3>
                    <p>
                        Fitur-fitur pada data set akan dinilai dan diurutkan menggunakan Recursive Feature Elimination. Jumlah fitur yang akan dipilih akan ditentukan secara otomatis menggunakan RandomizedSearchCV.
                    </p>

                    <h3>Random Forest</h3>
                    <p>
                        Random Forest yang telah dioptimasi hyperparameternya menggunakan RandomizedSearchCV akan dilatih dengan data set yang telah tersedia. Model kemudian dievaluasi menggunakan <i>confusion matrix</i> dan dari sana dapat didapatkan nilai accuracy, precision, recall, dan f1-score
                    </p>
                </div>
            </div>
        </>
    )
}

export default CaraKerjaBody;