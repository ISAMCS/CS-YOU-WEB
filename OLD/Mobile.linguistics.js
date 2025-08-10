import styles from "styles/Mobile/Mobile.linguistics.module.css";
import React, { useState, useEffect } from "react";

const newsArticles = [
  {
    title: "OpenAI's Realistic Text-Generating \n AI Triggers Ethics Concerns | Forbes",
    link: "/OpenAI's Realistic Text-Generating AI Triggers Ethics Concerns.pdf",
    image: "/OpenAI header.png",
  },
  {
    title: "Why a Conversation With Bing's \n Chatbot Left Me Deeply Unsettled \n | The New York Times",
    link: "/public/Why a Conversation With Bing's Chatbot Left Me Deeply Unsettled - The New York Times.pdf",
    image: "/bing header.png",
  },
  {
    title: "How to make a chatbot that isn't \n racist or sexist \n | MIT Technology Review",
    link: "https://www.technologyreview.com/2020/10/23/1011116/chatbot-gpt3-openai-facebook-google-safety-fix-racist-sexist-language-ai/",
    image: "/MIT header.png",
  },
  {
    title: "Automated speech recognition \n is less accurate for black\n speakers | Stanford News",
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
];

const youtubeVideos = [
  "fOvTtapxa9c?si=YDdv80_qpCMdo60_",
  "3npuPXvA_g8?si=rJYGrvUtECszdasu",
];

const projectContents = [
  {
    title: "Project 1: Trees",
    cta: "Click here to start",
    description: "A project surrounding linguistics and trees, combining the interaction of grammar and CS.",
    libraries: ["random"],
    platform: [],
    functions: ["N/A"],
    components: [],
    skills: ["Tree traversal", "Syntax analysis", "Visualization"],
    objectives: ["Learn how to navigate trees and grammar rules"],
    image: "trees.png",
    local: "/mods/p1",
  },
  {
    title: "Project 2: Introduction to Silly Sentences",
    cta: "Click here to start",
    description: "A project surrounding forming silly sentences in Python with Google Colab or CodeHS.",
    libraries: ["random"],
    platform: ["Google Colab", "CodeHS"],
    functions: [],
    components: ["If statements", "variable assignment", "print statements", "concatenation"],
    skills: [],
    objectives: ["Learn to create a code snippet to generate a silly sentence"],
    image: "silly_sentences.png",
    google: "https://colab.research.google.com/drive/1KKWe6JeNokMT6wOarSsxLLY_9iPszjvv?usp=sharing",
    codehs: "https://codehs.com/sandbox/id/silly-sentences-introduction-aYcDUr?collaborate=-OLF5CoIwO67zIrTzK9a",
  },
  {
    title: "Project 3: Silly Sentences (no recursion) Project",
    cta: "Click here to start",
    description: "A more complex extension of the Silly Sentences project to create more complex silly sentences.",
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
    description: "A tutorial and generator on how to create a short Japanese style poem called a Haiku.",
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
      "Apply your grammar, language, and coding skills to generate a Japanese Haiku Poem and Apply your grammar skills, analytical skills, and coding skills to generate a Japanese Haiku Poem and find out how many syllables is in each word"
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
    description: "A haiku generator starter code with a goal to figure out how many syllables are in each word!",
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
      "Have fun generating a haiku with your own words and then analyze the workspace with a few questions for thought afterwards"
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

const Home = () => {

  const [showArrow, setShowArrow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleCarouselClick = (newIndex) => {
    // Wrap around logic
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
  
    const [currentVideo, setCurrentVideo] = useState(0);
  
    const handlePrev = () => {
      setCurrentVideo((prev) => (prev === 0 ? youtubeVideos.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentVideo((prev) => (prev === youtubeVideos.length - 1 ? 0 : prev + 1));
    };
  
    const [currentProjectIndex] = useState(0);
    const currentProject = projectContents[currentProjectIndex];
  
  return (
   <div>
      <div className={styles.indexContainer}>

      {/* First Section */}

      <section className={styles.imageWrapper}>
        <img src="/MusBanner.png" alt="Mus" className={styles.LingBanner} />
        <img src="/CS + music.jpg" alt="CS + Mus" className={styles.firstImage} />
        <div className={styles.scrollContainer}>
          <div className={styles.scrollTextLeft}>Scroll</div>
          <div className={styles.scrollTextRight}>Down</div>
        </div>
        <div>
          {showArrow && (
            <div className={styles.arrowContainer}>
              <img
                src="/ArrowBlue.png"
                alt="Scroll Down Arrow"
                className={styles.longArrow}
              />
            </div>
          )}
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
              </div>
              <div className={styles.newsTitleBelow}>
                {article.title}
              </div>
            </a>
          ))}
          <div style={{ padding: "24px" }}></div>
        </div>
      </section>

      <div className={styles.whitebreak}></div>

      {/* Audience Section */}

      <section className={styles.audienceSection}>
        <img
          src="/foecircle.png"
          alt="FOE Circle"
          className={styles.foeCircle}
        />
        <img
          src="/linguisticsIten.png"
          alt="Linguistics Item"
          className={styles.linguisticsItem}
        />
        <div className={styles.audienceText}>
          A show in <br />foellinger<br />auditorium!
        </div>
      </section>

      {/* Movie Time */}

      `<section className={styles.carouselSection}>
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

      {/* Let's learn section */}

      <section className={styles.learningSection}>
        <div className={styles.learningText}>Let's do some learning!</div>
        <img
          src="/learning.png"
          alt="Learning"
          className={styles.learningImage}
        />
      </section>

      <div className={styles.break}></div>

      {/* Learning Section */}

      <div className={styles.practiceText}>Practice Makes Perfect!</div><div className={styles.practiceText}>Practice Makes Perfect!</div>
      <div className={styles.instructionText}>Please Make a Copy of each Google Colab Module <br /> by going to "File" and "Save a Copy in Drive"</div>

      <section className={styles.learningCardColumn}>
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
        </section> 
          
        {/* Goose and Squirrel */}

        <div className={styles.squirrelGooseRow}>
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
        <div className={styles.break}></div>
    </div>

  </div>
  );
};

export default Home;