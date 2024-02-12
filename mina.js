const translateions = {
    en:{
        home: "Home",
        about: "About",
        contact:"Contact Us",
        selectLanguage:"Select a language",
        english: "English",
        arabic:"Arabic",
    },
    ar:{
        home: "الصفحة الرئيسية ",
        about: "من نحن ",
        contact:"تواصل معنا ",
        selectLanguage:"اختر لغة",
        english: "الانجليزية",
        arabic:"العربية",
    },
};

const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change" , (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang" , event.target.value);
});

document.addEventListener("DOMContentLoaded" , () =>{

    setLanguage(localStorage.getItem("lang"));
})
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-translate");
        element.textContent = translateions[language][translationKey];
    });

    document.dir = language === "ar" ? "rtl" : "ltr";
};