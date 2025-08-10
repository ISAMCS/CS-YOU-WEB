"use client";

import React, { useState, useEffect } from "react";
import styles from "styles/Mobile/Mobile.csplusx.module.css";

const youtubeVideos = [
  {
    src: "https://www.youtube.com/embed/3xdmEwTIsd0",
    title: "The Computer and Turing: Crash Course History of Science #36",
    desc: "Crash Course explores the history of computers and Turing's contributions."
  },
  {
    src: "https://www.youtube.com/embed/_ZjGOiJXVBA",
    title: "Why Are There So Few Women in Computer Science?",
    desc: "PBS Origin discusses why there are fewer women in computer science"
  },
  {
    src: "https://www.youtube.com/embed/00zgVDSkga0",
    title: "Intro Python- Variables",
    desc: "Code HS explains Python variables in this introductory video."
  },
  {
    src: "https://www.youtube.com/embed/l26oaHV7D40",
    title: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
    desc: "A Crash Course video that introduces programming basics, including statements and functions."
  }
];

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleCarouselClick = (newIndex) => {

    const total = youtubeVideos.length;
    let idx = newIndex;
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    setCurrentIndex(idx);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      setShowArrow(scrollTop > 75);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCarouselIndices = () => {
    const total = youtubeVideos.length;
    const left = (currentIndex - 1 + total) % total;
    const center = currentIndex;
    const right = (currentIndex + 1) % total;
    return [left, center, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getCarouselIndices();

  return (

      <div className={styles.indexContainer}>
        <div className={styles.imageWrapper}>
          <div className={styles.semiTransparentBlock}></div>
          <img src="/CS_Banner.png" alt="CS Banner" className={styles.bannerImage} />
          <img src="/CS_+_education.jpg" alt="CS + Education" className={styles.firstImage} />
          <div className={styles.scrollContainer}>
            <div className={styles.scrollTextLeft}>Scroll</div>
            <div className={styles.scrollTextRight}>Down</div>
          </div>
        </div>

        {/* New bright blue section */}

        <div className={styles.bigBlueText}>What is CS + X?</div>
        <div className={styles.headingText}> Learning Objectives</div>
        <ul className={styles.objectivesList}>
            <li>Develop an understanding of the ubiquity of computing in multiple fields</li>
            <li>Be able to explain the different techniques used within computer science</li>
            <li>Appreciate a broader view of the people who constitute the computing field</li>
            <li>Write simple programs</li>
            <li>Be able to discuss contemporary issues and ethical questions in CS</li>
            <li>Explain ways in which CS impacts society</li>
            <li>Critique approaches to problem solving with computing</li>
            <li>Identify connections between your personal interests and computing</li>
        </ul>

        {/* New bright orange section */}
        
        <div className={styles.fullOrangeBackground}>
        <div className={styles.orangeContent}>
            <div className={styles.orangeHeading}>What will we be doing?</div>
            <ul className={styles.orangeList}>
            <li>Programming (no experience required!)</li>
            <li>Discovering how CS impacts our society and everyday lives</li>
            <li>Considering ethical questions that need to be addressed in computer science</li>
            <li>Reading articles and watching videos</li>
            <li>Gaining a deeper understanding from written reflections and class discussions</li>
            <li>Building projects with classmates and individually</li>
            <li>Making mistakes! And that is okay and a normal part of learning!</li>
            </ul>
        </div>
        </div>

        {/* New bright blue section */}

        <div className={styles.fullBlueBackground}>
          <div className={styles.BlueContent}>
            <div className={styles.BlueHeading}>Look at Our Google Slides!</div>
              <div style={{ height: "1.5rem" }} />
              
            {/* Responsive Google Slides 1 */}
            <div
              style={{
                position: "relative",
                width: "100vw",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: "100%",
                margin: "0",
                background: "#fff"
              }}
            >
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQwWi2QcOh4y2zGmOv_HyDSL21Uw7ivz-iX0H6L-OK5LzW9v9-0G90Bbi4cKs81Gh6Shvt2iRMV1oCt/pubembed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                allowFullScreen
                title="Google Slides"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  background: "#fff",
                  display: "block"
                }}
              ></iframe>
            </div>
            {/* Gap between slides */}
            <div style={{ height: "1.5rem" }} />
            {/* Responsive Google Slides 2 */}
            <div
              style={{
                position: "relative",
                width: "100vw",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: "100%",
                margin: "0",
                background: "#fff"
              }}
            >
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vSBUuWqc25O-OqmURPWWOCg5xTe_B32zxaCp0ewMOmRzmlTOv2rXXJ4nYOLdGNSmgmXe-qJxO-CycOY/pubembed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                allowFullScreen
                title="Google Slides 2"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  background: "#fff",
                  display: "block"
                }}
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.fulltanBackground}>
          <div className={styles.tanContent}>
            <h2 className={styles.carouselHeading}>Explore More</h2>
            <div className={styles.videoList}>
              {youtubeVideos.map((video, idx) => (
                <div key={idx} className={styles.videoListCell}>
                  <div className={styles.videoWrapper}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className={styles.carouselDesc}>
                    <strong>{video.title}</strong>
                    <p>{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.fullOrangeBackground}>
        <div className={styles.orangeContent}>
            <div className={styles.orangeHeading}>Links for Learning!</div>
              <ul className={styles.endList}>
                <li>
                  <a
                    href="https://curriculum.code.org/hoc/plugged/9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "underline" }}
                  >
                    AI For Oceans
                  </a>
                </li>
                <li>
                  <a
                    href="https://learnpython.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "underline" }}
                  >
                    Learn Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://runestone.academy/ns/books/published/thinkcspy/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "underline" }}
                  >
                    How to Think Like a Computer Scientist
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
  );
};

export default Home;