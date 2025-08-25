
document.addEventListener('DOMContentLoaded', function () {

    /**
     * Handles the mobile menu functionality:
     * - Toggles the mobile menu open/close state when the burger icon is clicked.
     * - Animates menu items when opening and closing the menu.
     * - Handles submenu toggling and animation for each mobile menu item.
     * - Ensures only one submenu is open at a time and animates submenu items.
     *
     * Elements involved:
     * - .burger-container: The burger icon that toggles the menu.
     * - .mobile-menu: The container for the mobile menu.
     * - .mobile_menu-item: Each main menu item in the mobile menu.
     * - .mobile_submenu: Submenu container within a menu item.
     * - .mobile_submenu-item: Each item within a submenu.
     *
     * Animation:
     * - Menu items and submenu items are animated with scale and opacity transitions.
     * - Submenus are shown/hidden with display toggling and animated entry for submenu items.
     *
     * Events:
     * - Click on burger icon: Opens/closes the mobile menu.
     * - Click on menu item: Toggles its submenu, closes others, and animates submenu items.
     */

    windowWidth = window.innerWidth

    var burgerContainer = document.querySelector('.burger-container');
    var menuContainer = document.querySelector('.mobile-menu');
    var mobileMenuItems = document.querySelectorAll('.mobile_menu-item');

    burgerContainer.addEventListener('click', function () {
        menuContainer.classList.toggle('menu-opened');
        if (menuContainer.classList.contains('menu-opened')) {
            menuOpen();
        } else {
            menuClose();
        }
    });

    function menuOpen() {
        mobileMenuItems.forEach(function (menuItem, index) {
            // Reset styles instantly
            menuItem.style.transition = 'transform 0s, opacity 0s';
            menuItem.style.opacity = '0';
            menuItem.style.transform = 'scale(1.5)';

            // Apply animated styles with delay
            setTimeout(function () {
                menuItem.style.transition = 'transform .5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99)';
                menuItem.style.opacity = '1';
                menuItem.style.transform = 'scale(1) translateY(-50px)';
            }, index * 60 + 200);
        });
    }

    function menuClose() {
        var len = mobileMenuItems.length;
        mobileMenuItems.forEach(function (menuItem, index) {
            setTimeout(function () {
                menuItem.style.transition = 'transform 0s, opacity 0s';
                menuItem.style.opacity = '0';
                menuItem.style.transform = 'scale(1.5)';
            }, (len - index) * 60 + 200);
        });
    }

    document.querySelectorAll('.mobile_menu-item').forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            var submenu = menuItem.querySelector('.mobile_submenu');
            var allSubmenus = document.querySelectorAll('.mobile_submenu');
            var allMenuItemElements = document.querySelectorAll('.mobile_menu-item');
            var allSubmenuItemElements = document.querySelectorAll('.mobile_submenu-item');

            // Close all open submenus
            allSubmenus.forEach(function (sub) {
                if (sub !== submenu) {
                    sub.style.display = 'none';
                }
            });

            allMenuItemElements.forEach(function (item) {
                item.style.marginTop = '0px';
            });

            allSubmenuItemElements.forEach(function (submenuItem) {
                submenuItem.style.transition = 'transform 0s, opacity 0s';
                submenuItem.style.opacity = '0';
                submenuItem.style.transform = 'scale(0)';
            });

            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                if (submenu.style.display === 'block') {
                    menuItem.style.borderBottom = '0px';
                    var submenuItems = submenu.querySelectorAll('.mobile_submenu-item');
                    submenuItems.forEach(function (submenuItem, index) {
                        setTimeout(function () {
                            submenuItem.style.display = 'block';
                            submenuItem.style.transition = 'transform .5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99)';
                            submenuItem.style.opacity = '1';
                            submenuItem.style.transform = 'scale(1)';
                        }, index * 50 + 100);
                    });
                } else {
                    menuItem.style.borderBottom = '1px solid #333';
                }
            }
        });
    });

    /**
     * Handles the desktop menu UI and navigation logic.
     *
     * Features:
     * - Expands and collapses the desktop menu with animation and background overlay.
     * - Provides navigation between Sessions, Chapters, Topics, and About sections.
     * - Dynamically shows/hides containers for each section based on user interaction.
     * - Handles click events for chapter and session navigation, updating the UI and redirecting as needed.
     * - Populates the topics list dynamically when the Topics or About section is selected.
     *
     * Elements involved:
     * - .desktop-menu: Main desktop menu container.
     * - .icon-close: Close icon for collapsing the menu.
     * - .chapter-main-container, .chapter-container, .session-container, .topic-container, .about-container: Section containers.
     * - #option-session, #option-chapter, #option-topic, #option-about: Navigation options.
     * - #chapter-1 to #chapter-21: Chapter navigation elements.
     * - #session-1 to #session-50: Session navigation elements.
     * - topic-* elements: Topic list and banners.
     *
     * Functions:
     * - expandUI(): Expands the desktop menu and shows the close icon.
     * - clear_containers(): Hides all section containers and chapter subcontainers.
     * - populateTopicsList(): Populates the topics list and manages topic image/banner visibility.
     *
     * Events:
     * - Click on close icon: Collapses the menu.
     * - Click on navigation options: Expands menu and displays the corresponding section.
     * - Click on chapter/session: Navigates to the appropriate content page.
     */

    const docType = document.querySelector('meta[name="doc-type"]')?.content;

    const optionSession = document.getElementById("option-session");
    const optionChapter = document.getElementById("option-chapter");
    const optionTopic = document.getElementById("option-topic");
    const optionAbout = document.getElementById("option-about");

    const desktopMenu = document.querySelector(".desktop-menu");
    const chapterMainContainer = document.querySelector(".chapter-main-container");
    const chapterContainer = document.querySelector(".chapter-container");
    const sessionContainer = document.querySelector(".session-container");
    const topicContainer = document.querySelector(".topic-container");
    const aboutContainer = document.querySelector(".about-container");

    const iconClose = document.querySelector(".icon-close")

    // topic delclartions
    const topicsTextElements = [];
    for (let i = 0; i < 18; i++) {
        topicsTextElements[i] = document.getElementById(`topic-${i + 1}-text`);
    }
    const topicsImageElements = [];
    for (let i = 0; i < 18; i++) {
        topicsImageElements[i] = document.getElementById(`topic-${i + 1}`);
    }
    const topicsBannerElements = [];
    for (let i = 0; i < 18; i++) {
        topicsBannerElements[i] = document.getElementById(`topic-${i + 1}-banner`);
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
        const bg = desktopMenu.querySelector('.menu-background');
        desktopMenu.style.top = '0';
        bg.style.top = '0';
        bg.style.opacity = '0.8';
        iconClose.style.opacity = "1";
    }

    function clear_containers() {
        chapterMainContainer.style.display = "none";
        chapterContainer.style.display = "none";
        sessionContainer.style.display = "none";
        topicContainer.style.display = "none";
        aboutContainer.style.display = "none";
        for (let i = 1; i <= 21; i++) {
            if (chapterSubcontainers[i]) {
                chapterSubcontainers[i].style.display = "none";
            }
        }
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
        topicContainer.style.display = "grid";
    });

    optionAbout.addEventListener("click", () => {
        expandUI();
        clear_containers();
        populateTopicsList();
        aboutContainer.style.display = "block";
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
                if (docType == "Session") {
                    window.location.href = `../Desktop Pages/session${i}.html`;
                } else {
                    window.location.href = `./Desktop Pages/session${i}.html`;
                }
            });
        }
    }

    // Chapter session click handlers
    for (let i = 1; i <= 50; i++) {
        const session = eval(`chapterSession${i}`);
        if (session) {
            session.addEventListener("click", () => {
                if (docType == "Session") {
                    window.location.href = `../Desktop Pages/session${i}.html`;
                } else {
                    window.location.href = `./Desktop Pages/session${i}.html`;
                }
            });
        }
    }

    function populateTopicsList() {
        for (let i = 0; i < 18; i++) {
            topicsTextElements[i].textContent = topics[i];
            if ((topics.length - 1) < i) {
                topicsImageElements[i].style.opacity = "0"
                topicsBannerElements[i].style.opacity = "0"
            }
        }
    }

});