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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eligendi corrupti esse maxime odio voluptate voluptates dolorem! Ut autem et eos sed, molestias dolorum? Rerum numquam voluptatum et nam porro.
                    </p>
                </div>

                <div className="rfe step">
                    <h2>Recursive Feature Elimination</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum non temporibus sit praesentium consectetur, cum reiciendis beatae cupiditate accusamus officia, maiores sapiente enim! Omnis reiciendis architecto dolorem sequi quibusdam!
                    </p>
                </div>

                <div className="randomizedsearch step">
                    <h2>RandomizedSearchCV</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat dignissimos omnis excepturi, vero veniam nesciunt corporis voluptates consequuntur recusandae aperiam cumque laudantium vel obcaecati facilis incidunt, corrupti neque doloremque.
                    </p>
                </div>

                <div className="randomforest step">
                    <h2>Random Forest Classifier</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel voluptatibus rerum eaque fuga, molestiae corrupti ducimus aspernatur tenetur error ad ipsa perspiciatis necessitatibus. Aspernatur dicta ullam magni aperiam pariatur.
                    </p>
                </div>
            </div>
        </>
    )
}

export default CaraKerjaBody;