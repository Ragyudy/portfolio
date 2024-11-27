import yaleClubsImg from "../assets/projects/img/yaleclubs.png";
import handsomeDanImg from "../assets/projects/img/handsomedan.png";
import yaleBadmintonImg from "../assets/projects/img/yalebadminton.png";

export function Projects() {
  return (
    <div className="section-container">
      <div className="section-title" id="projects">
        Projects
      </div>
      <div className="project-row">
        <a href="https://yaleclubs.info">
          <img src={yaleClubsImg} alt="Yale Clubs" className="project-img" />
        </a>
        <div className="project-description">
          <a href="https://yaleclubs.info">
            <h2>Yale Clubs</h2>
          </a>
          <p>
            A website designed to help Yale students easily explore and discover
            over 1,000 student groups and organizations on campus. The platform
            provides a centralized, searchable database of student clubs,
            allowing students to quickly find and connect with groups that match
            their interests. We aim to simplify student organization discovery
            and engagement at Yale.
          </p>
          <p>
            I am one of six engineers on the Yale Clubs team. We got together in
            late October / early November and are planning to deploy v0.1 by
            Dec. 2, 2024! My contributions were in developing a web scraper for
            gathering club details, implementing a feedback mechanism, and
            creating dynamic UI components to enhance user experience.
          </p>
        </div>
      </div>

      <div className="project-row">
        <a href="https://github.com/Ragyudy/handsome-dan-tracker">
          <img
            src={handsomeDanImg}
            alt="Handsome Dan Tracker"
            className="project-img"
          />
        </a>
        <div className="project-description">
          <h2>
            <a href="https://github.com/Ragyudy/handsome-dan-tracker">
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
            friends. My contributions were in integrating map display APIs,
            designing the "dog feed" user interface for photo sharing, and
            supporting the development of a custom machine learning model for
            Handsome Dan recognition. I'm currently working on implementing
            Firebase integration to enable real-time data storage and user
            interactions.
          </p>
        </div>
      </div>

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
        <a href="https://yalebadminton.com">
          <img
            src={yaleBadmintonImg}
            alt="Yale Badminton"
            className="project-img"
          />
        </a>

        <div className="project-description">
          <h2>
            <a href="https://yalebadminton.com">Yale Badminton</a>
          </h2>
          <p>
            The official website for the Yale Club Badminton team. I built this
            earlier in the semester to help the team recruit new members and
            update our
            <a href="https://badminton.sites.yale.edu/"> old website</a>.
            Unfortunately, I haven't had time to update it since then, but I'm
            in the process of adding new features and updating the design.
          </p>
        </div>
      </div>
    </div>
  );
}
