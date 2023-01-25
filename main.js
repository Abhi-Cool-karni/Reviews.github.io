//  local review data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "UX designer",
    img: "https://images.unsplash.com/photo-1674152422224-6fe19cf43986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est enim amet minus quidem, repellat eius a optio quis vitae. Ipsa, at repellendus. Maxime voluptate consectetur sequi id quam recusandae.
       `,
  },

  {
    id: 2,
    name: "johnny depth",
    job: "ACTOR",
    img: "https://images.unsplash.com/photo-1674098505334-01e586408820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    text: ` Quasi eaque, architecto optio vero officia aperiam, similique eum laboriosam voluptas quam adipisci ratione, aliquid dolore? Fuga quasi, dicta, quisquam optio similique rerum cupiditate nulla est a alias expedita impedit!`,
  },

  {
    id: 3,
    name: "Jack rayan",
    job: "Actor",
    img: "https://images.unsplash.com/photo-1674240568812-d7481f3699a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    text: ` Voluptates eos tempore quod magni cupiditate nisi amet! Reprehenderit quae natus optio sequi cum dolorem perspiciatis ipsam doloremque quasi magni, ipsa hic sit numquam autem laudantium quibusdam asperiores soluta cupiditate.!`,
  },
  {
    id: 4,
    name: "saine smith",
    job: "Frontend Developer",
    img: "https://images.unsplash.com/photo-1674236155766-5cc3b77ebfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est enim amet minus quidem, repellat eius a optio quis vitae. Ipsa, at repellendus. Maxime voluptate consectetur sequi id quam recusandae.`,
  },
];

//  select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

//  load initial item
window.addEventListener("DOMContentLoaded", function () {
  showperson(currentItem);
});

// show person based on item
function showperson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name.concat(" " + item.id);
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showperson(currentItem);
});

//show previous person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showperson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showperson();
});
