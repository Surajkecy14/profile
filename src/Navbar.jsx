

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="name">SURAJ KC</h1>
      <h3 className="role">Front-end Developer</h3>
      <h4 className="slogan">
        I create seamless, visually stunning, and user-friendly digital solutions for the web.
      </h4>
      <div className="link">
      <a href="#about"a><span className="space">-</span>About</a>
      <a href="#education"><span className="space">-</span>Education</a>
      <a href="#whyme"><span className="space">-</span>Why ME?</a>
      </div>
      <footer>
         <a href="#">ⓕ</a>     
        <a href="#">𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
    </footer><span className="copyright">
    ©{new Date().getFullYear()} surajkc. All rights reserved, Nepal,Bagmati,03</span>
    </div>
  );
}

export default Navbar;
