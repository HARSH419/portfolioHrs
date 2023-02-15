import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Ads grocy Admin Pannel</h3>
              <p>
                Ad grocy makes website and admin panel to handle mobile
                application, this application is used to promote brands and earn
                money by watching ads.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>Express</li>
                <li>React</li>
                <li>Ejs</li>
                <li>Pug</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Matru Mart Admin Pannel</h3>
              <p>
                Ecommerce Admin Panel helps to Manage everything on your
                Ecommerce Store. Use a single dashboard to manage orders,
                shipping. Gain the insights and knowledge you need to grow.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>Razorpay</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Restaurant App</h3>
              <p>
                An interface to order food directly from Restaurants similar to
                zomato & swiggy Whizzkart User App.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>google maps</li>
                <li>Firebase Dbs</li>
                <li>RTLS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/joaotuliojt/dv-musica-library-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href="http://betternetwork.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Better Network App</h3>
              <p>
                This application is used to provide broadband service to
                customers, customers can avail 'Better Network' offers, view and
                change their
                <a
                  href="https://play.google.com/store/apps/details?id=com.betternetwork.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  {` Broadband plans.`}
                </a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>Razorpay</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/HARSH419/portfolio-react-main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>An current version of my portfolio, using Reactjs.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Github Pages</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Multi Vendor App</h3>
              <p>This Vendor application is used for listing and selling products</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Google Maps</li>
                <li>Real time tracking</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
