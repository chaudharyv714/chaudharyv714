import './App.css';
import {data} from "./data/projectdata";

function proj() {

    console.log(data);
    return (
        <div id="projectcontainer">
            <h2 className="loneh2">Projects</h2>
        <div id="projectcon">
            <div id="project">
                {data.map((user) => (
                    <div className="proj">
                    <p>{user.title}</p>
                    <a href={user.link}>
                        <img src={user.img} alt={user.alt} />
                        <p className="rdmore">
                            Know More 
                            <i class="fas fa-external-link-alt"></i>
                        </p>
                    </a>
                </div>
                    
                ))}
            </div>

        </div>
        </div>
        
        
    );
};
export default proj;