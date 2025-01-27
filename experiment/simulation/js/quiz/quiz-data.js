/*
 * 
 * Author: Subir Sekhar
 * Co-Author: P. K. Jana
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "  In a series RLC circuit, the wave front and wave tail times are controlled by changing the value ",
            "a": [
                {"option": " R only", "correct": false},
                {"option": "R and L simultaneously", "correct": true},
                {"option": "R and C simultaneously", "correct": false},
                {"option": " L and C simultaneously", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " The relationship between the breakdown voltage V and gap d is normally given as",
            "a": [
                {"option": "`d = kV^2`", "correct": false},
                {"option": "`d=kV^3`", "correct": false},
                {"option": "`V = kd`", "correct": false},
                {"option": "`V = kd^n`", "correct": true} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Switching surge is:",
            "a": [
                {"option": " high voltage dc", "correct": false},
                {"option": " high voltage ac", "correct": false},
                {"option": " short duration transient voltage", "correct": true},
                {"option": "hyperbolically dying voltage", "correct": false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 4
            "q": " Insulators for high voltage applications are tested for",
            "a": [
                {"option": " power frequency tests", "correct": false},
                {"option": " impulse tests", "correct": false},
                {"option": "Both (a) and (b)", "correct": true},
                {"option": "None of these", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 5
            "q": " Impulse testing of transformers is done to determine the ability of ",
            "a": [
                {"option": "insulation to withstand transient voltages", "correct": true},
                {"option": "bushings to withstand vibrations", "correct": false},
                {"option": "windings to withstand voltage fluctuations", "correct": false},
                {"option": "all of the above", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 6
            "q": "  The electrical breakdown strength of insulating materials depends on ",
            "a": [
                {"option": "nature of applied voltage ", "correct": false},
                {"option": " imperfections in dielectric material", "correct": false},
                {"option": "  pressure, temperature and humidity", "correct": false},
                {"option": " all of the above", "correct": true} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
}// no comma here
    ]
};