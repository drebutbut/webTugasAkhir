import React from "react";
import "./ProjectBodyStyle.css";
import {Link} from 'react-router-dom';

const CaraKerjaBody = () => {
    return (
        <>
            <div className="projectBody">
                <div className="opening">
                    <h1>What technology used in the research?</h1>
                    <p>Cari tahu lebih banyak tentang teknologi-teknologi yang digunakan pada penelitian</p>
                </div>
                
                <div className="smote step">
                    <h2>Synthetic Minority Oversampling Technique</h2>
                    <p>
                        <Link to="https://www.jair.org/index.php/jair/article/view/10302"><b>SMOTE</b></Link> adalah sebuah teknik Oversampling yang dikembangkan Chawla ketika mengerjakan sebuah model untuk prediksi pixel kanker. Model Chawla bekerja dengan baik sebelum kemudian ia sadar bahwa modelnya bekerja dengan baik terhadap kelas mayoritas dan menghiraukan kelas minoritas.
                    </p>
                    <p>
                        SMOTE bekerja dengan membuat data sintetis baru alih-alih menduplikasi data dari kelas minortias. SMOTE menghasilkan data sintetis sepanjang garis yang menghubungkan satu sampel dari kelas minoritas dengan sampel minoritas terdekat dari k-Neighbor (<Link to="https://ieeexplore.ieee.org/document/8125820">Gosain & Sardana, 2017</Link>; <Link to="https://ieeexplore.ieee.org/document/9632912">Pradipta et al., 2021</Link>)
                    </p>
                </div>

                <div className="rfe step">
                    <h2>Recursive Feature Elimination</h2>
                    <p>
                        RFE bekerja dengan menghapus fitur secara iteratif pada tiap iterasi. RFE menggunakan classifier untuk menentukan atribut-atribut yang berkontribusi dan penting untuk model (<Link to="https://ieeexplore.ieee.org/document/9823464">Sachdeva et al., 2022</Link>, <Link to="https://gssrr.org/index.php/JournalOfBasicAndApplied/article/view/12300">Adulkareem & Abdulkareem, 2021</Link>).
                    </p>
                    <p>
                        RF-RFE bekerja dengan pertama kali melatih data pada suatu model hingga mendapatkan tingkat kepentingan fitur. Kemudian, fitur diurutkan berdasarkan tingkat kepentingan dan kemudian mengeliminasi fitur paling tidak penting untuk kemudian data dilatih ulang kembali. Proses ini dilakukan secara berulang higga set fitur telah kosong (<Link to="https://www.mdpi.com/2073-4425/9/6/301">Q. Chen et al., 2018</Link>)
                    </p>
                </div>

                <div className="randomizedsearch step">
                    <h2>RandomizedSearchCV</h2>
                    <p>
                        Hyperparameter optimization adalah sebuah komponen yang akan mencari hyperparameter teroptimal untuk sebuah membangun sebuah model (<Link to="https://arxiv.org/abs/2003.05689">Yu & Zhu, 2020</Link>). Dua metode hyperparameter optimization yang populer adalah Grid Search dan Random Search. Dengan cara yang berbeda, kedua metode ini akan mencari hyperparameter yang paling optimal pada sebuah wilayah pencarian untuk sebuah model machine learning.
                    </p>
                    <p>
                        Random Search lahir mencoba memecahkan permasalahan dimensionalitas tinggi milik grid search. Random search mencoba untuk menyediakan alternatif yang lebih efisien namun tetap memiliki keunggulan grid search seperti sederhana dan reproduksibilitas (<Link to="https://www.jmlr.org/papers/v13/bergstra12a.html">Bergstra & Bengio, 2012</Link>).
                    </p>
                </div>

                <div className="randomforest step">
                    <h2>Random Forest Classifier</h2>
                    <p>
                        Random Forest adalah pengembangan model klasifikasi dari decision tree yang menggunakan kumpulan model lain di mana setiap model atau pohon memberikan suara untuk kelas paling populer (<Link to="https://link.springer.com/article/10.1023/A:1010933404324">Breiman, 2001</Link>; <Link to="https://www.tandfonline.com/doi/full/10.1080/01431160412331269698">Pal, 2005</Link>; <Link to="https://www.mdpi.com/2076-3417/9/9/1943">Wei et al., 2019</Link>). Random Forest merupakan salah satu ensemble learner yang menggunakan banyak pohon keputusan di dalamnya. Pada Random Forest setiap node dipisahkan menurut subset predictor terbaik yang dipilih secara acak pada node (<Link to="https://cran.r-project.org/doc/Rnews/Rnews_2002-3.pdf">Liaw & Wiener, 2002</Link>).
                    </p>
                    <p>
                        Random Forest bekerja dengan pertama kali membangun data set-data set baru dari data set yang ada. Random Forest akan memilih data secara acak dari baris data milik data set dan setiap data set baru memiliki jumlah baris yang sama dengan data set asli. Proses ini merupakan proses bootstrapping pada Random Forest. Kemudian, masing-masing pohon keputusan dilatih menggunakan masing-masing data set hasil bootstrapping. Selanjutnya, hasil keputusan dari decision tree akan dikumpulkan dan diproses untuk menghasilkan keluaran terakhir. Proses ini merupakan proses aggregation pada Random Forest sekaligus melengkapi proses bagging pada Random Forest.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CaraKerjaBody;