const navbarContentArea = document.getElementById('navbar-area-content');
const navbarContentAreaButton = document.querySelectorAll('#navbar-content-area h4');
const menuButton = document.getElementById('hamburger-icon');
const resumeButton = document.getElementById('Resume');
const projectButton = document.getElementById('Project');
const connectButton = document.getElementById('Connect');


resumeButton.addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1L7KI9kTxlBrX3VDg6UaQwmWX_hGXtr4I/view?usp=sharing", "_blank");
})
projectButton.addEventListener('click', () => {
    const projectSection = document.getElementById('fourth-container');
    projectSection.scrollIntoView({ behavior: 'smooth', block: "center" });
})
connectButton.addEventListener('click', () => {
    const connectSection = document.getElementById('fifth-container');
    connectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
})


const Styles = (element)=>{
    element.style.background = 'black';

    Array.from(element.children).forEach(child =>{
        child.style.transition = 'none';
        child.style.color = '#fff';
    })
}
const resetStyles = (element)=>{
    element.style.background = '';

    Array.from(element.children).forEach(child => {
        child.style.transition = '';
        child.style.color = '';
    })
}
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 1500 & window.scrollY <1999) {
        Styles(projectButton);
        resetStyles(connectButton);
    }else if(window.scrollY > 2000){
        resetStyles(projectButton);
        Styles(connectButton);
    }else{
        resetStyles(projectButton);
        resetStyles(connectButton);
    }
});


// const navigationPanelResumeButton = document.getElementById("navigation-panel-resume");
// const navigationPanelProjectButton = document.getElementById("navigation-panel-project");
// const navigationPanelConnectButton = document.getElementById("navigation-panel-connect");


const navigationPanel = document.getElementById('navigation-panel');
menuButton.addEventListener("click", () => {
    const txt = document.querySelector("#hamburger-icon a")
    // console.log(txt.innerHTML);
    if (txt.innerHTML === "Menu") {
        navigationPanel.style.display = 'flex';
        navigationPanel.style.transition = 'none';
        txt.innerHTML = 'Close';
        menuButton.style.background = 'black';
        txt.style.color = '#fff';
    } else if (txt.innerHTML === "Close") {
        navigationPanel.style.display = 'none';
        navigationPanel.style.transition = '';
        txt.innerHTML = 'Menu';
        menuButton.style.background = '';
        txt.style.color = ''
    }
})


const navigationElements = navigationPanel.querySelectorAll('h4');
navigationElements.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.id === 'navigation-panel-resume') {
            window.open("https://drive.google.com/file/d/1L7KI9kTxlBrX3VDg6UaQwmWX_hGXtr4I/view?usp=sharing", '_blank');
            const txt = document.querySelector("#hamburger-icon a");
            navigationPanel.style.display = 'none';
            navigationPanel.style.transition = '';
            txt.innerHTML = 'Menu';
            menuButton.style.background = '';
            txt.style.color = ''
        } else if (element.id === 'navigation-panel-project') {
            const projectSection = document.getElementById('fourth-container');
            projectSection.scrollIntoView({ behavior: "smooth", block: "center" });
            const txt = document.querySelector("#hamburger-icon a");
            navigationPanel.style.display = 'none';
            navigationPanel.style.transition = '';
            txt.innerHTML = 'Menu';
            menuButton.style.background = '';
            txt.style.color = ''
        } else if (element.id === 'navigation-panel-connect') {
            const connectSection = document.getElementById('fifth-container');
            connectSection.scrollIntoView({ behavior: "smooth", block: "start" });
            const txt = document.querySelector("#hamburger-icon a");
            navigationPanel.style.display = 'none';
            navigationPanel.style.transition = '';
            txt.innerHTML = 'Menu';
            menuButton.style.background = '';
            txt.style.color = ''
        }
    });
});


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        // slidesPerView: "auto",
        // centeredSlides: true,
        // spaceBetween: 100,
        loop: true,
    });
}

swiperAnimation();
