import './App.css';
import { skilldata } from "./data/skilldata";
function skills() {
    return (
        <div id="skillcontainer">
            <h2 className="loneh2">Skills</h2>
            {skilldata.map((skil) => (
                <div className="skl">
                    <div className="skl-first-div">
                        <p>{skil.name}</p>
                    </div>

                    <div className="skl-second-div">
                        <span>
                            <div></div>
                            <div>
                                <div>
                                </div>
                            </div>
                        </span>
                        {skil.skillarray.map((skillItem) =>
                            <button className="sklbtn">{skillItem}</button>
                        )}
                    </div>
                </div>))}
        </div>
    );
};

export default skills;