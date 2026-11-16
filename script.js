const people = {
    paternalGrandfather: {
        name: "Лувсанбалдан",
        relation: "Аавын аав",
        photo: "images/paternal-grandpa.jpg",
        bio: "Аавын аавын намтрыг энд бичнэ."
    },

    paternalGrandmother: {
        name: "Энхтуяа",
        relation: "Аавын ээж",
        photo: "images/paternal-grandma.jpg",
        bio: "Аавын ээжийн намтрыг энд бичнэ."
    },

    maternalGrandfather: {
        name: "Нямаа",
        relation: "Ээжийн аав",
        photo: "images/maternal-grandpa.jpg",
        bio: "Ээжийн аавын намтрыг энд бичнэ."
    },

    maternalGrandmother: {
        name: "Тэрбиш",
        relation: "Ээжийн ээж",
        photo: "images/maternal-grandma.jpg",
        bio: "Ээжийн ээжийн намтрыг энд бичнэ."
    },

    father: {
        name: "Тогтуунбаяр",
        relation: "Аав",
        photo: "images/father.jpg",
        bio: "Аавын намтрыг энд бичнэ."
    },

    mother: {
        name: "Цэцэг-Өлзий",
        relation: "Ээж",
        photo: "images/mother.jpg",
        bio: "Ээжийн намтрыг энд бичнэ."
    },

    me: {
        name: "Алтанзул",
        relation: "Би",
        photo: "images/me.jpg",
        bio: "Өөрийн танилцуулгыг энд бичнэ."
    }
};

// Намтар харуулах цонх

const infoWindow = document.getElementById("person-info");
const closeButton = document.querySelector(".close-info-btn");

for (const button of document.querySelectorAll(".member")) {
    button.addEventListener("click", () => {
        const person = people[button.dataset.person];

        document.getElementById("info-name").textContent = person.name;
        document.getElementById("info-relation").textContent = person.relation;
        document.getElementById("info-photo").src = person.photo;
        document.getElementById("info-photo").alt = person.name;
        document.getElementById("info-biography").textContent = person.bio;

        infoWindow.hidden = false;
        closeButton.focus();
    });
}

function closeInfo() {
    infoWindow.hidden = true;
}

closeButton.addEventListener("click", closeInfo);

infoWindow.addEventListener("click", (event) => {
    if (event.target === infoWindow) {
        closeInfo();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeInfo();
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