// console.log('Reveiw Cards');

// //Array of all the reviewers
var cards = [
    {image: './Assets/img-1.jpg',
    name: 'Sarah John',
    job: 'WEB DEVELOPER',
    perReview: 'Exceptional web development HTML, CSS, and JavaScript expertise shines through. Stunning site, quick turnaround. Highly recommended!'
    },

    {image: './Assets/image-2.jpg',
    name: 'June Joe',
    job: 'Ui/Ux Designer',
    perReview: 'Incredible work with HTML, CSS, and JavaScript. Our website is flawless. Skilled team, on-time delivery, and a joy to work with!'
    },
    
    {image: './Assets/img-3.jpg',
    name: 'Albert Luois',
    job: 'FULL STACK DEVELOPER',
    perReview: 'Outstanding HTML, CSS, and JavaScript services. A responsive, elegant website exceeded expectations. 5-star quality and professionalism!'
    },

    {image: './Assets/img-4.jpg',
    name: 'Micheal Angelo',
    job: 'HR EXECUTIVE',
    perReview: 'Impressed with HTML, CSS, and JavaScript results. Our site looks amazing! Reliable, talented team. Fantastic job!'
    },

    {image: './Assets/img-5.jpg',
    name: 'Robert Rico',
    job: 'CHIEF MANAGER',
    perReview: 'Top-notch HTML, CSS, and JavaScript services. The site is a masterpiece. Timely, professional, and a pleasure to collaborate with.'
    }

]
//Create variables for everything you want to slide
var img = document.getElementById('personImage');
var personName = document.getElementById('nameId');
var job = document.getElementById('jobTitle');
var desc = document.getElementById('description');

//create variable to check limit of persons
var currentPerson = 0;

//defining reviewers details here in showPerson
function showPerson() {
//getting objects from array to store in "item"
    var item = cards[currentPerson];
    img.src = item.image;
    personName.innerText = item.name;
    job.innerText = item.job;
    desc.innerText = item.perReview;
};

function backward() {
    currentPerson++;
    if (currentPerson > cards.length - 1) {
    currentPerson = 0;
    }
    showPerson();
}

function forward() {
    currentPerson--;
    if (currentPerson < 0) {
    currentPerson = cards.length - 1;
    }
    showPerson();
}



//adding event listner on next button
// next.addEventListener("click", function() {
//     currentPerson++;
//     if (currentPerson > cards.length - 1) {
//     currentPerson = 0;
//     }
//     showPerson();
// }
// );

// previous.addEventListener("click", function() {
//     currentPerson--;
//     if (currentPerson < 0) {
//     currentPerson = cards.length - 1;
//     }
//     showPerson();
// }
// );
