import React, { useState, useEffect } from "react";
import styles from "styles/Pages/Agri.module.css";
import Navbar from "components/Navbar/NavbarCrop";

const youtubeVideos = [
  "/dronesinag.mp4",
  "https://www.youtube.com/embed/sV0cR_Nhac0?si=TurI7jaooYvojpOH",
  "https://www.youtube.com/embed/-XI4siKp-nU?si=r_-qsgI17wqwS73H",
  "https://www.youtube.com/embed/QjoZD4QLE9k?si=-aX4M-qBOBuE2_9w",
];

const videoQuestions = [
  {
    title: "Drones in Agriculture - 3:56 | PBS",
    text: [
      "What do the farmers say about how drones and technology affect their crop yield?",
      "How has drone technology changed the field of agriculture?",
    ]
  },
  {
    title: "Sniper Robots Treat 500k Plants Per Hour With 95% Less Chemicals | Challangers - 8:15 | Freethink",
    text: [
      "What two things can Verdant Robotics' machine do to each plant it hovers over?",
      "How does the robot's use of computer vision and machine learning at sub-centimeter precision help make agriculture more sustainable?"
    ],
  },
 {
    title: "How Robots are Saving The Dairy Farm - 5:13 | Bloomberg Orginals",
    text: [
      "What two jobs do the robots on Welden's farm do for the cows?",
      "How does the automated milking system use the data it collects to help Welden increase milk production with fewer workers?",
    ],
  },
 {
    title: "Computer Vision For Precision Livestock Farming - 1:50 | Precision Livestock Farming",
    text: [
      "What are the three computer vision features shown in the video?",
      "How might these features help farmers with their duties?",
    ],
  },
];


const projectContents = [
  {
    title: "Project 1: Beetle Bot",
    cta: "Click here to start",
    description: "This Scratch project shows how we might program a machine (in this case, the beetle) to move in a straight line while going around any obstacles (the black rectangles) that are in its way. The beetle's red nose will act as the sensor on the machine. Study the code to try to understand and recreate the code, and/or make modifications to the code to have the beetle move in a more complicated path (e.g., can you have the beetle move as if it is traversing rows of crops? Can you make the beetle move in concentric circles? Can you have the beetle return home if it runs into a certain kind of object, etc.?",
    libraries: ["N/A"],
    platform: ["Scratch"],
    functions: ["N/A"],
    components: ["For loops", "Direction Based Planning"],
    skills: ["Direction Planning", "Puzzle Analysis", "Logical Thinking"],
    objectives: ["Using Scratch, use strategies to move the beetle around obstacles"], 
    image: "/beetle.png",
    doc: "https://scratch.mit.edu/projects/678075333/editor/",
  },
  {
    title: "Project 2: Teacher Project - Drone Pirate's Treasure Hunt",
    cta: "Click here to start",
    description: "This is a tutorial for teachers to create a Scratch project, prompting you to use Scratch to fly a drone across a city to find hidden treasures",
    libraries: ["N/A"],
    platform: ["Scratch"],
    functions: ["N/A"],
    components: ["If Statements", "Motion Planning"],
    skills: ["Strategic Planning", "Navigation Skills", "Logical Thinking"],
    objectives: ["Use Scratch to fly a drone across a city to find hidden treasures"],
    image: "/drone.png",
    link: "https://forum.creaticode.com/topic/323/3d-a-flying-drone-difficulty-1"
  },
];


export default function Home() {

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      setShowArrow(scrollTop > 75);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrev = () => {
      setCurrentVideo((prev) => (prev === 0 ? youtubeVideos.length - 1 : prev - 1));
  };

  const handleNext = () => {
      setCurrentVideo((prev) => (prev === youtubeVideos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
        <div className={styles.indexContainer}>

          <div style={{ padding: "3vh" }}></div>

          {/* First Part */}

          <section className={styles.imageWrapper}>
          <img src="/cropsciences-banner.png" alt="crop" className={styles.bannerImage} />
          <img src="/CS+Crop_Sciences.jpg" alt="CS + Crop" className={styles.firstImage} />
          <div className={styles.scrollContainer}>
              <div className={styles.scrollTextLeft}>Scroll</div>
              <div className={styles.scrollTextRight}>Down</div>
          </div>
          <div
              className={`${styles.arrowContainer} ${
              showArrow ? styles.arrowVisible : ''
              }`}
          >
              {/* Replace Arrow component with PNG */}
              <img
              src="/ArrowBlue.png"
              alt="Scroll Down Arrow"
              className={styles.longArrow}
              />
          </div>
          </section>

          <div style={{ padding: "3vh" }}></div>

          {/* What will we be Learning Section? */}

          <section className={styles.learningSection3}>
          <div className={styles.whiteBackground}>
          <div className={styles.bigBlueText}>What will we be Learning?</div>
          <div className={styles.headingText}>A Show in Foellinger Auditorium!</div>
            <ul className={styles.objectivesList}>
              <li>Drones in Agriculture | PBS | 3:55</li>
              <li>Sniper Robot Treats 500k Plants Per Hour with 95% Less Chemicals | Challengers | Freethink | 8:16</li>
              <li>How Robots Are Saving the Dairy Farm | Bloomberg Originals | 5:14</li>
              <li>Computer Vision for Precision Livestock | Precision Livestock Farming | 1:50</li>
            </ul>
            <div className={styles.headingText}>Foellinger Showing's Dinner Talks</div>
            <ul className={styles.objectivesList}>
              <li>Drones in Agriculture | PBS | 3:55 - Questions</li>
              <li>Sniper Robot Treats 500k Plants Per Hour with 95% Less Chemicals | Challengers | Freethink | 8:16 - Questions</li>
              <li>How Robots Are Saving the Dairy Farm | Bloomberg Originals | 5:14 - Questions</li>
              <li>Computer Vision for Precision Livestock | Precision Livestock Farming | 1:50 - Questions</li>
            </ul>
          <div className={styles.headingText}>Practice Makes Perfect! Practice Makes Perfect! - Questions</div>
          <ul className={styles.objectivesList}>
              <li>Project 1: Beetle Bot</li>
              <li>Project 2: Teacher Project - Drone Pirate's Treasure Hunt</li>
          </ul>
          </div>
          </section>

          <div style={{ padding: "3vh" }}></div>

            {/* Movie Time */}

          <section className={styles.audienceSection}>
            <img
              src="/foecircle.png"
              alt="FOE Circle"
              className={styles.foeCircle}
            />
            <div className={styles.audienceText}>
              A show in <br />foellinger<br />auditorium!
            </div>
            <img
              src="/crop-iten.png"
              alt="crop Item"
              className={styles.linguisticsItem}
            />
          </section>

          <div style={{ padding: "3vh" }}></div>
              
          {/* Foellinger Time */}

          <section className={styles.carouselSection}>
            <div className={styles.carouselOverlay}>
              <div className={styles.carouselVideoWrapper}>
              {youtubeVideos[currentVideo].endsWith('.mp4') ? (
                <video
                width="100%"
                height="100%"
                src={youtubeVideos[currentVideo]}
                controls
                className={styles.carouselVideo}
              />
              ) : (
              <iframe
                width="100%"
                height="100%"
                src={youtubeVideos[currentVideo]}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.carouselVideo}
              ></iframe>
              )}
              </div>
              <div className={styles.carouselArrowRow}>
                <button className={styles.carouselArrow} onClick={handlePrev} aria-label="Previous video">
                  <span className={styles.arrowSymbol}>&#8592;</span>
                </button>
                <button className={styles.carouselArrow} onClick={handleNext} aria-label="Next video">
                  <span className={styles.arrowSymbol}>&#8594;</span>
                </button>
              </div>
            </div>
          </section>

          <div style={{ padding: "3vh" }}></div>

          {/* Dinner Talks Section */}

          <section className={styles.dinnerSection}>
            <img
              src="/Dinner talks.png"
              alt="questions"
              className={styles.dinnerHeaderImage}
            />
            <div className={styles.dinnerGrid}>
              {videoQuestions.map((item, idx) => (
                <div className={styles.dinnerRow} key={idx}>
                  <div className={styles.dinnerImageCol}>
                    <img
                      src="/popcorn.png"
                      alt="Newspaper"
                      className={styles.dinnerImage}
                    />
                    <div className={styles.dinnerTitle}>{item.title}</div>
                  </div>
                  <div className={styles.dinnerTextCol}>
                    {Array.isArray(item.text) ? (
                      <ul className={styles.dinnerBulletList}>
                        {item.text.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className={styles.news2Text}>{item.text}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div style={{ padding: "3vh" }}></div>

            {/* Let's learn section */}

          <section className={styles.learningSection}>
            <div className={styles.learningText}>Let's do some learning!</div>
            <img
              src="/farmer.png"
              alt="vote"
              className={styles.learningImage}
            />
          </section>

          <div style={{ padding: "3vh" }}></div>

          {/* Learning Section */}

          <section className={styles.learningSection2}>
            <div className={styles.practiceText}>Practice Makes Perfect! <br /> Practice Makes Perfect!</div>

              <div style={{ padding: "3vh" }}></div>
              
              <div className={styles.learningCardColumn}>
                  {projectContents.map((project, idx) => (
                  <div className={styles.learningCard} key={idx}>
                      {/* Left Panel */}
                      <div className={styles.learningLeftPanel}>
                      <h1 className={styles.learningTitle}>{project.title}</h1>
                      <div className={styles.buttonRow}>
                          {Object.entries(project)
                          .filter(([key, value]) =>
                              (
                              key === 'data' ||
                              key === 'link' ||
                              key === 'answers' ||
                              key === 'doc' ||
                              key === 'local'
                              ) &&
                              typeof value === 'string' && value
                          )
                          .map(([key, value], idx) => (
                              <a
                              key={key}
                              href={value}
                              target={key === 'local' ? "_self" : "_blank"}
                              rel={key === 'local' ? undefined : "noopener noreferrer"}
                              className={styles.learningCTA}
                              >
                              {key === 'link' && 'Tutorial'}
                              {key === 'doc' && 'Sratch Project'}
                              </a>
                          ))}
                      </div>
                      <hr className={styles.learningUnderline} />
                      <p className={styles.learningDescription}>{project.description}</p>
                      <ul className={styles.learningList}>
                          {project.libraries && project.libraries.length > 0 && (
                          <li>
                              <strong>Libraries:</strong> {project.libraries.join(", ")}
                          </li>
                          )}
                          {project.platform && project.platform.length > 0 && (
                          <li>
                              <strong>Platform:</strong> {project.platform.join(", ")}
                          </li>
                          )}
                          {project.functions && project.functions.length > 0 && (
                          <li>
                              <strong>Functions:</strong> {project.functions.join(", ")}
                          </li>
                          )}
                          {project.components && project.components.length > 0 && (
                          <li>
                              <strong>Components:</strong> {project.components.join(", ")}
                          </li>
                          )}
                          {project.skills && project.skills.length > 0 && (
                          <li>
                              <strong>Skills:</strong> {project.skills.join(", ")}
                          </li>
                          )}
                          {project.objectives && project.objectives.length > 0 && (
                          <li>
                              <strong>Objectives:</strong> {project.objectives.join(", ")}
                          </li>
                      )}
                    </ul>
                  </div>
                  {/* Divider */}
                  <div className={styles.learningDivider}></div>
                  {/* Right Panel */}
                  <div className={styles.learningRightPanel}>
                    <div className={styles.learningRightBG}>
                      {project.title === "Project 5: Frank Goes to Japan" ? (
                        <img
                          src="/FrankJapan.png"
                          alt={project.title + " Icon"}
                          className={styles.frankJapanCircle}
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title + " Icon"}
                          className={styles.learningProjectImage}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div style={{ padding: "5vh" }}></div>
            
          {/* Footer with Goose and Squirrel */}
          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              © {new Date().getFullYear()} CS + You. All rights reserved.
            </div>
            <div className={styles.squirrelGooseRow}>
              <div className={styles.squirrelWrapper}>
                <img
                  src="/squirrel.png"
                  alt="Squirrel"
                  className={styles.squirrelImage}
                />
                <img
                  src="/squirrelQuote.png"
                  alt="Squirrel Quote"
                  className={styles.quoteSquirrelImage}
                />
              </div>
              <div className={styles.gooseWrapper}>
                <img
                  src="/Goose.png"
                  alt="Goose"
                  className={styles.gooseImage}
                />
                <img
                  src="/gooseQuote.png"
                  alt="Goose Quote"
                  className={styles.quoteGooseImage}
                />
              </div>
            </div>
          </footer>
          

        </div>
    </>
  );
}