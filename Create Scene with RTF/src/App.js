import logo from './logo.svg'; 
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber'; //This line 
//imports the Canvas component and the useFrame hook. 
import { useRef } from 'react'; //useRef allows to create a mutable
//reference to a value that persists across re-renders of the component.
const Box = () => { //This defines a functional component named Box. 
  //It represents a 3D box rendered in the scene.
  const ref = useRef();  //This reference will be used to access and 
  //manipulate the 3D box object.

  useFrame(state => { //Inside the function, we update the rotation of 
    //the box to create a rotating effect.
    ref.current.rotation.x += 0.01; 
    ref.current.rotation.y += 0.01;
  })
 return ( //JSX code returned by the Box component. It represents the 
  //3D box rendered in the scene.
    <mesh ref={ref}>
      <boxBufferGeometry/> 
      <meshBasicMaterial color="blue"/> 
    </mesh>
  )
}
function App(){
  return (
    <div style = {{height : '100vh', width: '100vw'}}>
      <Canvas style = {{background:'black'}}> 
        <Box/>
      </Canvas>
    </div>
  ) ; //The style prop sets the background color of the canvas to black.
}
 export default App; 

