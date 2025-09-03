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
        </div>
      </div>

      <div className="project-row">
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
            celebrate sightings of{" "}
            <a
              href="https://www.instagram.com/handsomedanyale/?hl=en"
              target="_blank"
            >
              Handsome Dan XIX
            </a>
            , our bulldog mascot. The app combines real-time photo sharing,
            location tracking, and machine learning to create an interactive
            platform for capturing and documenting Handsome Dan's campus
            adventures.
          </p>
        </div>
      </div>
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
            . It's not very pretty right now, but hopefully I get some good
            ideas on how to improve it in a graphic design class I'm taking this
            semester :').
          </p>
        </div>
      </div>
    </div>
  );
}
