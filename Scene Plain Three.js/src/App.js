
//This code sets up a basic Three.js scene with a rotating red cube and handles 
//resizing the window to ensure the scene is rendered correctly.


import logo from './logo.svg'; //These lines importing dependencies.
import './App.css';
import * as THREE from 'three' ; //This line importing entire three.js library as THREE object from 'THREE'
import { render } from 'react-three-fiber';
function App() { //This is the main function or component of this code file.

  //creating scene and camera, in camera i'm taking PerspectiveCamera and passing
  //degree of view, aspect ratio, near clipping plane and far clipping plane distance.

  const scene = new THREE.Scene() ;

  const camera = new THREE.PerspectiveCamera(
    75, //field of view which is 75 degree.
    window.innerWidth/window.innerHeight , //aspect ratio
    0.1, //clipping distance for near plane
    1000, //clipping distance for far plane
  );

  const renderer = new THREE.WebGLRenderer() ; //this is WebGLRenderer object which will render the scene using WebGL.

  renderer.setSize(
    window.innerWidth,
    window.innerHeight,
  );
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // );

  // const renderer = new THREE.WebGLRenderer() ;
  // renderer.setSize(
  //   window.innerWidth,
  //   window.innerHeight
  // );

  //These lines clear the HTML body and append the renderer's DOM element (canvas) to the body.
document.body.innerHTML = '' ;
document.body.appendChild(renderer.domElement) ;
  
const geometry = new THREE.BoxGeometry() ; //It creates a BoxGeometry object, representing a cube-shaped geometry.
const material = new THREE.MeshBasicMaterial({ 
  color: 'red' //It creates a MeshBasicMaterial object with a red color for the cube's material.
});
  
  
  camera.position.z = 5 ; //Setting position of camera along z axis.
  const cube = new THREE.Mesh(geometry, material); //Creates a Mesh object by combining the cube geometry and material.
  scene.add(cube) ; //adding cube to scene.

  function animate (){ //Defines the animate function, which is a rendering loop that continuously updates and renders the scene.
    requestAnimationFrame(animate) ; //It uses requestAnimationFrame to call the animate function recursively.
    cube.rotation.x += 0.01; //rotating cube in x and y axis in each iteration.
    cube.rotation.y += 0.01 ;
    renderer.render(scene, camera); //renderer.render(scene, camera) to render the updated scene.
  }

  animate() ; //calling animate function.

  window.addEventListener('resize' ,  //Adds a resize event listener to the window.
  () => {
    renderer.setSize(window.innerWidth, window.innerHeight) //When the window is resized, it updates the renderer's size to match the new dimensions.
    camera.aspect = window.innerWidth / window.innerHeight; //It also updates the camera's aspect ratio and projection matrix to ensure the correct perspective is maintained.
camera.updateProjectionMatrix(); 
  }
  );

  return ( //The component returns null since it does not render any JSX elements.
    null 
  );
}

export default App; //Exports the App component to make it available for use in other files.
