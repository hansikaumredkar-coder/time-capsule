
/* PASSWORD SCREEN */

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlock-btn");
const errorMessage = document.getElementById("error-message");

const welcomeScreen = document.getElementById("welcome-screen");
const capsuleScreen = document.getElementById("capsule-screen");

function unlockCapsule() {
    const password = passwordInput.value.trim();

    if (password === "30112008") {
        errorMessage.textContent = "";

        welcomeScreen.classList.add("hidden");
        capsuleScreen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {
        errorMessage.textContent =
            "That's not the secret, try again! ♡";

        passwordInput.value = "";
        passwordInput.focus();
    }
}

unlockButton.addEventListener("click", unlockCapsule);

passwordInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        unlockCapsule();
    }
});


/* OPEN THE TIME CAPSULE */

const openCapsuleButton = document.getElementById("open-capsule-btn");
const capsuleContent = document.getElementById("capsule-content");

openCapsuleButton.addEventListener("click", function() {
    capsuleContent.classList.remove("hidden");

    openCapsuleButton.textContent = "Your memories are here ♡";

    openCapsuleButton.disabled = true;

    openCapsuleButton.style.opacity = "0.7";

    capsuleContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


/* LETTERS */

const letters = {
    past: {
        title: "A letter from the past 💌",
        text: `Dear you,

Remember when we first started making memories?

I never knew that the little moments
would become some of my favourite memories.

Thank you for every laugh,
every conversation and every little thing
that made life more beautiful.

I hope you always remember
how special you are.

With love,
Your favourite person ♡`
    },

    future: {
        title: "A message from your future self ✨",
        text: `Hey, future birthday girl!

I hope you are reading this with a smile.

I hope you have grown into someone
you are proud of.

I hope you have achieved little dreams,
made beautiful memories
and found happiness in unexpected places.

And even if everything hasn't gone as planned,
remember that you are still growing.

Keep believing in yourself.

You have so many beautiful things ahead.

With love,
Your past self ♡`
    }
};

const letterButtons = document.querySelectorAll(".letter-btn");
const letterModal = document.getElementById("letter-modal");
const letterTitle = document.getElementById("letter-title");
const letterText = document.getElementById("letter-text");
const closeModalButton = document.getElementById("close-modal");

letterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const letterName = button.dataset.letter;
        const selectedLetter = letters[letterName];

        if (selectedLetter) {
            letterTitle.textContent = selectedLetter.title;
            letterText.textContent = selectedLetter.text;

            letterModal.classList.remove("hidden");
        }
    });
});

closeModalButton.addEventListener("click", function() {
    letterModal.classList.add("hidden");
});

letterModal.addEventListener("click", function(event) {
    if (event.target === letterModal) {
        letterModal.classList.add("hidden");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        letterModal.classList.add("hidden");
    }
});
