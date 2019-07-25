import timg from './image/timg.jpg';
require ("./style/main.css")
require ("./style/index.scss")
function conso(){
    console.log('打包成功')
}
conso();
function es(){
    ()=>{
        console.log('这是es6的箭头函数')
    }
}
es();
var img = document.getElementById('img');
var imgPath = new Image();
imgPath.src = timg;
img.append(imgPath)
export default conso;
