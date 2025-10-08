import React, { useState, useEffect } from "react";
import styles from "styles/Pages/Phil.module.css";
import Navbar from "components/Navbar/NavbarPhil";

const newsArticles = [
  {
    title: "Google Sidelines Engineer Who Claims Its A.I. Is Sentient | The New York Times",
    link: "/pdfs/google-sentient-ai.pdf",
    image: "/google.png",
  },
  {
    title: "COMPUTING MACHINERY AND INTELLIGENCE | Alan Turing - Pages 1 - 8",
    link: "/pdfs/turing-pages.pdf",
    image: "/turing.png",
  },
 {
    title: "Teaching robots right from wrong | Science News Explores",
    link: "https://www.snexplores.org/article/teaching-robots-right-wrong",
    image: "/robotsphil.png",
  },
 {
    title: "A Case for Robot Disobedience | Scientific American",
    link: "https://www.cs.virginia.edu/~robins/A_Case_for_Robot_Disobedience.pdf",
    image: "/diosb.png",
  },
 {
    title: "Robotic police dogs: Useful hounds or dehumanizing machines? | AP News",
    link: "https://apnews.com/article/robotic-police-dogs-e32e371e8776b8565f1a0f6491e55c29",
    image: "/robotdogs.png",
  },
   {
    title: "The Ethics of Self-Driving Cars | John Hopkins Magazine",
    link: "https://hub.jhu.edu/magazine/2018/summer/ethical-dilemma-self-driving-car-autonomous-vehicles/",
    image: "/ethicscars.png",
  },
   {
    title: "Serious Concerns That AI Self-Driving Cars Cybersecurity Will Be A Hacker Leak Like An Open Sieve | Forbes",
    link: "pdfs/carshacker.pdf",
    image: "/hackerscars.png",
  },
 {
    title: "Does AI Know What an Apple Is? She Aims to Find Out | Quantamagazine",
    link: "https://www.quantamagazine.org/does-ai-know-what-an-apple-is-she-aims-to-find-out-20240425/",
    image: "/apple.png",
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
    title: "Google Sidelines Engineer Who Claims Its A.I. Is Sentient | The New York Times",
    text: [
      "What would an AI system that has achieved sentience (artificial general intelligence) be able to do? How could we tell if a system was sentient?",
    ]
  },
  {
    title: "COMPUTING MACHINERY AND INTELLIGENCE | Alan Turing - Pages 1 - 8",
    text: [
      "Who are the three players in Turing's “imitation game,” and what is the interrogator's objective?",
      "According to Turing, a digital computer consists of three parts. Name these parts and explain the role of the control unit.",
    ],
  },
  {
    title: "Teaching robots right from wrong | Science News Explores",
    text: [
      "What do you think about Asimov's laws? Would you add or modify any to better achieve an ethical robot?",
      "Who should be deciding what ethical systems to program in robots? Computer scientists? Philosophers? Both? Someone else?",
    ],
  },
  {
    title: "A Case for Robot Disobedience | Scientific American",
    text: [
      "Why might it be important for people to better understand how robots work given that they are becoming more integrated into our society? Consider the experiment described in the article, where a robot was programmed to refuse to knock down blocks. How would someone's understanding of robotics potentially change how they would react to a robot saying no?",
    ],
  },
  {
    title: "Robotic police dogs: Useful hounds or dehumanizing machines? | AP News",
    text: [
      "Do you think it would be possible to set up safeguards so Spot can't be misused for “aggressive, invasive, or dehumanizing uses”? What might those look like?",
    ],
  },
  {
    title: "The Ethics of Self-Driving Cars | John Hopkins Magazine",
    text: [
      "The article revisits the classic “trolley problem” to illustrate one of the hardest ethical choices for autonomous vehicles. In your own words, describe what the trolley problem is and explain how it applies to decisions a self-driving car's computer might have to make in an accident scenario.",
      "Researchers compare early AV testing to teaching a new driver. Why do they liken self-driving cars to “teenage drivers,” and what controlled approach do they suggest for rolling out AVs safely on public roads?",
    ],
  },
  {
    title: "Serious Concerns That AI Self-Driving Cars Cybersecurity Will Be A Hacker Leak Like An Open Sieve | Forbes",
    text: [
      "How do you think computer scientists might try to be proactive in preventing AVs from being hacked, rather than waiting for something bad to happen and then reacting?",
    ],
  },
  {
    title: "Does AI Know What an Apple Is? She Aims to Find Out | Quantamagazine",
    text: [
      "In the article, Ellie Pavlick wanted to know if an AI really “understands” colors, not just memorizes them. She gave the model made-up RGB codes (for example, telling it that “yellow” was actually the code for green) and then asked it to mix colors. Describe how this “rotated colors” experiment worked, and explain what the AI's success in it tells us about its understanding of color relationships.",
      "Pavlick's team discovered a single “retrieve-capital-city” vector inside a language model that let it answer both “What is the capital of France?” and “What is the capital of Poland?” by essentially “adding” that vector to the question. Explain how this finding suggests language models build internal conceptual structure rather than merely memorizing facts, and discuss why that distinction matters for evaluating AI “understanding.”",
    ],
  },
];

const projectContents = [
  {
    title: "Project 1: Moral Machine",
    cta: "Click here to start",
    description: "This module combines philosophy and computer science to analyze the ethical implications of self-driving cars", 
    libraries: ["N/A"],
    platform: ["Website Program"],
    functions: ["N/A"],
    components: ["Ethics", "Self Driving Cars", "Modern Trolley Dilemma"],
    skills: ["Analytical Thinking", "Ethical Reasoning"],
    objectives: ["Decide which choice you would make as a self-driving car in an accident"],
    image: "trolleycar.png",
    local: "https://www.moralmachine.net/",
  },
];

const youtubeVideos = [
  "https://www.youtube.com/embed/v6szO2yVrKo?si=JJiC1ziM3ZVkoNeD",
  "https://www.youtube.com/embed/Xw-zxQSEzqo?si=j_4H8Ko7UYYSGVh5",
  "https://www.youtube.com/embed/39EdqUbj92U?si=Rk9Ngn5LsVB8XqAU",
  "https://www.youtube.com/embed/ixIoDYVfKA0?si=VdPnOz7MZ0uL8WQb",
  "https://embed.ted.com/talks/iyad_rahwan_what_moral_decisions_should_driverless_cars_make"
];

const videoQuestions = [
  {
    title: "Google's AI Sentience: How Close Are We Really? | WSJ Tech News Briefing",
    text: [
      "What are some reasons we should and shouldn't try to achieve artificial general intelligence?",
    ]
  },
  {
    title: "Two AIs Have An Existential Crisis (GPT-3) | Decycle",
    text: [
      "Note: The AIs were generated using GPT-3. The prompt was 'the following is a conversation between two AIs. The AIs are both humorous, intelligent, and kind. They know they are bots.'",
      "What made Jack and Anna human-like? What made them not like humans?",
      "How is the prompt provided by the creator of the GPT-3 model related to the conversation between Jack and Anna?",
      "What are some positive uses you can think of for GPT-3? What might be some negative uses?",
    ],
  },
 {
    title: "Artifical Intelligence & Personhood: Crash Course Philosophy #23 | Crash Course",
    text: [
      "Do you think a program passing the Turing test proves that it has strong AI (the ability to think like a person)?",
      "Do you think Harry, the AI robot that looks and acts exactly like a person, is a person or just person-like?",
      "Do AI systems have any rights? What do you think they are?"
    ],
  },
 {
    title: "The Ethical Dilemma of Self-Driving Cars - Patrick Lin | Poiesis",
    text: [
      "What are the pros and cons of self-driving cars?",
      "How do you think society should respond to people losing their jobs as AVs are able to perform more functions?",
      "Who makes decisions about the ethical systems of self-driving cars?",
      "What might you decide if you were in their shoes?"
    ],
  },
 {
    title: "What Moral Decisions Should Driverless Cars Make? | TED",
    text: [
      "Why do driverless cars promise to reduce traffic deaths, and what is the “trolley problem” that the speaker uses to explain an ethical challenge for these cars?",
      "The speaker describes a “social dilemma” (or “tragedy of the commons”) in which each person wants their car to protect them at all costs, yet collectively we'd be safer if cars minimized overall harm. Analyze this dilemma and propose one regulatory or policy approach that could help align individual choices with the public good."
    ],
  },
];

export default function Phil() {

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
              <a href="#coffee-chats" className={styles.learningNavLink}>Coffee Chats</a>
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

          {/* CoffeeChats Section */}
          <section id="coffee-chats" className={styles.news2Section}>
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
              src="/phil-iten.png"
              alt="phil Item"
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
                src={youtubeVideos[currentVideo]}
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
              src="/thinkingman.png"
              alt="thinking"
              className={styles.learningImage}
            />
          </section>

          <div style={{ padding: "3vh" }}></div>

          {/* Learning Section */}
          <section id="practice-project-section" className={styles.learningSection2}>
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

