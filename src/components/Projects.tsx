export function Projects() {
  return (
    <div className="section-container">
      <div className="section-title" id="projects">
        Projects
      </div>
      <div className="project-row">
        <a href="https://yaleclubs.info">
          <img
            src="src/assets/projects/img/yaleclubs.png"
            alt="Yale Clubs"
            className="project-img"
          />
        </a>
        <div className="project-description">
          <a href="https://yaleclubs.info">
            <h2>Yale Clubs</h2>
          </a>
          <p>
            A website to search through 1000+ student groups and organizations
            on campus. I worked on data scraping and several features for
            initial launch. We will be deploying v0.1 next Monday (Dec. 2nd,
            2024!)
          </p>
        </div>
      </div>
      <div className="project-row">
        <a href="https://github.com/Ragyudy/handsome-dan-tracker">
          <img
            src="src/assets/projects/img/handsomedan.png"
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
            An iOS app to see where our favorite dog on campus was last seen
            (and post cute pics of Handsome Dan ;)).
          </p>
        </div>
      </div>
      <div className="project-row">
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
      </div>
      <div className="project-row">
        <a href="https://yalebadminton.com">
          <img
            src="src/assets/projects/img/yalebadminton.png"
            alt="Yale Badminton"
            className="project-img"
          />
        </a>

        <div className="project-description">
          <h2>
            <a href="https://yalebadminton.com">Yale Badminton</a>
          </h2>
          <p>
            The official website for the Yale Club Badminton team. Built with
            React, yap yap yap yap more yap yap yap yap yap yap more yap yap yap
          </p>
        </div>
      </div>
    </div>
  );
}
