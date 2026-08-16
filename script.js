function appear(){
    if(localStorage.getItem("userdata")){
          console.log("Gotten")
          let container = document.getElementById("container");
          container.style.display = "none";
    }
else{
    container.style.display = "flex";
}
}
appear();
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});
const see = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold: 0.2
});
document.querySelectorAll(".values-card").forEach(section => {
    see.observe(section);
});
const clip = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold : 0.1

});
document.querySelectorAll(".stat-cards").forEach(row => {
    clip.observe(row);
});
const visible = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold: 0.2
});
document.querySelectorAll(".show-card").forEach(function(item){
    visible.observe(item);
})
gsap.registerPlugin(ScrollTrigger);

let free = gsap.timeline({
    scrollTrigger:{
        trigger: ".projects",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false
    }
});
free.fromTo(".page",{
    clipPath: "inset(0 100% 0 0)"
},{
    clipPath : "inset(0 0% 0 0)",
    ease: "none",
    duration: 2,
    delay: 20
});
let brtBtn = document.getElementById("getBtn");
brtBtn.onclick = function(){
    window.location.href = "signin.html";
}

let button = document.getElementById("setbtn");
let settings = document.querySelector(".settings")
button.onclick = ()=>{
    settings.classList.add("active");
    
};

let field = document.getElementById("appbtn");
let appearance = document.querySelector(".appearance");
field.onclick = function(){
    appearance.classList.add("active");
    settings.classList.remove("active");
};
let appback = document.getElementById("back");

appback.onclick = function(){
    appearance.classList.remove("active");
    settings.classList.remove("active");
};


const ids = {
    
    body: document.getElementById("body"),
    container: document.getElementById("container"),
    topnav: document.getElementById("topnav"),
    logo: document.getElementById("logo"),
    logoTitle: document.getElementById("logoTitle"),
    mainNav: document.getElementById("mainNav"),
    navLinks: document.getElementById("navLinks"),
    homeLink: document.getElementById("homeLink"),
    servicesLink: document.getElementById("servicesLink"),
    aboutLink: document.getElementById("aboutLink"),
    workLink: document.getElementById("workLink"),
    blogLink: document.getElementById("blogLink"),
    contactLink: document.getElementById("contactLink"),
    setbtn: document.getElementById("setbtn"),
    settingsIcon: document.getElementById("settingsIcon"),
    settingsPanel: document.getElementById("settingsPanel"),
    settingsHeader: document.getElementById("settingsHeader"),
    settingsTitle: document.getElementById("settingsTitle"),
    settingsList: document.getElementById("settingsList"),
    appearanceField: document.getElementById("appearanceField"),
    appbtn: document.getElementById("appbtn"),
    accountField: document.getElementById("accountField"),
    websiteField: document.getElementById("websiteField"),
    developerField: document.getElementById("developerField"),
    heroCard: document.getElementById("heroCard"),
    pone: document.getElementById("pone"),
    normal: document.getElementById("normal"),
    divider: document.getElementById("divider"),
    small: document.getElementById("small"),
    heroButtons: document.getElementById("heroButtons"),
    getBtn: document.getElementById("getBtn"),
    btTwo: document.getElementById("btTwo"),
    brandRow: document.getElementById("brandRow"),
    googleBrand: document.getElementById("googleBrand"),
    microsoftBrand: document.getElementById("microsoftBrand"),
    amazonBrand: document.getElementById("amazonBrand"),
    servicesSection: document.getElementById("servicesSection"),
    servicesHeader: document.getElementById("servicesHeader"),
    servicesTitle: document.getElementById("servicesTitle"),
    servicesGrid: document.getElementById("servicesGrid"),
    webDevCard: document.getElementById("webDevCard"),
    webDevTitle: document.getElementById("webDevTitle"),
    webDevIcon: document.getElementById("webDevIcon"),
    webDevHeading: document.getElementById("webDevHeading"),
    webDevText: document.getElementById("webDevText"),
    webDevMoreBtn: document.getElementById("webDevMoreBtn"),
    unixCard: document.getElementById("unixCard"),
    unixTitle: document.getElementById("unixTitle"),
    unixIcon: document.getElementById("unixIcon"),
    unixHeading: document.getElementById("unixHeading"),
    unixText: document.getElementById("unixText"),
    unixBtn: document.getElementById("unixBtn"),
    strategyCard: document.getElementById("strategyCard"),
    strategyTitle: document.getElementById("strategyTitle"),
    strategyIcon: document.getElementById("strategyIcon"),
    strategyHeading: document.getElementById("strategyHeading"),
    strategyText: document.getElementById("strategyText"),
    strategyBtn: document.getElementById("strategyBtn"),
    brandingCard: document.getElementById("brandingCard"),
    brandingTitle: document.getElementById("brandingTitle"),
    brandingIcon: document.getElementById("brandingIcon"),
    brandingHeading: document.getElementById("brandingHeading"),
    brandingText: document.getElementById("brandingText"),
    brandingBtn: document.getElementById("brandingBtn"),
    aboutSection: document.getElementById("aboutSection"),
    valuesCard: document.getElementById("valuesCard"),
    valuesHeader: document.getElementById("valuesHeader"),
    whyUsLabel: document.getElementById("whyUsLabel"),
    valuesTitle: document.getElementById("valuesTitle"),
    integrityRow: document.getElementById("integrityRow"),
    integrityIcon: document.getElementById("integrityIcon"),
    integrityTitle: document.getElementById("integrityTitle"),
    teamworkRow: document.getElementById("teamworkRow"),
    teamworkIcon: document.getElementById("teamworkIcon"),
    teamworkTitle: document.getElementById("teamworkTitle"),
    transparentRow: document.getElementById("transparentRow"),
    transparentIcon: document.getElementById("transparentIcon"),
    transparentTitle: document.getElementById("transparentTitle"),
    timelessRow: document.getElementById("timelessRow"),
    timelessIcon: document.getElementById("timelessIcon"),
    timelessTitle: document.getElementById("timelessTitle"),
    statsPanel: document.getElementById("statsPanel"),
    statsHeading: document.getElementById("statsHeading"),
    statsText: document.getElementById("statsText"),
    statsCards: document.getElementById("statsCards"),
    statCustomers: document.getElementById("statCustomers"),
    customersValue: document.getElementById("customersValue"),
    customersLabel: document.getElementById("customersLabel"),
    statAttendence: document.getElementById("statAttendence"),
    attendanceValue: document.getElementById("attendanceValue"),
    attendanceLabel: document.getElementById("attendanceLabel"),
    statExperience: document.getElementById("statExperience"),
    experienceValue: document.getElementById("experienceValue"),
    experienceLabel: document.getElementById("experienceLabel"),
    projectsSection: document.getElementById("projectsSection"),
    projectHeader: document.getElementById("projectHeader"),
    projectsHeading: document.getElementById("projectsHeading"),
    projectsText: document.getElementById("projectsText"),
    projectMention: document.getElementById("projectMention"),
    projectNav: document.getElementById("projectNav"),
    webDevTab: document.getElementById("webDevTab"),
    osManufactureTab: document.getElementById("osManufactureTab"),
    teachingTab: document.getElementById("teachingTab"),
    otherTab: document.getElementById("otherTab"),
    projectCardList: document.getElementById("projectCardList"),
    projectCardOne: document.getElementById("projectCardOne"),
    projectImageOne: document.getElementById("projectImageOne"),
    projectContentOne: document.getElementById("projectContentOne"),
    projectStatusOne: document.getElementById("projectStatusOne"),
    projectTitleOne: document.getElementById("projectTitleOne"),
    projectCategoryOne: document.getElementById("projectCategoryOne"),
    projectDescOne: document.getElementById("projectDescOne"),
    projectSignoffOne: document.getElementById("projectSignoffOne"),
    projectProgressBarOne: document.getElementById("projectProgressBarOne"),
    projectProgressLabelOne: document.getElementById("projectProgressLabelOne"),
    projectButtonWrapOne: document.getElementById("projectButtonWrapOne"),
    butthree: document.getElementById("butthree"),
    projectCardTwo: document.getElementById("projectCardTwo"),
    two: document.getElementById("two"),
    projectContentTwo: document.getElementById("projectContentTwo"),
    projectStatusTwo: document.getElementById("projectStatusTwo"),
    projectTitleTwo: document.getElementById("projectTitleTwo"),
    projectCategoryTwo: document.getElementById("projectCategoryTwo"),
    projectDescTwo: document.getElementById("projectDescTwo"),
    projectSignoffTwo: document.getElementById("projectSignoffTwo"),
    projectProgressBarTwo: document.getElementById("projectProgressBarTwo"),
    projectProgressLabelTwo: document.getElementById("projectProgressLabelTwo"),
    projectButtonWrapTwo: document.getElementById("projectButtonWrapTwo"),
    buttwo: document.getElementById("buttwo"),
    projectCardThree: document.getElementById("projectCardThree"),
    three: document.getElementById("three"),
    projectContentThree: document.getElementById("projectContentThree"),
    projectStatusThree: document.getElementById("projectStatusThree"),
    projectTitleThree: document.getElementById("projectTitleThree"),
    projectCategoryThree: document.getElementById("projectCategoryThree"),
    projectDescThree: document.getElementById("projectDescThree"),
    projectSignoffThree: document.getElementById("projectSignoffThree"),
    projectProgressBarThree: document.getElementById("projectProgressBarThree"),
    projectProgressLabelThree: document.getElementById("projectProgressLabelThree"),
    projectButtonWrapThree: document.getElementById("projectButtonWrapThree"),
    buttone: document.getElementById("buttone"),
    appearancePanel: document.getElementById("appearancePanel"),
    appearanceCloseWrap: document.getElementById("appearanceCloseWrap"),
    back: document.getElementById("back"),
    appearanceHeader: document.getElementById("appearanceHeader"),
    appearanceTitle: document.getElementById("appearanceTitle"),
    appearanceText: document.getElementById("appearanceText"),
    appearanceCards: document.getElementById("appearanceCards"),
    themeCard: document.getElementById("themeCard"),
    themeHeader: document.getElementById("themeHeader"),
    themeTitle: document.getElementById("themeTitle"),
    themeChange: document.getElementById("themeChange"),
    blackbtn: document.getElementById("blackbtn"),
    blackImg: document.getElementById("blackImg"),
    themePalette: document.getElementById("themePalette"),
    blue: document.getElementById("blue"),
    blueImg: document.getElementById("blueImg"),
    redbtn: document.getElementById("redbtn"),
    redImg: document.getElementById("redImg"),
    greenbtn: document.getElementById("greenbtn"),
    greenImg: document.getElementById("greenImg"),
    fontCard: document.getElementById("fontCard"),
    layoutCard: document.getElementById("layoutCard"),
    pageSection: document.getElementById("pageSection"),
    mainScript: document.getElementById("mainScript")
};


function loadTheme(){
   const blueTheme = localStorage.getItem("bluetheme");
   if(blueTheme === "blue"){
    appearance.classList.add("blue");
    Object.values(ids).forEach(function(id){
    id.classList.add("blue");
})
   }
};
let bluebtn = document.getElementById("blue").addEventListener('click', () =>{
            appearance.classList.toggle("blue");
            Object.values(ids).forEach(function(id){
           id.classList.toggle("blue");
            Object.values(ids).forEach(function(id){
            id.classList.remove("red", "green");
        });
            
});
            localStorage.setItem("bluetheme", "blue");
        }
    );
loadTheme();

function redTheme(){
    const rdtheme = localStorage.getItem("redtheme");
    if(rdtheme === "red"){
        appearance.classList.add("red")
        Object.values(ids).forEach(function(id){
            id.classList.add("red");
        })
    }
}
let redbtn = document.getElementById("redbtn").addEventListener('click', () =>{
    appearance.classList.toggle("red");
    localStorage.setItem("redtheme", "red");
       Object.values(ids).forEach(function(id){
            id.classList.toggle("red")
        });
         Object.values(ids).forEach(function(id){
            id.classList.remove("blue", "green");
        });
});
redTheme();

function greenTheme(){
    let greentheme = localStorage.getItem("greentheme");
    if(greentheme === "green"){
        appearance.classList.add("green");
           Object.values(ids).forEach(function(id){
            id.classList.add("green");
        });
    }
}
let greenbtn = document.getElementById("greenbtn").addEventListener('click', () => {
        
        appearance.classList.toggle("green");
           Object.values(ids).forEach(function(id){
            id.classList.toggle("green");
        });
          Object.values(ids).forEach(function(id){
            id.classList.remove("blue", "red");
        });
});
greenTheme();
function removeTheme(){
    let blachtheme = localStorage.getItem("blacktheme");
}
let blackbtn = document.getElementById("blackbtn").addEventListener('click', () => {
       appearance.classList.remove("blue", "red", "green");
       Object.values(ids).forEach(function(id){
        id.classList.remove("blue", "red", "green");
       })
       localStorage.setItem("blacktheme", "black");
});
let animations = document.querySelector(".animations");
animations.onclick = function(){
   animations.classList.toggle("active");
if(animations.classList.contains("active")){
    ScrollTrigger.getAll().forEach(function(trigger){
    trigger.disable();
  });
}else{
    ScrollTrigger.getAll().forEach(function(trigger){
        trigger.enable();
    })
}
 
}
let accbtn = document.getElementById("accbtn");
let accsec = document.querySelector(".accounts");
let paragraphone = document.getElementById("cheki");
let emailone = document.getElementById("emailusername");
let usernameone = document.getElementById("usernameone");
let usernamelast = document.getElementById("usernameLast");
let emailtransfer = document.getElementById("emailcopied");
let usernamename = document.getElementById("usernamesign");
let usernameonefirst = document.getElementById("usernameonefirst");
let loc = document.getElementById("location");


accbtn.onclick = () =>{
    accsec.style.display = "flex";
    emailone.innerText = "frank@gmail.com";
    usernameone.innerText = "Frank";
    usernamelast.innerText = "Mweu";
    usernamename.innerText = "Frank";
    loc.innerText = "Kenya";
    emailtransfer.innerText = emailone.innerText;
    usernameonefirst.innerText = usernameone.innerText ;
    paragraphone.innerText = emailone.innerText;
    
};


let accback = document.getElementById("accback").addEventListener('click', () => {
    accsec.style.display = "none";
});
 let editprofsection = document.querySelector(".editprofsection"); 
let editprof = document.getElementById("editprof").addEventListener('click', () => {
   editprofsection.style.display = "flex";
});
let finish = document.getElementById("finish").addEventListener('click', () => {
    if( editprofsection.style.display === "flex"){
    const changedusername = document.getElementById("changedusername").value;
    const changedlastname = document.getElementById("changedlastname").value;
    const changedemail = document.getElementById("changedemail").value;
    const changedlocation = document.getElementById("changedlocation").value;

    console.log(changedemail, changedlastname, changedusername, changedlocation);

    usernamename.innerText = changedusername;
     emailone.innerText = changedemail;
     usernamelast.innerText = changedlastname;
     loc.innerText = changedlocation;
     emailtransfer.innerText = emailone.innerText;
    paragraphone.innerText = emailone.innerText;


     function check(){
    if(changedemail === "" && changedlocation === "" && changedusername === ""){
        alert("fill in email");
    }
    else{
        editprofsection.style.display = "none";
    }
};
check();
    
}

});
let showpasssection = document.querySelector(".showpasssection");
let showpass = document.getElementById("changepass").addEventListener('click', () => {
     showpasssection.style.display = "flex";
})

    let donepass = document.getElementById("donepass");

    donepass.onclick = () =>{
        showpasssection.style.display = "none";
    }
    
   
 