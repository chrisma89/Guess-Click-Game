import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return ( 
    <div className="container-fluid d-flex footer justify-content-between" style={{ width: "100%", height: "20%", alignItems: "center" }}> 
    <div>Guess-Click-Game </div> 
    <div><a style= {{color : "#23001E"}}  target= "_blank" href="https://github.com/chrisma89"><FontAwesomeIcon icon={faGithub} /></a></div>    
  <div>©Chrisma Stephen</div>
 
 
</div>

    
   
    
   );
}
 
export default Footer;