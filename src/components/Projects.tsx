import yaleClubsImg from "../assets/projects/img/yaleclubs.svg";
import yaleBadmintonLight from "../assets/projects/img/yalebadminton_light.svg";
import yaleBadmintonDark from "../assets/projects/img/yalebadminton_dark.svg";
import yaleBadmintonHover from "../assets/projects/img/yalebadminton_hover.svg";

export function Projects() {
  return (
    <div className="section-container">
      <div className="section-title" id="projects">
        Projects
      </div>
      <div className="project-row">
        <a href="https://yaleclubs.io" target="_blank">
          <img src={yaleClubsImg} alt="Yale Clubs" className="project-img" />
        </a>
        <div className="project-description">
          <a href="https://yaleclubs.io" target="_blank">
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
          href="https://yalebadminton.com/gallery"
          target="_blank"
          className="project-img badminton-logo"
        >
          <img
            src={yaleBadmintonLight}
            alt="Yale Badminton"
            className="badminton-img badminton-light"
          />
          <img
            src={yaleBadmintonDark}
            alt=""
            aria-hidden="true"
            className="badminton-img badminton-dark"
          />
          <img
            src={yaleBadmintonHover}
            alt=""
            aria-hidden="true"
            className="badminton-img badminton-hover"
          />
        </a>

        <div className="project-description">
          <h2>
            <a href="https://yalebadminton.com/gallery" target="_blank">
              Yale Badminton
            </a>
          </h2>
          <p>
            A more modern alternative to our
            <a href="https://badminton.sites.yale.edu/" target="_blank">
              {" "}
              old website
            </a>
            . It's outdated now, but this was where I used to share photos from
            our team's social events and tournaments. 
          </p>
        </div>
      </div>
    </div>
  );
}
