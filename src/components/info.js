import './App.css';


function info() {
    return (
        <div id="info">
            <div className="info-content">
                <button className="hellobutton"><a href="/resume">Vipin Chaudhary <i class="fas fa-laptop-code"></i></a></button>
                <h1>Full Stack Developer | MERN</h1>
                <p className="georgia">National Institute of Technology, Calicut </p>
                <span className="sl georgia"><i className="fas fa-envelope"></i><a href="mailto:chaudharyv714@gmail.com"> chaudharyv714@gmail.com</a></span>
                <span className="sl georgia"><i className="fas fa-phone-alt"></i> <a href="callto:7290937835">+91 7290937835</a></span>
                <span className="sl georgia"><i className="fas fa-map-marker-alt"></i><a href="/"> Faridabad,India</a></span>



                <div className="soc-media">
                    <a href="https://twitter.com/chaudharyv714"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100010498059670"><i className="fab fa-facebook"></i></a>
                    <a href="https://github.com/chaudharyv714"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/vipin-chaudhary-1a1852190/"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="info-image">
                <img src="vipin_round.png" alt="athul" />
            </div>
        </div>
    );
}

export default info;