import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';



const delayInputEl = document.querySelector('[name="delay"]');
const stepInputEl = document.querySelector('[name="step"]');
const amountInputEl = document.querySelector('[name="amount"]');
const formEl = document.querySelector('.form');
const btnStart = document.querySelector('button[type="submit"]');


const businessProposals = [
    "Transform your living space with cutting-edge smart home technologies for enhanced comfort and security.",
    "Elevate your brand's storytelling through engaging and original content crafted by our creative team.",
    "Embrace a nutritious lifestyle effortlessly with our customized and convenient meal prep delivery services.",
    "Stay active and healthy from the comfort of your home with our virtual fitness classes led by expert trainers.",
    "Switch to sustainable living with our range of eco-friendly and effective cleaning products for a healthier home.",
    "Surprise your loved ones with thoughtfully curated gift boxes tailored to their unique preferences and occasions.",
    "Boost your business's online presence with our intensive digital marketing bootcamp, designed for entrepreneurs.",
    "Strengthen your remote team's bonds through engaging and interactive virtual team-building events.",
    "Support local artisans and discover unique, handmade treasures at our curated artisan market.",
    "Improve mental well-being and productivity with our mindfulness workshops designed for the modern professional.",
    "Ensure seamless operation of your devices with our tech support subscription, providing quick and reliable assistance.",
    "Create your dream wedding with our personalized wedding planning services, tailored to your vision.",
    "Embark on a language-learning journey with our user-friendly app, offering lessons in multiple languages.",
    "Enhance your productivity and comfort with our ergonomic home office solutions for a healthier work environment.",
    "Prioritize your pet's health and happiness with our range of premium wellness products for furry friends.",
    "Explore the world with our curated adventure travel packages, designed for thrill-seekers and nature lovers.",
    "Tackle home improvement projects effortlessly with our all-in-one DIY kits and step-by-step guides.",
    "Redefine your living space with our virtual interior design consultations, bringing expert advice to your doorstep.",
    "Stand out in the job market with our professional resume services, crafted to highlight your unique skills and experiences.",
    "Unplug and rejuvenate with our tech-free retreats, offering a peaceful escape from the digital world.",
    "Optimize your business strategies with our AI-powered analytics tools, providing valuable insights for informed decision-making.",
    "Embrace a healthier lifestyle with our plant-based cooking classes, teaching delicious and nutritious recipes.",
    "Empower your employees with our financial wellness seminars, promoting smart money management and planning.",
    "Spark your child's imagination with our interactive children's books, combining storytelling with engaging activities.",
    "Pamper yourself with our DIY natural beauty kits, containing ingredients for creating your own skincare essentials.",
    "Express your individuality with our custom apparel printing services, turning your designs into wearable art.",
    "Contribute to a sustainable future with our tech recycling services, responsibly disposing of electronic waste.",
    "Hone your photography skills with our remote workshops, led by experienced photographers from around the world.",
    "Immerse yourself in a world of literature with our subscription-based book club, delivering handpicked reads to your doorstep.",
    "Turn your renovation dreams into reality with our flexible home renovation financing options, tailored to your budget."
];

let timerId = null;
let count = 0;
let timeDelay = 0;
let counterAmount = 0;

iziToast.settings({
    timeout: 4000,
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: "topRight",
});



const btnNone = () => {
    btnStart.style.opacity = 0.5;
    btnStart.style.pointerEvents = 'none';
};

const btnAuto = () => {
    btnStart.style.pointerEvents = 'auto';
    btnStart.style.opacity = 1;
};


function createPromise(position, initialDelay, subsequentDelay) {
    return new Promise((resolve, reject) => {
        timeDelay = initialDelay;
        counterAmount = 1
        function finallyDesition() {
            if (count !== 0) {
                timerId = setInterval(() => {
                    const shouldResolve = Math.random() > 0.3;
                    let randomNumber = Math.floor(Math.random() * 30);

                    counterAmount += 1
                    timeDelay = +timeDelay + +subsequentDelay;
                    if (shouldResolve) {
                        iziToast.success({
                            title: 'We are able',
                            message: `${businessProposals[randomNumber]} ${timeDelay} ms`,
                        });
                    } else {
                        iziToast.error({
                            title: 'We are unable',
                            message: `${businessProposals[randomNumber]} ${timeDelay} ms`,
                        });
                    }
                    count += 1;
                    if (count >= position) {
                        count = 0;
                        formEl.reset();
                        btnAuto()
                        clearInterval(timerId);
                    }
                }, subsequentDelay)
            }
        }

        function intervalFunction() {
            if (count === 0) {
                setTimeout(() => {
                    let randomNumber = Math.floor(Math.random() * 31);

                    const shouldResolve = Math.random() > 0.3;

                    count += 1;
                    if (shouldResolve) {
                        iziToast.success({
                            title: 'We are able',
                            message: `${businessProposals[randomNumber]} ${timeDelay} ms`,
                        });


                        resolve(finallyDesition());
                    } else {
                        iziToast.error({
                            title: 'We are unable',
                            message: `${businessProposals[randomNumber]} ${timeDelay} ms`,
                        });


                        reject(finallyDesition());
                    }
                }, initialDelay)
            }
        }
        intervalFunction()
    });
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const amountStep = amountInputEl.value;
    const initialDelay = delayInputEl.value;
    const subsequentDelay = stepInputEl.value;
    if (amountStep < 2 || initialDelay < 1 || subsequentDelay < 1) {
        return iziToast.info({
            title: 'Hello!',
            message: 'Please write a number greater than 1.'
        })
    }

    btnNone()

    createPromise(amountStep, initialDelay, subsequentDelay)
        .then((result) => {
            console.log('Promise resolved:', result);
        })
        .catch((error) => {
            console.log('Promise rejected:', error.message);
        })
});
