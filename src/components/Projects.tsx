import yaleClubsImg from "../assets/projects/img/yaleclubs.png";
// import handsomeDanImg from "../assets/projects/img/handsomedan.png";
import yaleBadmintonImg from "../assets/projects/img/yalebadminton.png";

export function Projects() {
  return (
    <div className="section-container">
      <div className="section-title" id="projects">
        Projects
      </div>
      <div className="project-row">
        <a href="https://yaleclubs.info" target="_blank">
          <img src={yaleClubsImg} alt="Yale Clubs" className="project-img" />
        </a>
        <div className="project-description">
          <a href="https://yaleclubs.info" target="_blank">
            <h2>YaleClubs</h2>
          </a>
          <p>
            A website to help Yale students easily explore and discover over
            1,000 student groups and organizations on campus. The platform
            provides a centralized database of student clubs, allowing students
            to quickly find and connect with groups that match their interests.
            Beta released on December 2024, a month after starting development
            from scratch.
          </p>
          <p>
            On project from November 2024 to present. My contributions were in
            developing a web scraper for gathering club details, uploading
            initial data onto the database, and creating dynamic UI components.
          </p>
        </div>
      </div>

      {/* <div className="project-row">
        <a
          href="https://github.com/Ragyudy/handsome-dan-tracker"
          target="_blank"
        >
          <img
            src={handsomeDanImg}
            alt="Handsome Dan Tracker"
            className="project-img"
          />
        </a>
        <div className="project-description">
          <h2>
            <a
              href="https://github.com/Ragyudy/handsome-dan-tracker"
              target="_blank"
            >
              Handsome Dan Tracker
            </a>
          </h2>
          <p>
            An iOS application that allows Yale students to track, share, and
            celebrate sightings of Handsome Dan, Yale's beloved bulldog mascot.
            The app combines real-time photo sharing, location tracking, and
            machine learning to create an interactive platform for capturing and
            documenting Handsome Dan's campus adventures. We aim to build
            community engagement by creating a playful, interactive way for Yale
            community members to connect through their shared love of the
            university's iconic mascot.
          </p>
          <p>
            I'm currently working on this passion project with three other
            friends. My contributions were in integrating a map display API,
            designing the "dog feed" user interface for photo sharing, and
            supporting the development of a custom machine learning model for
            detecting Handsome Dan.
          </p>
        </div>
      </div> */}

      {/* <div className="project-row">
        <a href="https://github.com/Ragyudy/loan-amortization-app">
          <img
            src="src/assets/projects/gif/amortizr_high.gif"
            alt="Amortizr"
            className="project-img"
          />
        </a>
        <div className="project-description">
          <a href="https://github.com/Ragyudy/loan-amortization-app">
            <h2>Amortizr</h2>
          </a>
          <p>
            A website that allows users to calculate and view their loan
            amortization schedule. Users can create a new user, create loans,
            view their loans, update a loan, and fetch their loan amortization
            schedules and summaries. Built with React Typescript. Styled with
            Bootstrap, React Text Gradients, and Animate on scroll (AOS).
          </p>
        </div>
      </div> */}
      <div className="project-row">
        <a href="https://yalebadminton.com" target="_blank">
          <img
            src={yaleBadmintonImg}
            alt="Yale Badminton"
            className="project-img"
          />
        </a>

        <div className="project-description">
          <h2>
            <a href="https://yalebadminton.com" target="_blank">
              Yale Badminton
            </a>
          </h2>
          <p>
            The new official website for Yale Club Badminton, which is an
            updated version of our
            <a href="https://badminton.sites.yale.edu/" target="_blank">
              {" "}
              old website
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
