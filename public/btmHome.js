//For Build/Deploy/Scale animation effect
var build = document.getElementById("build");
const desc = ["Build", "Scale", "Deploy"];
let setDesc = 1;
setInterval(() => {
    const homeText = desc[setDesc % 3];
    build.innerText = homeText;
    setDesc = setDesc + 1;
}, 2000);

