import './styles.css'
import { Application } from '@splinetool/runtime';
//import Sidebar from '@eardi/vanilla-js-sidebar';

const button = document.querySelector('.toggle');
const canvas = document.getElementById('canvas3d');
const myVar = { EnumStat: 0};

const spline = new Application(canvas);
spline
	.load('https://prod.spline.design/uuI1zZPhoxzY4bPc/scene.splinecode', myVar)
	.then(() => {
		const obj = spline.findObjectByName('Cube');
        
        //move object by clicking
        button.addEventListener('click', () => { 
            console.log("Move!");
            obj.position.x += 10;
        });
        
        //change variables
        for (let i = 0; i < 5; i++) {
            spline.setVariable('EnumStat', i);
            console.log(i);
          }
        
        //Event listener to trigger
        spline.addEventListener('mouseDown', (e) => {
			if (e.target.name === 'Cube') {
				console.log('I have been clicked!');
                show();
			}
		});
		
	});


//show sidebar function
function show(){
    var sideBar = document.getElementById('side-bar');
    sideBar.classList.toggle('active');
}

canvas.width =window.innerWidth;
canvas.height = window.innerHeight;






