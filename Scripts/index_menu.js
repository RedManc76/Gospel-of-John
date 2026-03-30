document.addEventListener('DOMContentLoaded', function () {

    // ===============================
    // MOBILE MENU
    // ===============================

    const burgerContainer = document.querySelector('.burger-container');
    const menuContainer = document.querySelector('.mobile-menu');
    const mobileMenuItems = document.querySelectorAll('.mobile_menu-item');

    burgerContainer.addEventListener('click', function () {
        menuContainer.classList.toggle('menu-opened');
        menuContainer.classList.contains('menu-opened') ? menuOpen() : menuClose();
    });

    function menuOpen() {
        mobileMenuItems.forEach((menuItem, index) => {
            menuItem.style.transition = 'none';
            menuItem.style.opacity = '0';
            menuItem.style.transform = 'scale(1.5)';

            setTimeout(() => {
                menuItem.style.transition = 'all .5s cubic-bezier(0.4, 0.01, 0.165, 0.99)';
                menuItem.style.opacity = '1';
                menuItem.style.transform = 'scale(1) translateY(-50px)';
            }, index * 60 + 200);
        });
    }

    function menuClose() {
        const len = mobileMenuItems.length;
        mobileMenuItems.forEach((menuItem, index) => {
            setTimeout(() => {
                menuItem.style.transition = 'none';
                menuItem.style.opacity = '0';
                menuItem.style.transform = 'scale(1.5)';

                // Hide any open submenus when closing menu
                menuItem.querySelectorAll('.mobile_submenu').forEach(sub => {
                    sub.style.display = 'none';
                    sub.querySelectorAll('.mobile_submenu-item').forEach(item => {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0)';
                    });
                });
            }, (len - index) * 60 + 200);
        });
    }

    // Handle click on both top-level and nested menu items
    document.querySelectorAll('.mobile_menu-item, .mobile_submenu-item').forEach(menuItem => {
        menuItem.addEventListener('click', function (e) {
            const submenu = menuItem.querySelector(':scope > .mobile_submenu');

            if (submenu) {
                // Parent item with submenu: toggle submenu
                e.stopPropagation(); // prevent parent toggles
                e.preventDefault();  // prevent link navigation if parent has <a>

                // Close other submenus at the same level
                const parentMenu = menuItem.parentElement;
                parentMenu.querySelectorAll(':scope > .mobile_submenu').forEach(sub => {
                    if (sub !== submenu) sub.style.display = 'none';
                });

                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

                if (submenu.style.display === 'block') {
                    const items = submenu.querySelectorAll(':scope > .mobile_submenu-item');
                    items.forEach((item, i) => {
                        setTimeout(() => {
                            item.style.display = 'block';
                            item.style.transition = 'all .5s cubic-bezier(0.4, 0.01, 0.165, 0.99)';
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, i * 50 + 100);
                    });
                } else {
                    submenu.querySelectorAll('.mobile_submenu-item').forEach(item => {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0)';
                    });
                }
            } else {
                // Leaf item (no submenu): navigate to the link
                const link = menuItem.querySelector('a');
                if (link) {
                    window.location.href = link.href; // navigate
                }
            }
        });
    });


    // ===============================
    // DESKTOP MENU
    // ===============================

    const docType = document.querySelector('meta[name="doc-type"]')?.content;

    const desktopMenu = document.querySelector(".desktop-menu");
    const iconClose = document.querySelector(".icon-close");

    const chapterMainContainer = document.querySelector(".chapter-main-container");
    const chapterContainer = document.querySelector(".chapter-container");
    const sessionContainer = document.querySelector(".session-container");
    const topicContainer = document.querySelector(".topic-container");
    const aboutContainer = document.querySelector(".about-container");

    const optionSession = document.getElementById("option-session");
    const optionChapter = document.getElementById("option-chapter");
    const optionTopic = document.getElementById("option-topic");
    const optionAbout = document.getElementById("option-about");

    // ===============================
    // FIXED CHAPTER → SESSION MAP
    // ===============================

    const chapterSessionMap = {
        "chapter-1-1": 1,
        "chapter-1-2": 2,
        "chapter-1-3": 3,
        "chapter-1-4": 4,
        "chapter-1-5": 5,
        "chapter-1-6": 6,

        "chapter-2-1": 7,
        "chapter-2-2": 8,

        "chapter-3-1": 9,
        "chapter-3-2": 10,
        "chapter-3-3": 11,

        "chapter-4-1": 12,
        "chapter-4-2": 13,
        "chapter-4-3": 14,

        "chapter-5-1": 15,
        "chapter-5-2": 16,
        "chapter-5-3": 17,

        "chapter-6-1": 18,
        "chapter-6-2": 19,
        "chapter-6-3": 20,

        "chapter-7-1": 21,
        "chapter-7-2": 22,

        "chapter-8-1": 23,
        "chapter-8-2": 24,
        "chapter-8-3": 25,

        "chapter-9-1": 26,

        "chapter-10-1": 27,
        "chapter-10-2": 28,

        "chapter-11-1": 29,
        "chapter-11-2": 30,

        "chapter-12-1": 31,
        "chapter-12-2": 32,

        "chapter-13-1": 33,
        "chapter-13-2": 34,

        "chapter-14-1": 35,
        "chapter-14-2": 36,

        "chapter-15-1": 37,
        "chapter-15-2": 38,

        "chapter-16-1": 39,
        "chapter-16-2": 40,

        "chapter-17-1": 41,

        "chapter-18-1": 42,
        "chapter-18-2": 43,

        "chapter-19-1": 44,
        "chapter-19-2": 45,
        "chapter-19-3": 46,

        "chapter-20-1": 47,
        "chapter-20-2": 48,

        "chapter-21-1": 49,
        "chapter-21-2": 50
    };

    // ===============================
    // CHAPTER SUB‑ITEM CLICK HANDLER (SAFE, BULLET‑PROOF)
    // ===============================

    document.addEventListener("click", (e) => {
        const el = e.target.closest("[id^='chapter-'][id*='-']");
        if (!el) return;

        const id = el.id;
        const sessionNum = chapterSessionMap[id];
        if (!sessionNum) return;

        const path = docType === "Session"
            ? `../Desktop Pages/session${sessionNum}.html`
            : `./Desktop Pages/session${sessionNum}.html`;

        window.location.href = path;
    });


    function expandUI() {
        const bg = desktopMenu.querySelector('.menu-background');
        desktopMenu.style.top = '0';
        bg.style.top = '0';
        bg.style.opacity = '0.8';
        iconClose.style.opacity = "1";
    }

    function clearContainers() {
        chapterMainContainer.style.display = "none";
        chapterContainer.style.display = "none";
        sessionContainer.style.display = "none";
        topicContainer.style.display = "none";
        aboutContainer.style.display = "none";

        document.querySelectorAll('[class*="chapter-"][class*="sub-container"]')
            .forEach(el => el.style.display = "none");
    }

    iconClose.addEventListener("click", () => {
        const bg = desktopMenu.querySelector('.menu-background');
        desktopMenu.style.top = "-90vh";
        iconClose.style.opacity = "0";
        bg.style.opacity = "0.5";
        bg.style.top = "-90vh";
    });

    optionSession.addEventListener("click", () => {
        expandUI();
        clearContainers();
        sessionContainer.style.display = "grid";
    });

    optionChapter.addEventListener("click", () => {
        expandUI();
        clearContainers();
        chapterMainContainer.style.display = "grid";
        chapterContainer.style.display = "grid";
    });

    optionTopic.addEventListener("click", () => {
        expandUI();
        clearContainers();
        populateTopics();
        topicContainer.style.display = "grid";
    });

    optionAbout.addEventListener("click", () => {
        expandUI();
        clearContainers();
        aboutContainer.style.display = "block";
    });

    // ===============================
    // CHAPTER CLICK → SHOW SUBCHAPTERS
    // ===============================

    const chapterSubcontainers = [];
    for (let i = 1; i <= 21; i++) {
        chapterSubcontainers[i] = document.querySelector(`.chapter-${i}-sub-container`);
    }

    const chapters = [];
    for (let i = 1; i <= 21; i++) {
        chapters[i] = document.getElementById(`chapter-${i}`);
    }

    for (let i = 1; i <= 21; i++) {
        if (chapters[i] && chapterSubcontainers[i]) {
            chapters[i].addEventListener("click", () => {
                clearContainers();
                chapterMainContainer.style.display = "grid";
                chapterContainer.style.display = "grid";
                chapterSubcontainers[i].style.display = "grid";
            });
        }
    }

    // ===============================
    // SESSION CLICK → LOAD SESSION PAGE
    // ===============================

    for (let i = 1; i <= 50; i++) {
        const session = document.getElementById(`session-${i}`);
        if (session) {
            session.addEventListener("click", () => {
                const path = docType === "Session"
                    ? `../Desktop Pages/session${i}.html`
                    : `./Desktop Pages/session${i}.html`;
                window.location.href = path;
            });
        }
    }

    // ===============================
    // CHAPTER SUB‑SESSION CLICK → LOAD SESSION PAGE
    // ===============================

    for (let i = 1; i <= 50; i++) {
        const el = document.getElementById(`chapter-${Math.ceil(i / 6)}-${((i - 1) % 6) + 1}`);
        if (el) {
            el.addEventListener("click", () => {
                const path = docType === "Session"
                    ? `../Desktop Pages/session${i}.html`
                    : `./Desktop Pages/session${i}.html`;
                window.location.href = path;
            });
        }
    }


    // ===============================
    // FULL THEME DATA (YOU MUST KEEP ALL DATA HERE)
    // ===============================

    const themeData = {
        "themeIndex": {
            "Major Theological Themes": {
                "Trinity": [
                    [1, 3], [1, 4], [4, 2], [5, 6], [16, 5], [28, 2], [36, 2], [36, 5], [39, 4]
                ],
                "Incarnation": [
                    [1, 1], [4, 1], [26, 1], [29, 1], [30, 1], [42, 1], [50, 3]
                ],
                "Divinity of Christ": [
                    [1, 1], [2, 1], [16, 2], [16, 3], [22, 2], [24, 1], [25, 6], [28, 5], [42, 3], [43, 5], [48, 5]
                ],
                "Humanity of Christ": [
                    [4, 2], [12, 1], [18, 1], [32, 2], [42, 1], [43, 5]
                ],
                "Crucifixion": [
                    [5, 4], [5, 5], [8, 1], [23, 3], [32, 1], [32, 2], [45, 1], [45, 2], [45, 3], [50, 4]
                ],
                "Resurrection": [
                    [6, 6], [16, 5], [29, 6], [30, 5], [46, 1], [47, 1], [47, 2], [47, 3], [47, 5],
                    [48, 1], [48, 3], [48, 4], [48, 5], [49, 1], [50, 5]
                ],
                "Atonement": [
                    [5, 4], [8, 2], [23, 3], [43, 6], [45, 2], [50, 4]
                ],
                "Salvation": [
                    [3, 5], [9, 5], [9, 6], [10, 1], [14, 5], [19, 2], [19, 5], [50, 3], [50, 6]
                ],
                "New Birth": [
                    [3, 5], [9, 3], [9, 4], [9, 5], [12, 4], [25, 1]
                ]
            },

            "God": {
                "God's Love": [[1, 4], [10, 1], [10, 2], [31, 2], [32, 3], [33, 2], [41, 2]],
                "God's Grace": [[4, 5], [23, 3]],
                "God's Sovereignty": [[13, 3], [19, 5], [33, 3]],
                "God's Justice": [[4, 5], [10, 3]],
                "God's Glory": [[14, 2], [26, 1], [41, 1]]
            },

            "Attributes God": {
                "God's Omniscience": [[8, 6], [18, 3], [49, 4]],
                "God's Omnipotence": [[18, 1], [18, 3]],
                "God's Holiness": [[8, 1], [10, 3]],
                "God's Immutability": [[23, 1]],
                "God's SelfSufficiency": [[1, 4], [16, 6]]
            },

            "Christ Identity": {
                "I AM": [[20, 7], [24, 1], [25, 6], [37, 1], [42, 3]],
                "Bread of Life": [[19, 1], [19, 4], [19, 6], [20, 7], [37, 1]],
                "Light of World": [[2, 4], [24, 2], [37, 1], [38, 4]],
                "Good Shepherd": [[27, 2], [27, 3], [37, 1]],
                "Resurrection Life": [[29, 6], [37, 1]],
                "Way Truth Life": [[35, 3], [37, 1], [43, 6]],
                "Vine": [[37, 2]],
                "Door": [[27, 5], [37, 1]]
            },

            "Holy Spirit": {
                "Holy Spirit's Work": [[5, 6], [22, 3], [36, 1], [36, 5], [39, 4], [39, 5]],
                "Holy Spirit's Coming": [[22, 5], [36, 4]],
                "Holy Spirit's Indwelling": [[12, 4], [22, 5], [35, 2]]
            },

            "Sin": {
                "Depravity": [[2, 2], [3, 1], [3, 3], [10, 3], [15, 5], [26, 6], [34, 3], [50, 2]],
                "Slavery": [[26, 6], [50, 2]],
                "Spiritual Death": [[16, 4], [16, 5]],
                "Darkness": [[2, 4], [3, 1], [10, 4], [38, 4]]
            },

            "Faith": {
                "Nature of Faith": [[11, 5], [14, 4], [14, 5], [19, 2], [25, 2], [30, 4], [37, 2]],
                "Call": [[20, 3], [47, 6], [48, 6]],
                "Abiding": [[37, 2], [37, 4], [50, 6]]
            },

            "Judgment Destiny": {
                "Judgment": [[4, 5], [10, 4], [16, 2], [38, 1], [39, 4]],
                "Hell": [[2, 4], [16, 4], [35, 1]],
                "Eternal Life": [[16, 4], [16, 5], [27, 2], [29, 1], [35, 1], [41, 2], [50, 5]],
                "Kingdom": [[9, 1], [13, 2], [31, 1], [33, 4], [38, 1]]
            },

            "Warnings": {
                "Falling Away": [[39, 1], [40, 1]],
                "Hardening": [[34, 3], [38, 4]],
                "Worldliness": [[38, 2]],
                "Unbelief": [[14, 4], [32, 6]]
            },

            "Assurance": {
                "Security of Believer": [[19, 5], [28, 3], [33, 3], [35, 1]],
                "Evidence Salvation": [[23, 5], [37, 2]]
            },

            "Miracles": {
                "Purpose of Miracles": [[7, 2], [14, 2], [18, 1], [22, 3]],
                "Water to Wine": [[7, 1]],
                "Officials Son": [[14, 1]],
                "Bethesda": [[15, 1]],
                "Feeding 5000": [[18, 2], [19, 1]],
                "Walking Water": [[18, 4]],
                "Blind Man": [[26, 1], [26, 2], [26, 3], [26, 4], [26, 5]],
                "Lazarus": [[29, 1], [29, 2], [29, 3], [29, 4], [29, 5], [29, 6],
                [30, 1], [30, 2], [30, 3], [30, 4], [30, 5], [30, 6]]
            },

            "Spiritual Warfare": {
                "Satan": [[32, 4], [34, 2], [38, 1], [38, 5]],
                "Victory Death": [[14, 6], [27, 4], [32, 4], [46, 1], [46, 4]]
            },

            "Imagery": {
                "Water": [[12, 4], [22, 5], [5, 6], [33, 3], [33, 4]],
                "Light": [[2, 4], [3, 2], [10, 4], [24, 2]],
                "Darkness": [[2, 4], [3, 1], [34, 3], [38, 4]],
                "Bread": [[19, 1], [19, 4], [19, 6]],
                "Wine": [[7, 1], [7, 5]],
                "Vine": [[37, 2], [37, 3]]
            },

            "People": {
                "Mary": [[7, 3], [45, 5]],
                "Mary Magdalene": [[48, 1], [48, 2]],
                "Martha Mary": [[29, 6], [30, 1]],
                "Nicodemus": [[9, 2], [14, 3], [22, 2], [46, 5]],
                "Thomas": [[48, 5]],
                "Andrew": [[6, 4]],
                "Philip": [[6, 5]],
                "Nathanael": [[6, 5]],
                "Barabbas": [[43, 6]],
                "Caiaphas": [[30, 6], [43, 4]]
            },

        }
    };

    // ===============================
    // FLATTEN TOPICS (FIXES YOUR CORE ISSUE)
    // ===============================

    const flatTopics = {};

    for (const category in themeData.themeIndex) {
        for (const topic in themeData.themeIndex[category]) {
            flatTopics[topic] = themeData.themeIndex[category][topic];
        }
    }

    const topics = Object.keys(flatTopics);

    // ===============================
    // POPULATE TOPIC UI
    // ===============================

    const topicsTextElements = [];
    const topicsImageElements = [];
    const topicsBannerElements = [];

    for (let i = 0; i < 18; i++) {
        topicsTextElements[i] = document.getElementById(`topic-${i + 1}-text`);
        topicsImageElements[i] = document.getElementById(`topic-${i + 1}`);
        topicsBannerElements[i] = document.getElementById(`topic-${i + 1}-banner`);
    }

    let currentPage = 0;
    const pageSize = 17;

    function populateTopics() {
        const start = currentPage * pageSize;
        const end = start + pageSize;

        for (let i = 0; i < 18; i++) {

            // NORMAL TOPICS (0–16)
            if (i < pageSize && topics[start + i]) {
                topicsTextElements[i].textContent = topics[start + i];
                topicsTextElements[i].style.display = "block";
                topicsImageElements[i].style.display = "block";
                topicsBannerElements[i].style.display = "block";
            }

            // MORE BUTTON (slot 17)
            else if (i === 17) {
                const totalPages = Math.ceil(topics.length / pageSize);

                // 👉 MORE (not last page)
                if (currentPage < totalPages - 1) {
                    topicsTextElements[i].textContent = "More";
                }
                // 👉 BACK (last page)
                else if (totalPages > 1) {
                    topicsTextElements[i].textContent = "Back";
                }

                // show button if more than one page exists
                if (totalPages > 1) {
                    topicsTextElements[i].style.display = "block";
                    topicsImageElements[i].style.display = "block";
                    topicsBannerElements[i].style.display = "block";
                } else {
                    topicsTextElements[i].style.display = "none";
                    topicsImageElements[i].style.display = "none";
                    topicsBannerElements[i].style.display = "none";
                }
            }

            // UNUSED
            else {
                topicsTextElements[i].style.display = "none";
                topicsImageElements[i].style.display = "none";
                topicsBannerElements[i].style.display = "none";
            }
        }
    }

    function loadMoreTopics() {
        currentPage++;
        populateTopics();
    }

    // ===============================
    // TOPIC CLICK → SHOW SESSIONS
    // ===============================

    let isShowingSessions = false;
    const topicItems = document.querySelectorAll(".topic-item");

    topicItems.forEach((item, index) => {
        item.addEventListener("click", () => {

            const start = currentPage * pageSize;
            const totalPages = Math.ceil(topics.length / pageSize);

            // 👉 LAST SLOT (More / Back button)
            if (index === 17) {

                if (isShowingSessions) {
                    isShowingSessions = false;
                    populateTopics();
                    return;
                }

                // MORE → next page
                if (currentPage < totalPages - 1) {
                    currentPage++;
                }
                // BACK → reset to first page
                else {
                    currentPage = 0;
                }

                populateTopics();
                return;
            }

            const topicName = topics[start + index];
            if (!topicName) return;

            const sessions = flatTopics[topicName];
            showSessions(topicName, sessions);
        });
    });

    function showSessions(topicName, sessions) {
        isShowingSessions = true;

        // Hide all slots first
        for (let i = 0; i < 18; i++) {
            topicsTextElements[i].style.display = "none";
            topicsImageElements[i].style.display = "none";
            topicsBannerElements[i].style.display = "none";
        }

        // Fill slots with sessions (up to 17)
        sessions.slice(0, 17).forEach((session, i) => {
            const [sessionNum, chapterNum] = session;

            topicsTextElements[i].textContent = `Session ${sessionNum} - Chapter ${chapterNum}`;
            topicsTextElements[i].style.display = "block";
            topicsImageElements[i].style.display = "block";
            topicsBannerElements[i].style.display = "block";

            // Clear old click listener
            const newItem = topicItems[i].cloneNode(true);
            topicItems[i].parentNode.replaceChild(newItem, topicItems[i]);

            ((sessionNum, chapterNum, el) => {
                el.addEventListener("click", () => {
                    const path = docType === "Session"
                        ? `../Desktop Pages/session${sessionNum}.html`
                        : `./Desktop Pages/session${sessionNum}.html`;
                    window.location.href = path;
                });
            })(sessionNum, chapterNum, newItem);
        });

        // Show Back button in slot 17 if sessions exist
        if (sessions.length > 0) {
            const backItem = topicItems[17].cloneNode(true);
            topicItems[17].parentNode.replaceChild(backItem, topicItems[17]);
            backItem.addEventListener("click", () => {
                isShowingSessions = false;
                populateTopics();
            });

            topicsTextElements[17].textContent = "Back";
            topicsTextElements[17].style.display = "block";
            topicsImageElements[17].style.display = "block";
            topicsBannerElements[17].style.display = "block";
        }
    }

});