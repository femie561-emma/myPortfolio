/* =========================================================
   SENIOR DEVELOPER PORTFOLIO
   INTERACTION SYSTEM
========================================================= */


/* =========================================================
   SELECT ELEMENTS
========================================================= */

const root =
    document.documentElement;

const themeButton =
    document.getElementById(
        "themeButton"
    );

const themeDropdown =
    document.getElementById(
        "themeDropdown"
    );

const themeLabel =
    document.querySelector(
        ".theme-label"
    );

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const navigation =
    document.querySelector(
        ".desktop-nav"
    );

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );



/* =========================================================
   THEME SYSTEM
========================================================= */

const themeNames = {

    gold:
        "Gold",

    blue:
        "Electric Blue",

    violet:
        "Violet",

    emerald:
        "Emerald"

};



/* =========================================================
   LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    ) || "gold";


root.dataset.theme =
    savedTheme;


themeLabel.textContent =
    themeNames[savedTheme];



/* =========================================================
   OPEN THEME MENU
========================================================= */

themeButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        themeDropdown.classList.toggle(
            "open"
        );

    }
);



/* =========================================================
   CHANGE THEME
========================================================= */

document
    .querySelectorAll(
        "[data-theme]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const theme =
                        button.dataset.theme;


                    root.dataset.theme =
                        theme;


                    themeLabel.textContent =
                        themeNames[theme];


                    localStorage.setItem(
                        "portfolio-theme",
                        theme
                    );


                    themeDropdown.classList.remove(
                        "open"
                    );

                }
            );

        }
    );



/* =========================================================
   CLOSE THEME DROPDOWN
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".theme-selector"
            )
        ) {

            themeDropdown.classList.remove(
                "open"
            );

        }

    }
);



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

mobileMenuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "mobile-open"
        );


        if (
            navigation.classList.contains(
                "mobile-open"
            )
        ) {

            mobileMenuButton.textContent =
                "×";

        } else {

            mobileMenuButton.textContent =
                "☰";

        }

    }
);



/* =========================================================
   CLOSE MOBILE NAV AFTER LINK CLICK
========================================================= */

navigation
    .querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                    mobileMenuButton.textContent =
                        "☰";

                }
            );

        }
    );



/* =========================================================
   MOUSE FOLLOWING GLOW
========================================================= */

window.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold:
                0.12
        }
    );


document
    .querySelectorAll(
        ".reveal"
    )
    .forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            link => {

                                const isActive =
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${entry.target.id}`;


                                link.classList.toggle(
                                    "active",
                                    isActive
                                );

                            }
                        );

                    }

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);



/* =========================================================
   SMOOTH INTERNAL NAVIGATION
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const selector =
                        anchor.getAttribute(
                            "href"
                        );


                    const target =
                        document.querySelector(
                            selector
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        }
    );



/* =========================================================
   PROJECT PLACEHOLDER SAFETY
========================================================= */

document
    .querySelectorAll(
        '.project-actions a[href="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    alert(
                        "Add your project URL here."
                    );

                }
            );

        }
    );



/* =========================================================
   GOLD SPARK EFFECT
========================================================= */

function createSpark() {

    const spark =
        document.createElement(
            "span"
        );


    spark.className =
        "gold-spark";


    spark.style.left =
        Math.random() * 100 + "%";


    spark.style.top =
        Math.random() * 100 + "%";


    spark.style.setProperty(
        "--spark-size",
        Math.random() * 3 + 2 + "px"
    );


    document.body.appendChild(
        spark
    );


    setTimeout(
        () => {

            spark.remove();

        },
        1800
    );

}



/* =========================================================
   SPARK STYLES
========================================================= */

const sparkStyles =
    document.createElement(
        "style"
    );


sparkStyles.textContent = `

    .gold-spark {

        position: fixed;

        width: var(--spark-size);

        height: var(--spark-size);

        border-radius: 50%;

        background:
            var(--accent);

        box-shadow:
            0 0 12px var(--accent),
            0 0 25px
            rgba(
                var(--accent-rgb),
                .7
            );

        pointer-events: none;

        z-index: 2;

        animation:
            sparkFloat
            1.8s
            ease-out
            forwards;

    }


    @keyframes sparkFloat {

        0% {

            opacity: 0;

            transform:
                translateY(15px)
                scale(.4);

        }

        20% {

            opacity: 1;

        }

        100% {

            opacity: 0;

            transform:
                translateY(-80px)
                scale(0);

        }

    }

`;


document.head.appendChild(
    sparkStyles
);



/* =========================================================
   CREATE OCCASIONAL SPARKS
========================================================= */

setInterval(
    () => {

        createSpark();

    },
    900
);




const words = ["a Web Developer", "a Frontend Engineer", "a Web Designer", "a programmer..."];

let i = 0;
let j = 0;
let isDeleting = false;

function type(){

const el = document.getElementById("typing");
const word = words[i];

if(!isDeleting){
   el.textContent = word.substring(0, j++);


if(j > word.length){
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }
}  else{
  el.textContent = word.substring(0, j--);

if(j < 0){
    isDeleting = false;
    i = (i + 1) % words.length;
  }

}

setTimeout(type, isDeleting ? 50 : 150);
}
type();