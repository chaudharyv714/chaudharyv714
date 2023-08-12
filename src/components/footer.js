import './App.css';

function footer() {
    return (
        <div id="footer">
            <div id="first">
                <div id="log-box">
                    <img src="logo.png" alt="logo" />
                    <h2>Vipin Chaudhary</h2>
                    <p>Full Stack Developer | MERN</p>
                </div>
                <div id="follow">
                    <p className="footext">Social Media</p>
                    <div>
                        <span></span>
                        <a href="https://www.facebook.com/profile.php?id=100010498059670"><i className="fab fa-facebook"></i></a>
                        <a href="https://github.com/chaudharyv714"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/vipin-chaudhary-1a1852190/"><i className="fab fa-linkedin-in"></i></a>
                        <span></span>
                    </div>
                </div>
                <div id="call">
                    <p className="footext">Phone:</p>
                    <a href="callto:7290937835"><i className="fas fa-phone-alt"></i> +91 7290937835</a>
                </div>
            </div>
            <span className="whitebr"></span>
            <div id="second">
                <div id="credits">design&dev <a href="/">Vipin Chaudhary</a></div>
            </div>
        </div>
    );
}
export default footer;