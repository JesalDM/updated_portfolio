$(document).ready(function() {
// array of objects that represents the details of each portfolio item to be rendered on UI 
const portfolioItem = [
    {
        gifLink :"./assets/images/gym_logistical_tracker.webm",
        source : "./assets/images/gym_logistical_tracker.png",
        altText : "Gym Management System",
        projectTitle : "Gym Logistical Tracker",
        projectBody : "A gym management system built using back-end and front-end technologies like express, sequelize, javascript",
        liveLink : "https://gym-logistical-tracker-duex.herokuapp.com/",
        codeLink : "https://github.com/JesalDM/Gym-Logistical-Tracker"
    },
    {
        gifLink :"./assets/images/Drury-Lane-Sweets.gif",
        source : "./assets/images/Drury-Lane-Sweets.png",
        altText : "Dessert Place Website",
        projectTitle : "Drury Lane Sweets",
        projectBody : "A dessert place website with online ordering, delivery and catering services built using HTML, CSS, Javascript, JQuery, AJAX.",
        liveLink : "https://jesaldm.github.io/Drury-Lane-Sweets/.",
        codeLink : "https://github.com/JesalDM/Drury-Lane-Sweets/"
    },
    {
        gifLink :"./assets/images/Weather-Dashboard.gif",
        source : "./assets/images/Weather-Dashboard.png",
        altText : "Weather Dashboard",
        projectTitle : "Weather Dashboard",
        projectBody : "A weather application showing current and forecast weather for a location, built using AJAX",
        liveLink : "https://jesaldm.github.io/weather-dashboard/.",
        codeLink : "https://github.com/JesalDM/weather-dashboard/"
    },
    {
        gifLink :"./assets/images/Work-Day-Scheduler.gif",
        source : "./assets/images/Work-day-scheduler.png",
        altText : "Work-day Scheduler",
        projectTitle : "Work-Day Scheduler",
        projectBody : "A color-coded work-day scheduler application that saves tasks for the day",
        liveLink : "https://jesaldm.github.io/workday-scheduler/.",
        codeLink : "https://github.com/JesalDM/workday-scheduler/"
    },
    {
        gifLink :"https://jesaldm.github.io/team-profile-generator/assets/app-demo-part2.gif",
        source : "https://jesaldm.github.io/team-profile-generator/assets/team-profile.png",
        altText : "Manager's Team Profile",
        projectTitle : "Team Profile Generator",
        projectBody : "Node command line application that gathers team information and generates a software engineering team profile using Inquirer package",
        liveLink : "https://jesaldm.github.io/team-profile-generator/assets/sampleTeam.html",
        codeLink : "https://github.com/JesalDM/team-profile-generator"
    },
    {
        gifLink :"./assets/images/Javascript-Code-Quiz.gif",
        source : "./assets/images/code-quiz.png",
        altText : "Javascript Code Quiz - Welcome Page",
        projectTitle : "Javascript Code Quiz",
        projectBody : "A timed and scored javascript built code quiz application that tests the javascript fundamentals and saves the user high scores.",
        liveLink : "https://jesaldm.github.io/code-quiz/.",
        codeLink : "https://github.com/JesalDM/code-quiz"
    },
]

    //this function generates each portfolio item in the portfolio section
    function generateProjectItem(item){
        // creates a template
        const projImage = 
        `<div class="portfolio-item animated zoomIn">
            <div class="card text-center" style="width: 420px;">
                <a href="${item.gifLink}" target="_blank"><img src="${item.source}" class="img-fluid" alt="${item.altText}"></a>
                <div class="card-body">
                    <h5>${item.projectTitle}</h5>
                    <p class="card-text">${item.projectBody}</p>
                    <a href="${item.liveLink}" target="_blank" class="btn btn-custom portfolio-btn btn-sm">View Live</a>
                    <a href="${item.codeLink}" target="_blank" class="btn btn-custom portfolio-btn btn-sm">View Code</a>
                </div>
            </div>
        </div>`   
        // creates a div for every portfolio item
        const outerDiv = document.createElement("div");
        // adds a class to the div
        outerDiv.className="col-lg-6";
        // sets the HTML content
        outerDiv.innerHTML = projImage;
        // appends the HTML content to the parent div
        document.querySelector(".projects").append(outerDiv);
    }

    //for loop to call the function to generate each portfolio item
    for(let i=0; i<portfolioItem.length; i++){
        generateProjectItem(portfolioItem[i]);
    }

});
