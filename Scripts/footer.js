document.addEventListener("DOMContentLoaded", () => {
  const optionSession = document.getElementById("option-session");
  const optionChapter = document.getElementById("option-chapter");
  const optionTopic = document.getElementById("option-topic");
  const mainContainer = document.querySelector(".footer-container");
  const chapterMainContainer = document.querySelector(".chapter-main-container");
  const chapterContainer = document.querySelector(".chapter-container");
  const sessionContainer = document.querySelector(".session-container");
  const topicContainer = document.querySelector(".topic-container");

  const iconClose = document.querySelector(".icon-close")

  // topic delclartions
  const topicsTextElements = [];
  for (let i = 0; i < 18; i++) {
    topicsTextElements[i] = document.getElementById(`topic-${i+1}-text`);
  }
  const topicsImageElements = [];
  for (let i = 0; i < 18; i++) {
    topicsImageElements[i] = document.getElementById(`topic-${i+1}`);
  }
  const topicsBannerElements = [];
  for (let i = 0; i < 18; i++) {
    topicsBannerElements[i] = document.getElementById(`topic-${i+1}-banner`);
  }

  const topics = ["The Word", "Nature of God", "Trinity", "Creation", "Biblical Authenticity"];
  const topicSession = [];

  // Map topic names (lowercase, no spaces) to their session arrays
  topicSession["The Word"] = ["session1", "session5", "session11"];

  var topicIndex = 0

  const chapterSubcontainers = [];
  for (let i = 1; i <= 21; i++) {
    chapterSubcontainers[i] = document.querySelector(`.chapter-${i}-sub-container`);
  }

  const chapters = [];
  for (let i = 1; i <= 21; i++) {
    chapters[i] = document.getElementById(`chapter-${i}`);
  }
  
  const chapterSession1 = document.getElementById("chapter-1-1");
  const chapterSession2 = document.getElementById("chapter-1-2");
  const chapterSession3 = document.getElementById("chapter-1-3");
  const chapterSession4 = document.getElementById("chapter-1-4");
  const chapterSession5 = document.getElementById("chapter-1-5");
  const chapterSession6 = document.getElementById("chapter-1-6");
  const chapterSession7 = document.getElementById("chapter-2-1");
  const chapterSession8 = document.getElementById("chapter-2-2");
  const chapterSession9 = document.getElementById("chapter-3-1");
  const chapterSession10 = document.getElementById("chapter-3-2");
  const chapterSession11 = document.getElementById("chapter-3-3");
  const chapterSession12 = document.getElementById("chapter-4-1");
  const chapterSession13 = document.getElementById("chapter-4-2");
  const chapterSession14 = document.getElementById("chapter-4-3");
  const chapterSession15 = document.getElementById("chapter-5-1");
  const chapterSession16 = document.getElementById("chapter-5-2");
  const chapterSession17 = document.getElementById("chapter-5-3");
  const chapterSession18 = document.getElementById("chapter-6-1");
  const chapterSession19 = document.getElementById("chapter-6-2");
  const chapterSession20 = document.getElementById("chapter-6-3");
  const chapterSession21 = document.getElementById("chapter-7-1");
  const chapterSession22 = document.getElementById("chapter-7-2");
  const chapterSession23 = document.getElementById("chapter-8-1");
  const chapterSession24 = document.getElementById("chapter-8-2");
  const chapterSession25 = document.getElementById("chapter-8-3");
  const chapterSession26 = document.getElementById("chapter-9-1");
  const chapterSession27 = document.getElementById("chapter-10-1");
  const chapterSession28 = document.getElementById("chapter-10-2");
  const chapterSession29 = document.getElementById("chapter-11-1");
  const chapterSession30 = document.getElementById("chapter-11-2");
  const chapterSession31 = document.getElementById("chapter-12-1");
  const chapterSession32 = document.getElementById("chapter-12-2");
  const chapterSession33 = document.getElementById("chapter-13-1");
  const chapterSession34 = document.getElementById("chapter-13-2");
  const chapterSession35 = document.getElementById("chapter-14-1");
  const chapterSession36 = document.getElementById("chapter-14-2");
  const chapterSession37 = document.getElementById("chapter-15-1");
  const chapterSession38 = document.getElementById("chapter-15-2");
  const chapterSession39 = document.getElementById("chapter-16-1");
  const chapterSession40 = document.getElementById("chapter-16-2");
  const chapterSession41 = document.getElementById("chapter-17-1");
  const chapterSession42 = document.getElementById("chapter-18-1");
  const chapterSession43 = document.getElementById("chapter-18-2");
  const chapterSession44 = document.getElementById("chapter-19-1");
  const chapterSession45 = document.getElementById("chapter-19-2");
  const chapterSession46 = document.getElementById("chapter-19-3");
  const chapterSession47 = document.getElementById("chapter-20-1");
  const chapterSession48 = document.getElementById("chapter-20-2");
  const chapterSession49 = document.getElementById("chapter-21-1");
  const chapterSession50 = document.getElementById("chapter-21-2");

  function expandUI() {
    mainContainer.style.top = "0vh";
    iconClose.style.opacity = "1";
    mainContainer.style.background = "#000000D2"
  }

  function clear_containers() {
    chapterMainContainer.style.display = "none";
    chapterContainer.style.display = "none";
    sessionContainer.style.display = "none";
    topicContainer.style.display = "none";
    for (let i = 1; i <= 21; i++) {
      if (chapterSubcontainers[i]) {
        chapterSubcontainers[i].style.display = "none";
      }
    }
  }

  iconClose.addEventListener("click", () => {
    mainContainer.style.top = "90vh";
    mainContainer.style.background= "#00000048"
    clear_containers();
    iconClose.style.opacity = "0"
  });

  optionSession.addEventListener("click", () => {
    expandUI();
    clear_containers();
    sessionContainer.style.display = "grid";
  });

  optionChapter.addEventListener("click", () => {
    expandUI();
    clear_containers();
    chapterMainContainer.style.display = "grid";
    chapterContainer.style.display = "grid";
  });

  optionTopic.addEventListener("click", () => {
    expandUI();
    clear_containers();
    populateTopicsList();
    chapterMainContainer.style.display = "grid";
    topicContainer.style.display = "grid";
  });

  for (let i = 1; i <= 21; i++) {
    if (chapters[i] && chapterSubcontainers[i]) {
      chapters[i].addEventListener("click", () => {
        clear_containers();
        chapterMainContainer.style.display = "grid";
        chapterContainer.style.display = "grid";
        chapterSubcontainers[i].style.display = "grid";
      });
    }
  }

  // Session click handlers
  for (let i = 1; i <= 50; i++) {
    const session = document.getElementById(`session-${i}`);
    if (session) {
      session.addEventListener("click", () => {
        window.location.href = `./Desktop Pages/session${i}.html`;
      });
    }
  }

  // Chapter session click handlers
  for (let i = 1; i <= 50; i++) {
    const session = eval(`chapterSession${i}`);
    if (session) {
      session.addEventListener("click", () => {
        window.location.href = `./Desktop Pages/session${i}.html`;
      });
    }
  }

  function populateTopicsList() {
    for (let i = 0; i < 18; i++) {
      topicsTextElements[i].textContent = topics[i];
      if ((topics.length - 1) < i){
        topicsImageElements[i].style.opacity = "0"
        topicsBannerElements[i].style.opacity = "0"
      }
    }
  }


});
