const people = {
    paternalGrandfather: {
        name: "Нэрийг оруулна",
        relation: "Аавын аав",
        photo: "images/paternal-grandfather.jpg",
        bio: "Аавын аавын намтрыг энд бичнэ."
    },

    paternalGrandmother: {
        name: "Нэрийг оруулна",
        relation: "Аавын ээж",
        photo: "images/paternal-grandmother.jpg",
        bio: "Аавын ээжийн намтрыг энд бичнэ."
    },

    maternalGrandfather: {
        name: "Нэрийг оруулна",
        relation: "Ээжийн аав",
        photo: "images/maternal-grandfather.jpg",
        bio: "Ээжийн аавын намтрыг энд бичнэ."
    },

    maternalGrandmother: {
        name: "Нэрийг оруулна",
        relation: "Ээжийн ээж",
        photo: "images/maternal-grandmother.jpg",
        bio: "Ээжийн ээжийн намтрыг энд бичнэ."
    },

    father: {
        name: "Нэрийг оруулна",
        relation: "Аав",
        photo: "images/father.jpg",
        bio: "Аавын намтрыг энд бичнэ."
    },

    mother: {
        name: "Нэрийг оруулна",
        relation: "Ээж",
        photo: "images/mother.jpg",
        bio: "Ээжийн намтрыг энд бичнэ."
    },

    me: {
        name: "Нэрийг оруулна",
        relation: "Би",
        photo: "images/me.jpg",
        bio: "Өөрийн танилцуулгыг энд бичнэ."
    }
};

// Намтар харуулах цонх

const modal = document.getElementById("person-modal");
const closeButton = document.querySelector(".close-button");

for (const button of document.querySelectorAll(".person")) {
    button.addEventListener("click", () => {
        const person = people[button.dataset.person];

        document.getElementById("modal-name").textContent = person.name;
        document.getElementById("modal-relation").textContent = person.relation;
        document.getElementById("modal-photo").src = person.photo;
        document.getElementById("modal-photo").alt = person.name;
        document.getElementById("modal-bio").textContent = person.bio;

        modal.hidden = false;
        closeButton.focus();
    });
}

function closeModal() {
    modal.hidden = true;
}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Гар утасны цэс

const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelector(".menu-links");

menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("open");
});

for (const link of menuLinks.querySelectorAll("a")) {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("open");
    });
}