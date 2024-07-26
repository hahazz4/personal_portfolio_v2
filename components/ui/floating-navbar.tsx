import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileAlt, faProjectDiagram, faEnvelope, faGithub, faLinkedin, faGoogle, faReddit } from '@fortawesome/free-solid-svg-icons';
import { faGoogle as faGoogleBrands, faReddit as faRedditBrands } from '@fortawesome/free-brands-svg-icons';

const FloatNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0e0217] text-white flex justify-around py-4">
      <a href="#welcome" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHome} size="2x" />
        <span>Home</span>
      </a>
      <a href="#me" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faUser} size="2x" />
        <span>About Me</span>
      </a>
      <a href="#resume" className="flex flex-col items-center">
        <FontAwesomeIcon icon={faFileAlt} size="2x" />
        <span>Resume</span>
      </a>
      <div className="relative group">
        <a className="flex flex-col items-center">
          <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
          <span>Projects</span>
        </a>
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#0e0217] p-2 rounded">
          <a href="#project1" className="block px-4 py-2">Project 1</a>
          <a href="#project2" className="block px-4 py-2">Project 2</a>
        </div>
      </div>
      <div className="relative group">
        <a className="flex flex-col items-center">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <span>Socials</span>
        </a>
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#0e0217] p-2 rounded">
          <a href="https://github.com" className="block px-4 py-2">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://linkedin.com" className="block px-4 py-2">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="mailto:someone@example.com" className="block px-4 py-2">
            <FontAwesomeIcon icon={faGoogleBrands} /> Gmail
          </a>
          <a href="https://reddit.com" className="block px-4 py-2">
            <FontAwesomeIcon icon={faRedditBrands} /> Reddit
          </a>
        </div>
      </div>
    </nav>
  );
};

export default FloatNavbar;
