import Navbar from "components/Navbar/NavbarPlusX";
import React, { useState, useEffect } from "react";
import styles from "styles/Pages/Csplusx.module.css";


const youtubeVideos = [
  {
    src: "https://www.youtube.com/embed/3xdmEwTIsd0",
    title: "The Computer and Turing: Crash Course History of Science #36",
    desc: "Crash Course explores the history of computers and Turing's contributions"
  },
  {
    src: "https://www.youtube.com/embed/_ZjGOiJXVBA",
    title: "Why Are There So Few Women in Computer Science?",
    desc: "PBS Origin discusses why there are fewer women in computer science"
  },
  {
    src: "https://www.youtube.com/embed/00zgVDSkga0",
    title: "Intro Python- Variables",
    desc: "CodeHS explains Python variables in this introductory video"
  },
  {
    src: "https://www.youtube.com/embed/l26oaHV7D40",
    title: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
    desc: "A Crash Course video that introduces programming basics, including statements and functions"
  }
];

const googleSlides = [

  {
    src: "https://docs.google.com/presentation/d/e/2PACX-1vQwWi2QcOh4y2zGmOv_HyDSL21Uw7ivz-iX0H6L-OK5LzW9v9-0G90Bbi4cKs81Gh6Shvt2iRMV1oCt/pubembed?start=false&loop=false&delayms=3000",
    title: "Google Slides"
  },
  {
    src: "https://docs.google.com/presentation/d/e/2PACX-1vSBUuWqc25O-OqmURPWWOCg5xTe_B32zxaCp0ewMOmRzmlTOv2rXXJ4nYOLdGNSmgmXe-qJxO-CycOY/pubembed?start=false&loop=false&delayms=3000",
    title: "Google Slides 2"
  }

];

const learningLinks = [
  {
    name: "AI For Oceans",
    url: "https://curriculum.code.org/hoc/plugged/9/"
  },
  {
    name: "Learn Python",
    url: "https://learnpython.org/"
  },
  {
    name: "How to Think Like a Computer Scientist",
    url: "https://runestone.academy/ns/books/published/thinkcspy/index.html"
  }
];

export default function PlusX() {

  const [showArrow, setShowArrow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      setShowArrow(scrollTop > 75);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
        <div className={styles.indexContainer}>

          {/* First Part */}

          <section className={styles.imageWrapper}>
            <div className={styles.semiTransparentBlock}>
              <img src="/CS_Banner.png" alt="CS Banner" className={styles.bannerImage} />
            </div>
            <img src="/CS+education.jpg" alt="CS + Education" className={styles.firstImage} />
            <div className={styles.scrollContainer}>
              <div className={styles.scrollTextLeft}>Scroll</div>
              <div className={styles.scrollTextRight}>Down</div>
            </div>
            {showArrow && (
              <div className={styles.arrowContainer}>
                <img
                  src="/ArrowBlue.png"
                  alt="Scroll Down Arrow"
                  className={styles.longArrow}
                />
              </div>
            )}
          </section>

          {/* What is CS + X Section */}

          <section className={styles.fullBlue1Background}>
          <div className={styles.Blue1Content}>
          <div className={styles.bigBlueText}>What is <br /> CS + X?</div>

          <div className={styles.headingText}> Learning <br /> Objectives</div>
          <ul className={styles.orangeList}>
              <li>Develop an understanding of the ubiquity of computing in multiple fields</li>
              <li>Be able to explain the different techniques used within computer science</li>
              <li>Appreciate a broader view of the people who constitute the computing field</li>
              <li>Write simple programs</li>
              <li>Be able to discuss contemporary issues and ethical questions in CS</li>
              <li>Describe ways in which CS impacts society</li>
              <li>Critique approaches to problem solving with computing</li>
              <li>Identify connections between your personal interests and computing</li>
          </ul>
          </div>
          </section>

          {/* What we will be doing section */}

          <section className={styles.fullOrangeBackground}>
          <div className={styles.orangeContent}>
              <div className={styles.orangeHeading}>What will <br/> we be doing?</div>
              <ul className={styles.orangeList}>
              <li>Programming (no experience required!)</li>
              <li>Discovering how CS impacts our society and everyday lives</li>
              <li>Consider the ethical questions that computer science needs to address.</li>
              <li>Reading articles and watching videos</li>
              <li>Gaining a more profound understanding from written reflections and class discussions</li>
              <li>Building projects with classmates and individually</li>
              <li>Making mistakes! This is okay and a normal part of the learning process!</li>
              </ul>
          </div>
          </section>

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
                  className={styles.googleSlidesIframe}
                ></iframe>
              ))}
            </div>
          </section>

          {/* explore more section */}

          <section className={styles.fulltanBackground}>
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
          </section>

          {/* links for learning section */}

          <section className={styles.OrangeBackground}>
            <div className={styles.orange2Content}>
              <div className={styles.orange2Heading}>Links for Learning!</div>
                <ul className={styles.endList}>
                  {learningLinks.map(link => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff", textDecoration: "underline" }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
          </section>

        </div>
    </>
  );
}