import './App.css';

function about() {
    return (
        <div id="about">
            <div className="about_image">
                <img src="about.jpg" alt="demo" />
            </div>
            <div className="about-det">
                <p className="about-title"><i class="fas fa-user-shield"></i>      About Me</p>
                <p className="about-description">
                    Hi,<br/>
                    Vipin here, I am a Final year engineering undergraduate student at NIT Calicut. I am a self learned programmer and a full stack developer. <br/><br />
                    I am passionate about software development, the thrill of creating new tools and platforms instill me with joy and happiness.<br/><br />
                    Competitive programmming is still a fascinating feild for me, need a little more time to get even. I enjoy participating in these competitions, not to forget the hackathons, Hacktober fest being my favorite one.
                    <br /> <br />
                    Can't wait to see you as an integral part of my dev-code journey. 
                </p>
                <button className="dnldcvbutton"><a href="/resume">Resume</a> <i class="fas fa-project-diagram"></i></button>
            </div>
        </div>
    );
}

export default about;