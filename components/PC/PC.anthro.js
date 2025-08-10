"use client";

import React, { useState, useEffect } from "react";
import styles from "styles/PC/PC.anthro.module.css";

const newsArticles = [
  {
    title: "How New Emoji Are Changing the Pictorial Language | The Atlantic",
    link: "pdfs/How_New_Emoji_Are_Changing_the_Pictorial_Language_-_The_Atlantic.pdf",
    image: "/emoji.png",
  },
  {
    title: "Digital Anthropology | Anthroencyclopedia",
    link: "https://www.anthroencyclopedia.com/entry/digital-anthropology",
    image: "/dig-anthro.png",
  },
  // Add more articles here as needed
  // {
  //   title: "Another Article Title",
  //   link: "/another-article.pdf",
  //   image: "/another-article.png",
  // },
];

const youtubeVideos = [
  "Q4m6bQ95KNk?si=FZYPZj8DTcdCjaJX",
  "U8aZmwHw1Mk?si=qWdvVwUMDpVm1Fba",
  "U8aZmwHw1Mk?si=qWdvVwUMDpVm1Fba",
  "GtV-VYdNt_g?si=0y6QSZrqrXEY1fgs",
  "bf3egy7TQ2Q?si=UfK1fChaR1VzqTiD",
  "cV4dDvlrPNU?si=22AZxsU5soeosGTk"
];

const news2Articles = [
  {
    title: "How New Emoji Are Changing the Pictorial Language | The Atlantic",
    text: [
      "How many emoji were there when this article was written?",
      "How were the first emoji different in size and color compared to today's emoji?",
      "Why can having more specific emoji make them less flexible to use?",
      "What feelings or reactions can the skull emoji (💀) convey, aside from representing a real skull?"
    ]
  },
  {
    title: "Digital Anthropology | Anthroencyclopedia",
    text: [
      "What is digital anthropology?",
      "What is the definition of digital? What definition do the authors use?",
      "Why are digital anthropologies “newish” worlds?",
      "What are the newish worlds mentioned in the article?"
    ],
  },
];

const videoQuestions = [
  {
    title: "The Unicode Emoji Subcommittee | The Unicode Consortium",
    text: [
      "What emoji would you propose?",
    ]
  },
  {
    title: "Why it Takes Years to Create Emoji | The Insider",
    text: [
      "What do you think of the 13 selection factors? Which is most/least important? Are there any more you would add? Would you remove any?",
    ],
  },
 {
    title: "Correlation Doesn't Equal Causation | Crash Course Statistics #8",
    text: [
      "What is correlation?",
      "What is a positive correlation? What is a negative correlation? What is no correlation?",
      "What is the range of values that correlation can have? Why?",
      "What is correlation squared?",
      "What values can correlation squared be?",
      "What does it mean when we say that causation does not equal correlation?",
      "What are the four possible explanations for the correlation between two variables?",
    ],
  },
 {
    title: "How P-Values Help Us Test Hypotheses| Crash Course Statistics #21",
    text: [
      "What is a null hypothesis?",
      "What does a p-value tell us?",
      "What does it mean for a p-value to be two-sided?",
      "Does a smaller p-value tell us our results are more or less likely due to randomness?",
      "What is statistical significance?",
      "What is the cutoff p-value for statistical significance?",
    ],
  },
 {
    title: "Introduction to Pandas Libaray in Python | Data For Dummies",
    text: [
      "What is a library?",
      "Note: Step 1: If we weren't using an online coding environment (like Colab), we'd have to do this.",
      "Step 4: What does a dataframe look like?",
    ],
  },
];

const projectContents = [
  {
    title: "Project 1: Election Results Analysis",
    cta: "Click here to start",
    description: "The project utilizes Google Colab to analyze the 2020 election results through plots and data analysis",
    libraries: ["pandas", "matplotlib.pyplot"],
    platform: ["Google Colab"],
    functions: ["N/A"],
    components: ["DataFrames", "Libraries", "CSV File"],
    skills: ["Data Analysis", "Plotting Analysis", "Data Visualization"],
    objectives: ["Learn how to analyze data from a CSV file"],
    image: "/vote icon.jpg",
    data: "/anes.csv",
    colab: "https://colab.research.google.com/drive/1RjVzr2Tn6aJfIjnybX5IWui3tKDCiOuR?usp=sharing",
    answers: "https://colab.research.google.com/drive/1V2m9wO50C_sHtT4WiemLajVCQq02frX9?usp=sharing"
  },
  {
    title: "Project 2: Major World Cities Anthropology Project",
    cta: "Click here to start",
    description: "A project analyzing the happiness and competitiveness of major world metropolises",
    libraries: ["pandas", "matplotlib.pyplot"],
    platform: ["Google Colab"],
    functions: ["N/A"],
    components: ["DataFrames", "Libraries", "Data File"],
    skills: ["Data Analysis", "Plotting Analysis", "Data Visualization"],
    objectives: ["Learn how to use pandas and matplotlib to analyze and visualize data"], 
    image: "/worldMap.jpg",
    doc: "https://docs.google.com/document/d/1aa6M43PdWdnCPEttc8N9G5Y0wNGVU2-XfnHVsURnp5s/edit?usp=sharing",
  },
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

      <div style={{ padding: "3%" }}></div>

      {/* First Part */}

      <section className={styles.imageWrapper}>
      <img src="/anthropology-banner.png" alt="anthro" className={styles.bannerImage} />
      <img src="/CS+anthro.jpg" alt="CS + Anthro" className={styles.firstImage} />
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

      <div style={{ padding: "2%" }}></div>

      {/* NewsCorner Section */}

      {/* What will we be Learning Section? */}

      <section className={styles.learningSection3}>
      <div className={styles.whiteBackground}>
      <div className={styles.bigBlueText}>What will we be Learning?</div>
      <div className={styles.headingText}> The Daily Illini's Reading Corner</div>
      <ul className={styles.objectivesList}>
          <li>How New Emoji Are Changing the Pictorial Language | The Atlantic </li>
          <li>Digital Anthropology | Anthroencyclopedia</li>
      </ul>
      <div className={styles.headingText}> The Daily Illini's Coffee Chats</div>
      <ul className={styles.objectivesList}>
          <li>How New Emoji Are Changing the Pictorial Language | The Atlantic - Questions</li>
          <li>Digital Anthropology | Anthroencyclopedia - Questions</li>
      </ul>
      <div className={styles.headingText}>A Show in Foellinger Auditorium!</div>
        <ul className={styles.objectivesList}>
          <li>The Unicode Emoji Subcommittee | The Unicode Consortium | 4:04</li>
          <li>Why it Takes Years to Create Emoji | The Insider | 4:50</li>
          <li>Correlation Doesn't Equal Causation | Crash Course Statistics #8 | 12:18</li>
          <li>How P-Values Help Us Test Hypotheses | Crash Course Statistics #21 | 11:53</li>
          <li>Introduction to Pandas Libaray in Python | Data For Dummies | 3:58</li>
        </ul>
      <div className={styles.headingText}>Foellinger Showings - Dinner Talks!</div>
        <ul className={styles.objectivesList}>
          <li>The Unicode Emoji Subcommittee | The Unicode Consortium | 4:04 - Questions</li>
          <li>Why it Takes Years to Create Emoji | The Insider | 4:50  - Questions</li>
          <li>Correlation Doesn't Equal Causation | Crash Course Statistics #8 | 12:18 - Questions</li>
          <li>How P-Values Help Us Test Hypotheses | Crash Course Statistics #21 | 11:53 - Questions</li>
          <li>Introduction to Pandas Libaray in Python | Data For Dummies | 3:58 - Questions</li>
        </ul>
      <div className={styles.headingText}>Practice Makes Perfect! Practice Makes Perfect!</div>
      <ul className={styles.objectivesList}>
          <li>Project 1: Election Results Analysis</li>
          <li>Project 2: Major World Cities Anthropology Project</li>
      </ul>
      </div>
      </section>

      <div style={{ padding: "1%" }}></div>
      
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

      <div style={{ padding: "2%" }}></div>

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

      <div style={{ padding: "2%" }}></div>

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
          src="/anthro-iten.png"
          alt="Anthro Item"
          className={styles.linguisticsItem}
        />
      </section>

      <div style={{ padding: "2%" }}></div>
          
      {/* Foellinger Time */}

      <section className={styles.carouselSection}>
        <div className={styles.carouselOverlay}>
          <div className={styles.carouselVideoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideos[currentVideo]}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.carouselVideo}
              ></iframe>
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

      <div style={{ padding: "2%" }}></div>

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

      <div style={{ padding: "2%" }}></div>

      {/* Let's learn section */}

      <section className={styles.learningSection}>
        <div className={styles.learningText}>Let's do some learning!</div>
        <img
          src="/vote.png"
          alt="vote"
          className={styles.learningImage}
        />
      </section>

      <div style={{ padding: "5%" }}></div>

      {/* Learning Section */}

      <section className={styles.learningSection2}>
        <div className={styles.practiceText}>Practice Makes Perfect!</div>
        <div className={styles.practiceText}>Practice Makes Perfect!</div>
        <div className={styles.instructionText}>
          Please Make a Copy of each Google Colab Module and Google Doc by going to "File" and "Save a Copy in Drive"
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
                      key === 'data' ||
                      key === 'colab' ||
                      key === 'answers' ||
                      key === 'doc' ||
                      key.toLowerCase().includes('google') ||
                      key.toLowerCase().includes('codehs') ||
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
                      {key === 'data' && 'Download Data'}
                      {key === 'colab' && 'Google Colab Module'}
                      {key === 'answers' && 'Google Colab Answers'}
                      {key === 'doc' && 'Google Doc Handout'}
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