// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get the customer's information

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    // Check if the fields are empty

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please complete all required fields.");

        return;

    }


    // Create WhatsApp message

    const whatsappMessage =
        `Hello! My name is ${name}.

I am interested in your ${service} service.

My message:
${message}

My email:
${email}`;


    // YOUR WHATSAPP NUMBER
    // Replace this with the fashion designer's number.
    //
    // IMPORTANT:
    // Include country code.
    // Example UAE:
    // 971501234567

    const phoneNumber =
        "971501234567";


    // Create WhatsApp URL

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    // Success message

    alert(
        "Thank you, " +
        name +
        "! Your request is ready to send."
    );


    // Open WhatsApp

    window.open(
        whatsappURL,
        "_blank"
    );


    // Clear form

    contactForm.reset();

});
// ===============================
// MOBILE MENU
// ===============================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
// ===============================
// FASHION GALLERY
// ===============================

const galleryImages =
    document.querySelectorAll(".gallery-image");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const closeLightbox =
    document.getElementById("closeLightbox");

const previousImage =
    document.getElementById("previousImage");

const nextImage =
    document.getElementById("nextImage");


let currentImageIndex = 0;


// OPEN IMAGE

galleryImages.forEach(function (image, index) {

    image.addEventListener("click", function () {

        currentImageIndex = index;

        showImage(currentImageIndex);

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// SHOW IMAGE

function showImage(index) {

    const image =
        galleryImages[index];

    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt;

    lightboxTitle.textContent =
        image.dataset.title;

}


// NEXT IMAGE

nextImage.addEventListener("click", function () {

    currentImageIndex++;

    if (
        currentImageIndex >=
        galleryImages.length
    ) {

        currentImageIndex = 0;

    }

    showImage(currentImageIndex);

});


// PREVIOUS IMAGE

previousImage.addEventListener("click", function () {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            galleryImages.length - 1;

    }

    showImage(currentImageIndex);

});


// CLOSE LIGHTBOX

closeLightbox.addEventListener(
    "click",
    function () {

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }
);


// CLOSE WHEN CLICKING OUTSIDE IMAGE

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            lightbox.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "auto";

        }

    }
);


// KEYBOARD CONTROLS

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (event.key === "Escape") {

            lightbox.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "auto";

        }


        if (event.key === "ArrowRight") {

            nextImage.click();

        }


        if (event.key === "ArrowLeft") {

            previousImage.click();

        }

    }
);
// ===============================
// TESTIMONIAL SLIDER
// ===============================

const testimonials =
    document.querySelectorAll(".testimonial");

const previousTestimonial =
    document.getElementById(
        "previousTestimonial"
    );

const nextTestimonial =
    document.getElementById(
        "nextTestimonial"
    );


let testimonialIndex = 0;


// SHOW TESTIMONIAL

function showTestimonial(index) {

    testimonials.forEach(function (testimonial) {

        testimonial.classList.remove(
            "active"
        );

    });


    testimonials[index].classList.add(
        "active"
    );

}


// NEXT

nextTestimonial.addEventListener(
    "click",
    function () {

        testimonialIndex++;

        if (
            testimonialIndex >=
            testimonials.length
        ) {

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    }
);


// PREVIOUS

previousTestimonial.addEventListener(
    "click",
    function () {

        testimonialIndex--;

        if (testimonialIndex < 0) {

            testimonialIndex =
                testimonials.length - 1;

        }

        showTestimonial(testimonialIndex);

    }
);


// AUTOMATIC SLIDE

setInterval(function () {

    testimonialIndex++;

    if (
        testimonialIndex >=
        testimonials.length
    ) {

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}, 5000);
// ===============================
// BOOKING FORM
// ===============================

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // GET CLIENT INFORMATION

        const name =
            document
                .getElementById("bookingName")
                .value
                .trim();


        const phone =
            document
                .getElementById("bookingPhone")
                .value
                .trim();


        const email =
            document
                .getElementById("bookingEmail")
                .value
                .trim();


        const service =
            document.getElementById(
                "bookingService"
            ).value;


        const eventType =
            document.getElementById(
                "eventType"
            ).value;


        const date =
            document.getElementById(
                "bookingDate"
            ).value;


        const time =
            document.getElementById(
                "bookingTime"
            ).value;


        const budget =
            document.getElementById(
                "budget"
            ).value;


        const details =
            document.getElementById(
                "bookingDetails"
            ).value.trim();


        // VALIDATION

        if (
            name === "" ||
            phone === "" ||
            email === "" ||
            service === "" ||
            eventType === "" ||
            date === "" ||
            time === "" ||
            details === ""
        ) {

            alert(
                "Please complete all required fields."
            );

            return;

        }


        // CREATE WHATSAPP MESSAGE

        const bookingMessage =

            `Hello! I would like to book a consultation.

CLIENT DETAILS

Name: ${name}

Phone: ${phone}

Email: ${email}


BOOKING DETAILS

Service: ${service}

Event: ${eventType}

Preferred Date: ${date}

Preferred Time: ${time}

Budget: ${budget || "Not specified"}


OUTFIT DETAILS

${details}`;


        // BUSINESS WHATSAPP NUMBER

        const phoneNumber =
            "971501234567";


        // CREATE WHATSAPP LINK

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(
                bookingMessage
            );

        // ===============================
        // SAVE BOOKING
        // ===============================

        const newBooking = {

            name: name,

            phone: phone,

            email: email,

            service: service,

            eventType: eventType,

            date: date,

            time: time,

            budget: budget,

            details: details

        };


        let bookings =
            JSON.parse(
                localStorage.getItem("bookings")
            ) || [];


        bookings.push(newBooking);


        localStorage.setItem(
            "bookings",
            JSON.stringify(bookings)
        );
        // SUCCESS MESSAGE

        alert(
            "Thank you, " +
            name +
            "! Your consultation request is ready."
        );


        // OPEN WHATSAPP

        window.open(
            whatsappURL,
            "_blank"
        );


        // RESET FORM

        bookingForm.reset();

    }
);