import React from "react";
import "./ProjectBodyStyle.css";
import {Link} from 'react-router-dom';

const ResultBody = () => {
    return (
        <>
            <div className="projectBody">
                <div className="opening">
                    <h1>How did the research go?</h1>
                    <p>Cari tahu lebih banyak tentang hasil dari penelitian</p>
                </div>
                
                <div className="accuracy step">
                    <h2>Accuracy</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eligendi corrupti esse maxime odio voluptate voluptates dolorem! Ut autem et eos sed, molestias dolorum? Rerum numquam voluptatum et nam porro.
                    </p>
                </div>

                <div className="precision step">
                    <h2>Precision</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum non temporibus sit praesentium consectetur, cum reiciendis beatae cupiditate accusamus officia, maiores sapiente enim! Omnis reiciendis architecto dolorem sequi quibusdam!
                    </p>
                </div>

                <div className="recall step">
                    <h2>Recall</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat dignissimos omnis excepturi, vero veniam nesciunt corporis voluptates consequuntur recusandae aperiam cumque laudantium vel obcaecati facilis incidunt, corrupti neque doloremque.
                    </p>
                </div>

                <div className="f1score step">
                    <h2>F1-Score</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel voluptatibus rerum eaque fuga, molestiae corrupti ducimus aspernatur tenetur error ad ipsa perspiciatis necessitatibus. Aspernatur dicta ullam magni aperiam pariatur.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ResultBody;