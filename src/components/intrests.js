import './App.css';
import {interestsdata} from "./data/interestsdata";

function Interest() {
    return (
        <div id="interestcontainer">
            <h2 className="loneh2">My Interests and Organisations</h2>
          
        {interestsdata.map((interest)=>(
            <div className="interest">
            
            <div className="intrestimagecon">
                <div>
                <h2><i className={interest.fa}></i> {interest.title}      <span className="line">qwertyuiop</span> </h2>
                <p className="explanation">{interest.para1}</p>
                   <p>{interest.para2}</p>
                </div>
                <img src={interest.img} alt={interest.alt} />
            </div>
        </div>
        ))}
        </div>
        
    );
}

export default Interest;