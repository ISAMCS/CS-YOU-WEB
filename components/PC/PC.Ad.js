"use client";

import React, { useState, useEffect } from "react";
import styles from "styles/PC/PC.Ad.module.css";

const newsArticles = [
  {
    title: "How Recommendation Algorithms Run the World | WIRED",
    link: "pdfs/recommendation-algorithms.pdf",
    image: "/Recalgo.png",
  },
  {
    title: "Opinion - You Are Now Remotely Controlled | The New York Times",
    link: "pdfs/remotely-controlled.pdf",
    image: "/controlled.png",
  },
  {
    title: "Opinion - You Are the Object of Facebook's Secret Extraction Operation | The New York Times",
    link: "pdfs/facebook-extraction.pdf",
    image: "/facebook.png",
  },
  {
    title: "Computational Advertising: A Smarter Way to Automate Advertising | Medium",
    link: "https://medium.com/%40su-paris/computational-advertising-a-smarter-way-to-automate-advertising-665add0f8509",
    image: "/medium.png",
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
    title: "How Recommedation Algorithms Run the World | WIRED",
    text: [
      "Do you agree that more transparency in algorithms would reduce the harm they cause—or that it would just make them “easier to game”?",
      "At the end of the article, Tufekci imagines some other types of recommendations, like “a book people like me rarely read but would enjoy.” What recommendations can you imagine beyond what is typically used?",
    ]
  },
  {
    title: "Opinion - You Are Now Remotely Controlled | The New York Times",
    text: [
      "What does Shoshana Zuboff mean by “surveillance capitalism,” and how does she illustrate its effect with the idea that “we thought that we used social media to connect, but we learned that connection is how social media uses us”?",
      "What is “instrumentarian power” according to the article, and what example demonstrates how companies use it to influence people's behavior?",
    ],
  },
  {
    title: "Opinion - You Are the Object of Facebook's Secret Extraction Operation | The New York Times",
    text: [
      "What social harms result from surveillance capitalism's control over our information spaces, described by the author as the tragedy of the “un-commons”?",
      "What is meant by the “secret extraction operation,” and why does the author argue that focusing regulation on data extraction (rather than content) would help protect freedom of expression?",
    ]
  },
  {
    title: "OComputational Advertising: A Smarter Way to Automate Advertising | Medium 1",
    text: [
      "What is Real-Time Bidding (RTB), and how does it use instant auctions to decide which ad is displayed when you open a webpage?",
      "Describe the roles of the Demand-Side Platform (DSP) and the Supply-Side Platform (SSP) in programmatic advertising. How do they work together (via an ad exchange) to automate the buying and selling of ad space?",
    ]
  },
];

const youtubeVideos = [
  "JQyJ-cI6S3A?si=hHMk_z_QPce-8KI1",
  "kiInh5STnyQ?si=NzwCBont7IRVKCw2",
  "yVwKQqbMw-c?si=sZJw7_pM5VRcq4MH",
  "FcADchWhwUk?si=D9p9JegzFUc8wURc",
];

const videoQuestions = [
  {
    title: "How Targeted Advertising Works | Consumer Reports",
    text: [
      "What is targeted advertising?",
      "How does it work?",
      "What are the pros and cons?",
    ]
  },
  {
    title: "How YouTube knows what you should watch | Crash Course AI #15",
    text: [
      "How does the YouTube algorithm determine what videos to suggest to a user?",
      "Do you think there is a better way to make recommendations to users?",
    ],
  },
 {
    title: "Targeted Ads: The Dark Side of Divulging Your Data",
    text: [
      "Do you think there should be laws preventing companies from storing or selling people' data? Why do you think there are currently no laws in the U.S. addressing that issue?",
      "Do you think if people understood that companies are profiting off their data, it would change how they behave online?",
     
    ],
  },
 {
    title: "What is Surveillance Capitalism?",
    text: [
      "In your own words, what is surveillance capitalism, and how does it differ from traditional industrial capitalism?",
      "In your own words, explain what the behavioral reinvestment cycle was and how Google's understanding of data exhaust transformed that cycle into surveillance capitalism.",
    ],
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
      <img src="/advertising-banner.png" alt="Ad" className={styles.bannerImage} />
      <img src="/CS+Adverising.jpg" alt="CS + Ad" className={styles.firstImage} />
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

      {/* What will we be Learning Section? */}

      <section className={styles.learningSection3}>
      <div className={styles.whiteBackground}>
      <div className={styles.bigBlueText}>What will we be Learning?</div>
      <div className={styles.headingText}> The Daily Illini's Reading Corner</div>
      <ul className={styles.objectivesList}>
          <li>How Recommedation Algorithms Run the World | WIRED</li>
          <li>Opinion - You Are Now Remotely Controlled | The New York Times</li>
          <li>Computational Advertising: A Smarter Way to Automate Advertising | Medium</li>
          <li>Opinion - You Are the Object of Facebook's Secret Extraction Operation | The New York Times</li>
      </ul>
      <div className={styles.headingText}> The Daily Illini's Coffee Chats</div>
      <ul className={styles.objectivesList}>
          <li>How Recommedation Algorithms Run the World | WIRED - Questions</li>
          <li>Opinion - You Are Now Remotely Controlled | The New York Times - Questions</li>
          <li>Computational Advertising: A Smarter Way to Automate Advertising | Medium - Questions</li>
          <li>Opinion - You Are the Object of Facebook's Secret Extraction Operation | The New York Times - Questions</li>
      </ul>
      <div className={styles.headingText}>A Show in Foellinger Auditorium!</div>
        <ul className={styles.objectivesList}>
          <li>How Targeted Advertising Works | Consumer Reports | 4:07 </li>
          <li>How YouTube knows what you should watch | Crash Course AI #15 | 10:51 </li>
          <li>Targeted Ads: The Dark Side of Divulging Your Data | Iluli by Mike Lamb | 5:10</li>
          <li>What is Surveillance Capitalism? | Poiesis | 8:04</li>
        </ul>
      <div className={styles.headingText}>Foellinger Showing's Dinner Talks</div>
        <ul className={styles.objectivesList}>
          <li>How Targeted Advertising Works | Consumer Reports | 4:07 - Questions</li>
          <li>How YouTube knows what you should watch | Crash Course AI #15 | 10:51 - Questions </li>
          <li>Targeted Ads: The Dark Side of Divulging Your Data | Iluli by Mike Lamb | 5:10 - Questions</li>
          <li>What is Surveillance Capitalism? | Poiesis | 8:04 - Questions</li>
        </ul>
      </div>
      </section>

      <div style={{ padding: "2%" }}></div>

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
          src="/Ad-iten.png"
          alt="Mus Item"
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