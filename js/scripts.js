//NAVBAR
const open = () => {
    document.getElementById("nav-links").classList.add("active");
    document.getElementById("open-nav").style.display = "none";
    document.getElementById("logo").style.display = "none";

}
const close = () => {
    document.getElementById("nav-links").classList.remove("active");
    document.getElementById("open-nav").style.display = "block";
    document.getElementById("logo").style.display = "block";
}

document.getElementById("open-nav").addEventListener("click", open);
document.getElementById("close-nav").addEventListener("click", close);

//FEATURES


const featureActive = (feature, featureBtn) => {
    document.getElementById("feature-btn-1").classList.remove("features-btn-active");
    document.getElementById("feature-btn-2").classList.remove("features-btn-active");
    document.getElementById("feature-btn-3").classList.remove("features-btn-active");
    document.getElementById("feature-1").classList.remove("item-active");
    document.getElementById("feature-2").classList.remove("item-active");
    document.getElementById("feature-3").classList.remove("item-active");

    document.getElementById(feature).classList.add("item-active");
    document.getElementById(featureBtn).classList.add("features-btn-active");
}

document.getElementById("feature-btn-1").addEventListener("click", ()=>featureActive("feature-1","feature-btn-1"));
document.getElementById("feature-btn-2").addEventListener("click", ()=>featureActive("feature-2","feature-btn-2"));
document.getElementById("feature-btn-3").addEventListener("click", ()=>featureActive("feature-3","feature-btn-3"));

const faqButtons = document.getElementsByClassName("faq-button");
const faqItems = document.getElementsByClassName("faq-content");

const faqActive = (e) => {
    let button = e.target;
    for(let i = 0; i < faqButtons.length; i++){
        if(e.target === faqButtons[i].firstElementChild || e.target === faqButtons[i].lastElementChild){ 
            button = e.target.parentElement;
        }
    }

    let item = 0;
    for(let i = 0; i < faqButtons.length; i++){
        if(button === faqButtons[i]) {
            item = i;
        }
    }

    if(button.classList.contains("faq-btn-active")){
        button.classList.remove("faq-btn-active");
        faqItems[item].classList.remove("faq-active");
    } else {
        for(let i = 0; i < faqButtons.length; i++){
            faqButtons[i].classList.remove("faq-btn-active");
            faqItems[i].classList.remove("faq-active");        
        }
    
        faqButtons[item].classList.add("faq-btn-active");
        faqItems[item].classList.add("faq-active");
    }
}

for(let i = 0; i < faqButtons.length; i++){
    faqButtons[i].addEventListener("click", (e)=>faqActive(e));
}


