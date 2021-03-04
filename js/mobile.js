export const setupMobileMenu = () => {
    const menu = document.getElementsByClassName("menu")[0];
    const buttonMenuMobile = document.getElementsByClassName("topbar-mobile__menu-hamburger")[0];
    const buttonSideMenuMobile = document.getElementsByClassName("menu__menu-hamburger")[0];

    menu.addEventListener("click", (event) => {
        if (event.target.classList[1] == "menu-mobile--open") {
            const sideMenu = document.getElementsByClassName("menu")[0];
            sideMenu.classList.remove("menu-mobile--open");
        }
    });

    buttonMenuMobile.addEventListener("click", () => {
        const sideMenu = document.getElementsByClassName("menu")[0];
        sideMenu.classList.add("menu-mobile--open");
    });

    buttonSideMenuMobile.addEventListener("click", () => {
        const sideMenu = document.getElementsByClassName("menu")[0];
        sideMenu.classList.remove("menu-mobile--open");
    });
}