import github from './github.svg';
import linkedln from './linkedln.svg';
import './FooterStyle.css';
function Footer(){
    return(
<>
<footer>
  
    <div className="socials">
        <a id="github" href="https://github.com/akshybhosale" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" />
        </a>
        <a id="linkedin" href="https://www.linkedin.com/in/akshay-bhosale-480a6b189/" target="_blank" rel="noreferrer">
          <img src={linkedln} alt="Linkedin" />
        </a>
      </div>
    
</footer>
</>
    );
}export default Footer;