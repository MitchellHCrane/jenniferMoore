import "../css/profile.css";
import "../css/App.css";

function Profile() {
  return (
    <div className="profile-background">
      <div className="profile-div">
        <div className="profile-grid">
          <div className="columnPic">
            <img
              className="headProfilePic"
              src="../images/headshot.jpg"
              alt="Jennifer Moore Loan Originator"
            />
          </div>
          <div>
            <h1 className="profileName">Jennifer Moore</h1>
            <h2 className="NMLS">Loan Originator (NMLS #2104281)</h2>
            <p className="profileP">
              I&apos;m Jennifer, a leading loan originator specializing in all
              things home finance. My top priority is ensuring that my clients
              have the best experience and a solid financial plan tailored to
              their needs. I will provide my honest professional opinions about
              the most suitable financing options for your home loan. With a
              passion for making deals happen where others might falter,
              I&apos;m here to guide you every step of the way. Ready to take
              the first step toward your dream home? Click below to get started
              on your online application!
            </p>
            <div className="buttonBlueDiv">
              <a href="#getStarted" className="buttonBlue">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
