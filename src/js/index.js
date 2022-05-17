import "../css/style.scss";
import img from "../assets/image.jpg";
const testeComponent =()=>{
  const elem1 = document.createElement("h1");
  elem1.innerHTML = "Olá mundo!!!";
  elem1.classList.add("title");
  return elem1;
}
const imgComponent = ()=>{
  const elemtImg = new Image(300,150);
  elemtImg.src = img;
  return elemtImg;
}
document.body.appendChild(testeComponent());
document.body.appendChild(imgComponent())