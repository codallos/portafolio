//#region HEADER
const lis = document.querySelectorAll("ul.header__ul > li");
const sections = document.querySelectorAll("main > section");

function border(sectionName) {
    lis.forEach((li) => {
        if (li.innerText.toUpperCase() === sectionName.toUpperCase()) {
            li.classList.add("header__ul--border");
            li.children[0].style.color = "#fff";
        } else {
            li.classList.remove("header__ul--border");
            li.children[0].style.color = "rgba(255, 255, 255, 0.677)";
        }
    });
}

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                border(entry.target.id);
                entry.target.style.opacity=1
                entry.target.style.left=0
            }
        });
    },
    {
        rootMargin: "-60px 0px 0px 0px",
        threshold: 0.3,
    }
);

sections.forEach((section) => observer.observe(section));

//#endregion

//#region HEADER-MOVIL

const header = document.getElementById("header");

const elementX = document.createElement('span')



header.addEventListener('click',(e)=>{

    


    if(e.target.id=="header__nav" || e.target.id=="header__menu-movile"  ){
        sections.forEach((section) => {
            section.style.opacity=1
            section.style.left=0
        });
        //Button Dark-light
        //header.firstElementChild.style.display="none"
        header.firstElementChild.classList.remove("header__mode--movile")

        
        //Header
        header.classList.add("header--movile")
        header.classList.remove("header")
        elementX.classList.add("header__x")
        elementX.id="header__close"
        elementX.innerText="X"
        header.appendChild(elementX)

        //Nav = header.children[1]
        header.children[1].classList.add("header__nav--movile")
        header.children[1].classList.remove("header__nav")
       // header.children[1].innerText="Algo"
       //header.children[1].children[0].classList.add("header__x")
       
       //Delete menu icon from Nav
    //header.children[1].children[0].style.display="none" 
        header.children[1].children[0].classList.remove("header__menu--movile")

        //Ul visible children[1].children[2]
        
        header.children[1].children[1].classList.add("header__ul--movile") 
        header.children[1].children[1].classList.remove("header__ul") 


     
    }


    if (e.target.id=="header__close"||e.target.className=="header__a"){
        sections.forEach((section) => {
            section.style.opacity=1
            section.style.left=0
        });
        //Dark/light
        //header.firstElementChild.style.display="inline"
        header.firstElementChild.classList.add("header__mode--movile")

        //header.firstElementChild.style.display="none"
        //Header
        header.classList.remove("header--movile")
        header.classList.add("header")
        header.removeChild(elementX)

        //Nav = header.children[1]
        header.children[1].classList.remove("header__nav--movile")
        header.children[1].classList.add("header__nav")
       // header.children[1].innerText="Algo"
       //header.children[1].children[0].classList.add("header__x")
       
       //Delete menu icon from Nav
       // header.children[1].children[0].style.display="flex" 
        header.children[1].children[0].classList.add("header__menu--movile")

        //Ul visible children[1].children[2]
        
        header.children[1].children[1].classList.remove("header__ul--movile") 
        header.children[1].children[1].classList.add("header__ul") 

    }



})

//#endregion


//#region HOME

// const animationAnd = document.getElementById("home__animation1")
const animationFrontend = document.getElementById("home__animation2")
const animationWeb = document.getElementById("home__animation3")
const animationDeveloper = document.getElementById("home__animation4")


// setTimeout(() => {
//     animationAnd.classList.add("home__animation1")
//     animationAnd.classList.remove("home__animation--none")
// }, 1000);

//  setTimeout(() => {
//    animationAnd.classList.remove("home__animation1")

//  }, 3000);

setTimeout(() => {
    //animationAnd.classList.remove("home__animation1")
    animationFrontend.classList.add("home__animation2")
    animationFrontend.classList.remove("home__animation--none")
}, 1000);

setTimeout(() => {
    animationFrontend.classList.remove("home__animation2")
    animationWeb.classList.add("home__animation3")
    animationWeb.classList.remove("home__animation--none")
}, 1900);

setTimeout(() => {
    animationWeb.classList.remove("home__animation3")
    animationDeveloper.classList.add("home__animation4")
    animationDeveloper.classList.remove("home__animation--none")
}, 2300);

//   setTimeout(() => {
//     animationDeveloper.classList.remove("home__animation4")

//  }, 4000);

//#endregion

//#region SKILLS
/*
window.addEventListener("resize", function(){
    skillsIcons.style.height='auto';
    
});*/

const skillsButtons = document.getElementById("skills__buttons")
const skillsIcons = document.querySelector(".skills__icons") 
const skillsExperiences = document.querySelector(".skills__experiences") 



let heightSkillsExperiences = skillsExperiences.offsetWidth;
let heightskillsIcons = skillsIcons.clientHeight;
let heightskillsIconsAuto = 0
console.log(skillsIcons)
console.log(heightskillsIcons)
let skillsButtonsArray = [...skillsButtons.children]



skillsButtons.addEventListener('click', e =>{
    
    // skillsIcons.style.height=heightskillsIcons*0 +'px'
    
    
    if(e.target.type=="button"){
        
        //console.log(heightskillsIcons)
        skillsIcons.style.height='auto'
        heightskillsIcons = skillsIcons.clientHeight
        
        skillsButtonsArray.forEach(button => {
            //console.log("Es boton")
            if (button.innerText === e.target.innerText){

               console.log("estas en el if")
                skillsIcons.style.height=heightskillsIcons*0 +'px'
                //skillsExperiences.style.height=heightskillsIcons*1 +'px' //Exp
                e.target.classList.add("button--focus")
                //skillsIcons.classList.add("skills__experiences--smooth");
                skillsExperiences.classList.remove("skills__experiences--smooth");
                

            }else{

                skillsIcons.style.height=heightskillsIcons*1 +'px'
                console.log("En el else",heightskillsIcons)
                
                //skillsExperiences.style.height=heightskillsIcons*0 +'px' //Exp
                button.classList.remove("button--focus")
                skillsExperiences.classList.add("skills__experiences--smooth");
                skillsIcons.classList.remove("skills__experiences--smooth");

               
            //    console.log( button.innerText == e.target.innerText)
            //    skillsIcons.classList.remove("skills__experiences--smooth");
            //    skillsExperiences.classList.add("skills__experiences--smooth");
  

            }
        }) 



    }


})

//#endregion