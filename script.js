const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

let final_avg;
const header = document.createElement("h1");
header.textContent = "Freelancer Forum";
header.style.fontSize = "6vh";
body.append(header);

const average_price = document.createElement("p");
(average_price.textContent = "The average starting price is $"), { final_avg };
average_price.style.fontSize = "4vh";
body.append(average_price);

const header_II = document.createElement("h2");
header_II.textContent = "Available Freelancers";
header_II.style.fontSize = "5vh";
body.append(header_II);

const freelancer_info = document.createElement("div");
freelancer_info.style.display = "flex";
freelancer_info.style.flexDirection = "column";
body.append(freelancer_info);

const freelancer_name = ["Jhon", "Martin", "Antony", "Larry", "Jose"];
const freelancer_occupation = [
  "Engineer",
  "Designer",
  "Engineer",
  "Clerk",
  "Teacher",
];
const freelancer_starting_price = [80, 70, 60, 50, 40];
// let freelancers_length = 2;
const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    starting_price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    starting_price: 50,
  },
];

const freelancer_div = document.createElement("div");
freelancer_div.style.display = "flex";
freelancer_div.style.fontSize = "3vh";

const name = document.createElement("div");
name.textContent = "Name";
name.style.margin = "0 20px 0 0";

const occupation = document.createElement("div");
occupation.textContent = "Occupation";
occupation.style.margin = "0 20px 0 0";

const starting_price = document.createElement("div");
starting_price.textContent = "Starting Price";
starting_price.style.margin = "0 20px 0 0";

freelancer_div.append(name, occupation, starting_price);
freelancer_info.append(freelancer_div);

function freelancer_information() {
  name.innerHTML = "Name";
  occupation.innerHTML = "Occupation";
  starting_price.innerHTML = "Starting Price";

  freelancers.forEach((freelancer) => {
    const name_list = document.createElement("li");
    name_list.textContent = `${freelancer.name}`;
    name_list.style.listStyleType = "none";

    name.append(name_list);

    const occupation_list = document.createElement("li");
    occupation_list.textContent = `${freelancer.occupation}`;
    occupation_list.style.listStyleType = "none";
    occupation.append(occupation_list);

    const starting_price_list = document.createElement("li");
    starting_price_list.textContent = `$${freelancer.starting_price}`;
    starting_price_list.style.listStyleType = "none";
    starting_price.append(starting_price_list);
  });
}

function addFreelancers() {
  const random = Math.floor(Math.random() * freelancer_name.length);
  console.log("Random number: ", random);

  freelancers.push({
    name: freelancer_name[random],
    occupation: freelancer_occupation[random],
    starting_price: freelancer_starting_price[random],
  });
}
function cal_avg_Starting_Price() {
  if (freelancers.length === 0) return 0;
  let initialValue = 0;
  const total = freelancers.reduce((acc, freelancer) => {
    return (acc += freelancer.starting_price);
  }, initialValue);

  const avg = total / freelancers.length;
  console.log("total: ", total);
  return Math.round(avg);
}

const interval = setInterval(() => {
  addFreelancers();
  final_avg = cal_avg_Starting_Price();
  console.log("final: ", final_avg);
  average_price.textContent = `The average starting price is $${final_avg}`;
  freelancer_information();
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 4000);
