const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const red_p = document.createElement("p");

red_p.textContent="Hey, I'm red!";
red_p.style.color = "red";

container.appendChild(red_p);

const blue_h3 = document.createElement("h3");


blue_h3.textContent="I'm blue h3";
blue_h3.style.color = "blue";

container.appendChild(blue_h3);


const pink_div = document.createElement("div");
pink_div.style.backgroundColor = "pink";

const in_h1 = document.createElement("h1");
in_h1.textContent="I'm in a div";

pink_div.appendChild(in_h1);

const in_p = document.createElement("p");
in_p.textContent="ME TOO!";

pink_div.appendChild(in_p);


container.appendChild(pink_div);