import styles from "styles/Pages/Linguistics.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "components/Navbar/NavbarLing.js";

const newsArticles = [
  {
    title: "OpenAI's Realistic Text-Generating \n AI Triggers Ethics Concerns | Forbes",
    link: "/pdfs/openai-ethics.pdf",
    image: "/OpenAI header.png",
  },
  {
    title: "Why a Conversation With Bing's \n Chatbot Left Me Deeply Unsettled \n | The New York Times",
    link: "/pdfs/bing-chatbot.pdf",
    image: "/bing header.png",
  },
  {
    title: "How to make a chatbot that isn't \n racist or sexist \n | MIT Technology Review",
    link: "https://www.technologyreview.com/2020/10/23/1011116/chatbot-gpt3-openai-facebook-google-safety-fix-racist-sexist-language-ai/",
    image: "/MIT header.png",
  },
  {
    title: "Stanford researchers find \n that automated speech recognition is more likely to misinterpret black speakers | Stanford News",
    link: "https://news.stanford.edu/stories/2020/03/automated-speech-recognition-less-accurate-blacks/",
    image: "/Stanford header.png",
  },
  {
    title: "Jazmia Henry:\nBuilding Inclusive NLP \n | Stanford",
    link: "https://hai.stanford.edu/news/jazmia-henry-building-inclusive-nlp",
    image: "/AAVE header.png",
  },
  {
    title: "How Movie Magic Could \n Help Translate for \n Deaf Students | Slate",
    link: "https://slate.com/technology/2017/05/computer-avatars-can-translate-written-spoken-words-into-sign-language.html",
    image: "/Deaf header.png",
  },
  {
    title: "Protecting Indigenous \n Languages Using \n Automatic Speech Recognition \n | Northeastern Global News",
    link: "https://news.northeastern.edu/2021/10/08/protecting-indigenous-languages-using-automatic-speech-recognition/",
    image: "/native header.png",
  },
  {
    title: "Language Preservation Efforts\n Get an AI Boost | Dartmouth",
    link: "https://home.dartmouth.edu/news/2025/04/language-preservations-efforts-get-ai-boost/",
    image: "/Dartmouth header.png",
  },
  // Add more articles here as needed
  // {
  //   title: "Another Article Title",
  //   link: "/another-article.pdf",
  //   image: "/another-article.png",
  // },
];

const youtubeVideos = [
  "fOvTtapxa9c?si=YDdv80_qpCMdo60_",
  "3npuPXvA_g8?si=rJYGrvUtECszdasu",
];

const projectContents = [
  {
    title: "Project 1: Trees",
    cta: "Click here to start",
    description: "The project revolves around linguistics and trees, integrating the interplay of grammar and computer science",
    libraries: ["random"],
    platform: [],
    functions: ["N/A"],
    components: [],
    skills: ["Tree traversal", "Syntax analysis", "Visualization"],
    objectives: ["Learn how to navigate trees and grammar rules"],
    image: "trees.png",
    local: "/Projects/P1",
  },
  {
    title: "Project 2: Introduction to Silly Sentences",
    cta: "Click here to start",
    description: "The project involves creating absurd sentences in Python using either Google Colab or CodeHS",
    libraries: ["random"],
    platform: ["Google Colab", "CodeHS"],
    functions: [],
    components: ["If statements", "variable assignment", "print statements", "concatenation"],
    skills: [],
    objectives: ["Learn how to create a code snippet that generates a silly sentence"],
    image: "silly_sentences.png",
    google: "https://colab.research.google.com/drive/1KKWe6JeNokMT6wOarSsxLLY_9iPszjvv?usp=sharing",
    codehs: "https://codehs.com/sandbox/id/silly-sentences-introduction-aYcDUr?collaborate=-OLF5CoIwO67zIrTzK9a",
  },
  {
    title: "Project 3: Silly Sentences (no recursion) Project",
    cta: "Click here to start",
    description: "We are extending the Silly Sentences project to create more intricate and sophisticated silly sentences",
    libraries: ["random"],
    platform: ["Google Colab", "CodeHS"],
    functions: ["DET()", "NOUN()", "PNOUN()", "IVERB()", "ADJECTIVE()", "NP()", "SENT()"],
    components: [],
    skills: ["Functions", "sentence generation", "concatenation", "variable declarations"],
    objectives: ["Apply your grammar and language knowledge to generate complex silly sentences."],
    image: "silly_sentences_advanced.png",
    google: "https://colab.research.google.com/drive/1lMtIJ2yu_-knFdatbSQFtC1VrNtuKv6y?usp=sharing",
    codehs: "https://codehs.com/sandbox/id/silly-sentences-tutorial-dExypa",
    codehssol: "https://codehs.com/sandbox/id/silly-sentences-completed-HYdtSf",
  },
  {
    title: "Project 4: Haiku",
    cta: "Click here to start",
    description: "This is a tutorial and generator on how to create a short Japanese-style poem called a haiku",
    libraries: ["random"],
    platform: ["Google Colab", "CodeHS"],
    functions: [
      "NOUN(n)", "DET(d)", "VERB(v)", "ADVERB(b)", "ADJECTIVE(j)",
      "NP(syllables)", "VP(syllables)", "NPVP(syllables)", "Haiku()",
    ],
    components: [],
    skills: [
      "Functions", "sentence generation", "variable declarations", "for loops",
      "if else statements", "while loop", "true/false booleans", "print statements",
      "concatenation", "assignment and equality statements", "grammar"
    ],
    objectives: [
      "Apply your grammar, language, and coding skills to generate a Japanese haiku poem and Apply your grammar skills, analytical skills, and coding skills to generate a Japanese haiku poem and find out how many syllables are in each word"
    ],
    image: "/HaikuGenerator.png",
    codhs: "https://codehs.com/sandbox/id/haiku-tutorial-Dztmqr",
    codehssol: "https://codehs.com/sandbox/id/haiku-generator-completed-wFsAJi",
    google: "https://colab.research.google.com/drive/1IdjoH17j85G0ua5U6JEeb8WGTnw20eNH?usp=sharing",
    googlesol: "https://colab.research.google.com/drive/1UJYQKd3XMlcLaQL3HnJ5ePZJxRU0-yjb?usp=sharing"
  },
  {
    title: "Project 5: Frank Goes to Japan",
    cta: "Click here to start",
    description: "The purpose of this haiku generator starter code is to determine the number of syllables in each word!",
    libraries: ["random", "nltk", "IPython.display", "nltk.corpus"],
    platform: ["Google Colab"],
    functions: [
      "count_syllables()", "generate_haiku_line()", "generate_haiku()", "display_results()"
    ],
    components: [],
    skills: [
      "Functions", "sentence generation", "variable declarations", "if else statements",
      "while loop", "true/false booleans", "print statements", "indexing", "html integration"
    ],
    objectives: [
      "Have fun generating a haiku with your own words"
    ],
    image: "/FrankJapan.png",
    googleshort: "https://colab.research.google.com/drive/19QTefxWfYsePvtgSEuKj95Y5X9auRTGS?usp=drive_link",
    googlelong: "https://colab.research.google.com/drive/15va1fNDz6S7QirGLvHTy84fdKdL38kNs?usp=sharing",
  },
];

const news2Articles = [
  {
    title: "AI & Language: The Next Frontier",
    text: "Artificial Intelligence is rapidly transforming how we interact with language, from translation to sentiment analysis and beyond.",
  },
  {
    title: "Ethics in NLP",
    text: "With great power comes great responsibility. Ethical considerations are crucial as NLP systems become more widespread.",
  },
  {
    title: "Preserving Endangered Languages",
    text: "Technology is now being used to document and revitalize languages at risk of extinction, ensuring cultural heritage is not lost.",
  },
  // Add more rows as needed
];

export default function Ling(){

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


        {/* Redesigned "What will we be Learning?" Section */}
<section className={styles.learningIntroSection}>
  <div className={styles.whiteBackground}>
    <div className={styles.bigBlueText}>What will we be Learning?</div>
    <div className={styles.learningIntroImageWrapper}>
      <img src="/CS+Ling.jpg" alt="CS + Linguistics" className={styles.learningIntroImage} />
    </div>
    <div className={styles.learningNavLinks}>
      <a href="#news-corner" className={styles.learningNavLink}>Reading Corner</a>
      <a href="#audience-section" className={styles.learningNavLink}>Show in Foellinger</a>
      <a href="#practice-project-section" className={styles.learningNavLink}>Practice Project</a>
    </div>
    <div id="reading-corner" className={styles.learningSectionBlock}>
      <div className={styles.headingText}>📰 The Daily Illini's Reading Corner</div>
      <ul className={styles.objectivesList}>
        <li>
          <strong>OpenAI's Realistic Text-Generating AI Triggers Ethics Concerns</strong> <br />
          Explore the ethical challenges of advanced text-generating AI. <br />
          <a href="/pdfs/openai-ethics.pdf" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
        <li>
          <strong>Why a Conversation With Bing's Chatbot Left Me Deeply Unsettled</strong> <br />
          Discover the surprising effects of chatbot conversations. <br />
          <a href="/pdfs/bing-chatbot.pdf" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
        <li>
          <strong>How to make a chatbot that isn't racist or sexist</strong> <br />
          Learn about building fair and safe chatbots. <br />
          <a href="https://www.technologyreview.com/2020/10/23/1011116/chatbot-gpt3-openai-facebook-google-safety-fix-racist-sexist-language-ai/" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
        <li>
          <strong>Stanford researchers find that automated speech recognition is more likely to misinterpret black speakers</strong> <br />
          Examine bias in speech recognition technology. <br />
          <a href="https://news.stanford.edu/stories/2020/03/automated-speech-recognition-less-accurate-blacks/" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
        <li>
          <strong>Jazmia Henry: Building Inclusive NLP</strong> <br />
          See how NLP can be made more inclusive. <br />
          <a href="https://hai.stanford.edu/news/jazmia-henry-building-inclusive-nlp" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
        <li>
          <strong>How Movie Magic Could Help Translate for Deaf Students</strong> <br />
          Discover how avatars can translate words into sign language. <br />
          <a href="https://slate.com/technology/2017/05/computer-avatars-can-translate-written-spoken-words-into-sign-language.html" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
        <li>
          <strong>Protecting Indigenous Languages Using Automatic Speech Recognition</strong> <br />
          Learn how technology helps preserve endangered languages. <br />
          <a href="https://news.northeastern.edu/2021/10/08/protecting-indigenous-languages-using-automatic-speech-recognition/" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
        <li>
          <strong>Language Preservation Efforts Get an AI Boost</strong> <br />
          See how AI is supporting language preservation. <br />
          <a href="https://home.dartmouth.edu/news/2025/04/language-preservations-efforts-get-ai-boost/" target="_blank" className={styles.learnMoreLink}>Read Article</a>
        </li>
      </ul>
    </div>
    <div id="foellinger-show" className={styles.learningSectionBlock}>
      <div className={styles.headingText}>🎬 A Show in Foellinger Auditorium!</div>
      <ul className={styles.objectivesList}>
        <li>
          <strong>Natural Language Processing: Crash Course Computer Science #36 | 11:50</strong> <br />
          Watch an introduction to NLP and its applications.
        </li>
        <li>
          <strong>Computational Linguistics: Crash Course Linguistics #15 | 11:23</strong> <br />
          Learn about computational linguistics and how computers understand language.
        </li>
      </ul>
    </div>
    <div id="practice-project-section-overview" className={styles.learningSectionBlock}>
      <div className={styles.headingText}>🎵 Practice Makes Perfect!</div>
      <ul className={styles.objectivesList}>
        <li>
          <strong>Project 1: Trees</strong> <br />
          Explore grammar and computer science with tree structures. <br />
          <a href="/Projects/P1" className={styles.learnMoreLink}>Start Project</a>
        </li>
        <li>
          <strong>Project 2: Introduction to Silly Sentences</strong> <br />
          Create silly sentences in Python using Google Colab or CodeHS. <br />
          <a href="https://colab.research.google.com/drive/1KKWe6JeNokMT6wOarSsxLLY_9iPszjvv?usp=sharing" target="_blank" className={styles.learnMoreLink}>Google Colab</a>
          {" | "}
          <a href="https://codehs.com/sandbox/id/silly-sentences-introduction-aYcDUr?collaborate=-OLF5CoIwO67zIrTzK9a" target="_blank" className={styles.learnMoreLink}>CodeHS</a>
        </li>
        <li>
          <strong>Project 3: Silly Sentences (no recursion) Project</strong> <br />
          Generate more complex silly sentences. <br />
          <a href="https://colab.research.google.com/drive/1lMtIJ2yu_-knFdatbSQFtC1VrNtuKv6y?usp=sharing" target="_blank" className={styles.learnMoreLink}>Google Colab</a>
          {" | "}
          <a href="https://codehs.com/sandbox/id/silly-sentences-tutorial-dExypa" target="_blank" className={styles.learnMoreLink}>CodeHS</a>
          {" | "}
          <a href="https://codehs.com/sandbox/id/silly-sentences-completed-HYdtSf" target="_blank" className={styles.learnMoreLink}>CodeHS Solutions</a>
        </li>
        <li>
          <strong>Project 4: Haiku</strong> <br />
          Generate Japanese-style haiku poems using code. <br />
          <a href="https://colab.research.google.com/drive/1IdjoH17j85G0ua5U6JEeb8WGTnw20eNH?usp=sharing" target="_blank" className={styles.learnMoreLink}>Google Colab</a>
          {" | "}
          <a href="https://codehs.com/sandbox/id/haiku-tutorial-Dztmqr" target="_blank" className={styles.learnMoreLink}>CodeHS</a>
          {" | "}
          <a href="https://codehs.com/sandbox/id/haiku-generator-completed-wFsAJi" target="_blank" className={styles.learnMoreLink}>CodeHS Solutions</a>
          {" | "}
          <a href="https://colab.research.google.com/drive/1UJYQKd3XMlcLaQL3HnJ5ePZJxRU0-yjb?usp=sharing" target="_blank" className={styles.learnMoreLink}>Google Colab Solutions</a>
        </li>
        <li>
          <strong>Project 5: Frank Goes to Japan</strong> <br />
          Determine syllables in words and generate haiku with your own words. <br />
          <a href="https://colab.research.google.com/drive/19QTefxWfYsePvtgSEuKj95Y5X9auRTGS?usp=drive_link" target="_blank" className={styles.learnMoreLink}>Google Colab Short</a>
          {" | "}
          <a href="https://colab.research.google.com/drive/15va1fNDz6S7QirGLvHTy84fdKdL38kNs?usp=sharing" target="_blank" className={styles.learnMoreLink}>Google Colab Long</a>
        </li>
      </ul>
    </div>
  </div>
</section>

        <div style={{ padding: "3vh" }}></div>

        {/* NewsCorner Section */}
        <section id="news-corner" className={styles.newsCornerSection}>
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

        <div style={{ padding: "3vh" }}></div>


        {/* Movie Time */}

        <section id="audience-section" className={styles.audienceSection}>
          <img
            src="/foecircle.png"
            alt="FOE Circle"
            className={styles.foeCircle}
          />
          <div className={styles.audienceText}>
            A show in <br />foellinger<br />auditorium!
          </div>
          <img
            src="/linguisticsIten.png"
            alt="Mus Item"
            className={styles.linguisticsItem}
          />
        </section>

        <div style={{ padding: "3vh" }}></div>

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

        <div style={{ padding: "3vh" }}></div>

        {/* Let's learn section */}

        <section className={styles.learningSection}>
          <div className={styles.learningText}>Let's do some learning!</div>
          <img
            src="/learning.png"
            alt="Learning"
            className={styles.learningImage}
          />
        </section>

        <div style={{ padding: "3vh" }}></div>

        {/* Learning Section */}

        <section id="practice-project-section"  className={styles.learningSection2}>
          <div className={styles.practiceText}>Practice Makes Perfect! <br /> Practice Makes Perfect!</div>
          <div className={styles.instructionText}>
            Please Make a Copy of each Google Colab Module by going to "File" and "Save a Copy in Drive"
          </div>

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
                        key.toLowerCase().includes('google') ||
                        key.toLowerCase().includes('codehs') ||
                        key === 'local'
                      ) &&
                      typeof value === 'string' && value
                    )
                    .map(([key, value], idx) =>
                      key === 'local' ? (
                        <Link
                          key={key}
                          href={value}
                          className={styles.learningCTA}
                        >
                          Start Project
                        </Link>
                      ) : (
                        <a
                          key={key}
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.learningCTA}
                        >
                          {key === 'google' && 'Google Colab Practice'}
                          {key === 'codehs' && 'CodeHS Practice'}
                          {key === 'codehssol' && 'CodeHS Solutions'}
                          {key === 'googlesol' && 'Google Colab Solutions'}
                          {key === 'googleshort' && 'Google Colab Practice - Short Version'}
                          {key === 'googlelong' && 'Google Colab Practice - Long Version'}
                        </a>
                      )
                    )
                  }
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

