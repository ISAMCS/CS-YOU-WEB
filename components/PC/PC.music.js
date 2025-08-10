import styles from "styles/PC/PC.music.module.css";
import React, { useState, useEffect } from "react";

const newsArticles = [
  {
    title: "Robots Can Make Music, but Can They Sing? | The New York Times",
    link: "/pdfs/robots-music.pdf",
    image: "/robots.png",
  },
  {
    title: "The Moog Synthesizer Makes a Comeback | The New York Times",
    link: "/pdfs/moog-synthesizer.pdf",
    image: "/moogs.png",
  },
  {
    title: "From Jingles to Pop Hits, A.I. Is Music to Some Ears | The New York Times",
    link: "pdfs/ai-music-jingles.pdf",
    image: "/jingles.png",
  },
  {
    title: "MUSIC; Teaching the Ear New Dialects of Sound | The New York Times",
    link: "pdfs/ear-dialects.pdf",
    image: "/music.png",
  },
  // Add more articles here as needed
  // {
  //   title: "Another Article Title",
  //   link: "/another-article.pdf",
  //   image: "/another-article.png",
  // },
];

const news2Articles = [
  {
    title: "Robots Can Make Music, but Can They Sing? | The New York Times",
    text: [
      "Is AI a “collaborator” like M.O.G.I.I.7.E.D. described, or just a tool?",
      "Justin Shave, the creative director of the Australian music and technology company Uncanny Valley, claims that “robots can't sing. I mean, they can,” he added, “but at the end of the day, it just sounds like a super-Auto-Tuned robotic voice.” Do you agree?",
      "The article seems to use robot and AI interchangeably. Do you think this is accurate?"
    ]
  },
  {
    title: "The Moog Synthesizer Makes a Comeback | The New York Times",
    text: [
      "What do you think about Moog's decision to double-down on analog circuitry in an era dominated by digital synthesis?",
      "Do you agree with Trevor Pinch's assertion that “musicians make emotional connections with their instruments,” and that Moog understood the concept better than any other electronics pioneer?",
      "If companies like Arturia build software emulations based on Moog's designs, should they formally credit (or even compensate) Robert Moog or his estate?",
      "How can we objectively determine whether a digital emulation truly captures the quirks and imperfections of an original Moog synthesizer?",
      "Do you think the current resurgence of interest in vintage Moogs will help more people explore synthesis, or will it divert attention (and resources) away from new instrument designers?",
      "If everyone focuses on classic Moog tones, what types of musical styles or experimental sound-design techniques might we overlook?",
      "Hans Fjellestad framed his documentary around “the interactivity of man and machine.” In what ways does the Moog's interface foster a more collaborative process than fully digital instruments?",
      "With Moog Music now offering both handmade analog units and digital plug-ins, where do you see the future of synthesis heading-and what role will the Moog legacy play?",
    ],
  },
  {
    title: "From Jingles to Pop Hits, A.I. Is Music to Some Ears | The New York Times",
    text: [
      "What do you think about Jukedeck's approach of not directly involving musicians, in contrast to Flow Machines' method of directly involving them?",
      "Do you agree with Lescop's statement that 'Music fans need to fall in love with musicians'? “You can't fall in love with a computer.",
      "If AI models are trained from music other people wrote, then should they have recognition?",
      "How can we know that AI models aren't being trained on copyrighted music? What is the status of similar and popular AI art models?",
      "Do you think AI music models will make it easier for more people to make music or will take the place of people making music?",
      "What types of music might be at risk of being left out of AI models?"
    ],
  },
  {
    title: "MUSIC; Teaching the Ear New Dialects of Sound | The New York Times",

    text: [
    "What implications arise from Pierre Boulez's decision to integrate electronic sounds with existing performance practices rather than pursue an entirely new sound world?",
    "How did the shift from tape-based electronics to real-time computer interaction alter the dynamic between performers and electronic elements?",
    "In what ways does spectral music's conflation of harmony and timbre challenge traditional notions of musical structure and listener perception?",
    "Does the use of graphical programming environments like Max democratize electronic composition for non-technical composers, or does it create a new kind of dependency?",
    "How can we evaluate whether computer-realized sounds retain the emotional nuance and spontaneity of live instrumental performance?",
    "What technical and artistic challenges do performers face when matching microtonal tuning and timbral qualities of electronic sounds during a concert?",
    "With advanced computer-music tools now available outside of institutions like Ircam, how might the roles of centralized research centers and individual composers evolve?",
    "As personal computing power continues to grow, what do you see as the future role of organizations like Ircam in driving innovation in electronic music?"
    ]
  },
];

const projectContents = [
  {
    title: "Project 1: TunePad",
    cta: "Click here to start",
    description: "This module uses music and computer science to create a Python program for three songs, Roses, Still D.R.E., and Kiss Me More, using TunePad", 
    libraries: ["N/A"],
    platform: ["TunePad"],
    functions: ["rest(), playNote()"],
    components: ["Functions", "Python", "Music"],
    skills: ["Functions"],
    objectives: ["Learn how to use TunePad to create music using Python"],
    image: "musicIcon.png",
    local: "https://docs.google.com/document/d/1UuN2d8ikuFS9PHxK4bhcRfni1IS-1w8yKAZk1hksHHc/view",
  },
];

const youtubeVideos = [
  "/Performance Systems.mp4",
  "/Music Synthesis.mp4",
];

const googleSlides = [

  {
    src: "https://docs.google.com/presentation/d/e/2PACX-1vRPEXt19KuAYLBeDw3DlG-lwoLGdJjrSaRczhta_KF9pBLC_n0NsrA5yGQGy27jue18-TReQIV3jTEi/pubembed?start=false&loop=false&delayms=3000",
    title: "Music Synthesis"
  },
  {
    src: "https://docs.google.com/presentation/d/e/2PACX-1vTewQL2GwHyo-9XMNewGLrzhdLzzDg-Cp-BMKzdqByu8v5696RZ9tU39qv5lIs1-HQ-Z_4W3On_vokX/pubembed?start=false&loop=false&delayms=3000",
    title: "Performance Systems"
  },
  {
    src: "https://docs.google.com/presentation/d/e/2PACX-1vSkmQEhttsbKHFUJ71BVirlutaVaHfGUiRSvWre1HOIkj3cNqqo6_txQGb8NwQJB4w1Zo-Q3EsK97k2/pubembed?start=false&loop=false&delayms=3000",
    title: "Computer Assisted Composition"
  }
];


const Home = () => {
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
    <div className={styles.indexContainer}>

      <div style={{ padding: "3vh" }}></div>

      {/* First Part */}

      <section className={styles.imageWrapper}>
        <img src="/music-banner.png" alt="Mus" className={styles.bannerImage} />
        <img src="/CS+music.jpg" alt="CS + Mus" className={styles.firstImage} />
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

      <div style={{ padding: "2vh" }}></div>

      {/* What will we be Learning Section? */}

      <section className={styles.learningSection3}>
      <div className={styles.whiteBackground}>
      <div className={styles.bigBlueText}>What will we be Learning?</div>
      <div className={styles.headingText}> The Daily Illini's Reading Corner</div>
      <ul className={styles.objectivesList}>
          <li>Robots Can Make Music, but Can They Sing? | The New York Times</li>
          <li>The Moog Synthesizer Makes a Comeback | The New York Times</li>
          <li>From Jingles to Pop Hits, A.I. Is Music to Some Ears | The New York Times</li>
          <li>MUSIC; Teaching the Ear New Dialects of Sound | The New York Times</li>
      </ul>
      <div className={styles.headingText}> The Daily Illini's Coffee Chats</div>
      <ul className={styles.objectivesList}>
          <li>Robots Can Make Music, but Can They Sing | The New York Times - Questions</li>
          <li>The Moog Synthesizer Makes a Comeback | The New York Times - Questions</li>
          <li>From Jingles to Pop Hits, A.I. Is Music to Some Ears | The New York Times - Questions</li>
          <li>MUSIC; Teaching the Ear New Dialects of Sound | The New York Times - Questions</li>
      </ul>
      <div className={styles.headingText}>A Show in Foellinger Auditorium!</div>
        <ul className={styles.objectivesList}>
          <li>Performance Systems | Kathleen Issenger | 24:17</li>
          <li>Music Synthesis | Kathleen Isseneger | 11:14</li>
        </ul>
      <div className={styles.headingText}>Practice Makes Perfect! Practice Makes Perfect!</div>
      <ul className={styles.objectivesList}>
          <li>Project 1: Tune Pad</li>
      </ul>
      </div>
      </section>

      {/* NewsCorner Section */}
      
      <section className={styles.newsCornerSection}>
        <img
          src="/Daily Illini.png"
          alt="Daily Illini"
          className={styles.dailyIlliniLogo}
        />
        <div className={styles.newsGrid}>
          {newsArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsItem}
            >
              <div className={styles.newsImageWrapper}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.newsImage}
                />
                <div className={styles.newsTitleOverlay}>
                  {article.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div style={{ padding: "2vh" }}></div>

      {/* CoffeeChats Section */}

      <section className={styles.news2Section}>
        <img
          src="/coffeechats.png"
          alt="questions"
          className={styles.news2HeaderImage}
        />
        <div className={styles.news2Grid}>
          {news2Articles.map((item, idx) => (
            <div className={styles.news2Row} key={idx}>
              <div className={styles.news2ImageCol}>
                <img
                  src="/newspaper vector.png"
                  alt="Newspaper"
                  className={styles.news2Image}
                />
                <div className={styles.news2Title}>{item.title}</div>
              </div>
              <div className={styles.news2TextCol}>
                {Array.isArray(item.text) ? (
                  <ul className={styles.news2BulletList}>
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

      <div style={{ padding: "2vh" }}></div>

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
          src="/MusIten.png"
          alt="Mus Item"
          className={styles.linguisticsItem}
        />
      </section>

      <div style={{ padding: "2vh" }}></div>

      {/* Foellinger Time */}

      <section className={styles.carouselSection}>
        <div className={styles.carouselOverlay}>
          <div className={styles.carouselVideoWrapper}>
          <video
            width="100%"
            height="100%"
            src={youtubeVideos[currentVideo]}
            controls
            className={styles.carouselVideo}
          />
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

      <div style={{ padding: "2vh" }}></div>

      {/* Look at our google slides section */}
      <section className={styles.fullBlueBackground}>
        <div className={styles.BlueContent}>
          <div className={styles.BlueHeading}>Look at Our Google Slides!</div>
          {googleSlides.map((slide, idx) => (
          <iframe
            key={slide.src}
            src={slide.src}
            frameBorder="0"
            allowFullScreen
            title={slide.title}
            className={styles.googleSlideFrame}
          />
          ))}
        </div>
      </section>

      {/* Let's learn section */}

      <section className={styles.learningSection}>
        <div className={styles.learningText}>Let's do some learning!</div>
        <img
          src="/guitar girl.png"
          alt="guitar"
          className={styles.learningImage}
        />
      </section>

      <div style={{ padding: "2vh" }}></div>

      {/* Learning Section */}

      <section className={styles.learningSection2}>
        <div className={styles.practiceText}>Practice Makes Perfect!</div>
        <div className={styles.practiceText}>Practice Makes Perfect!</div>
        <div className={styles.instructionText}>
          Please Make a Copy of the Google Doc by going to "File" and "Save a Copy in Drive"
        </div>

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
                        key.toLowerCase().includes('google') ||
                        key.toLowerCase().includes('codehs') ||
                        key === 'local'
                      ) &&
                      typeof value === 'string' && value
                    )
                    .map(([key, value], idx) => (
                      <a
                        key={key}
                        href={key === 'local' ? value : value}
                        target={key === 'local' ? "_self" : "_blank"}
                        rel={key === 'local' ? undefined : "noopener noreferrer"}
                        className={styles.learningCTA}
                      >
                        {key === 'local' && 'Start Project'}
                        {key === 'google' && 'Google Colab Practice'}
                        {key === 'codehs' && 'CodeHS Practice'}
                        {key === 'codehssol' && 'CodeHS Solutions'}
                        {key === 'googlesol' && 'Google Colab Solutions'}
                        {key === 'googleshort' && 'Google Colab Practice - Short Version'}
                        {key === 'googlelong' && 'Google Colab Practice - Long Version'}
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
        
      {/* Goose and Squirrel */}

      <section className={styles.squirrelGooseSection}>
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
      </section>

    </div>
  );
};

export default Home;