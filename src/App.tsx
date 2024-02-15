import { useEffect, useRef } from 'react';
import './App.css'
import { HemisphereLight, AmbientLight, Scene, PerspectiveCamera } from 'three';
import { Cube } from './MeshObjects/Cube';

import { Render } from './scenes/Render';
import Canvas from './components/Canvas';


function App() {

  const canva = useRef<HTMLCanvasElement>(null);

  const camera = new PerspectiveCamera(50, 0, 0.5, 1000);

  useEffect(() => {

    const scene = new Scene();

    const render = new Render(canva.current!);

    render.setPixelRatio(window.devicePixelRatio);

    camera.position.z = 6;


    const cube = new Cube();

    scene.add(cube);

    // iluminación 
    scene.add(new AmbientLight("#ffffff", 1))
    scene.add(new HemisphereLight("#ffffff", 1))

    let frameReq = 0;

    (function animate() {
      cube.rotation.z += 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.y -= 0.0025;

      render.render(scene, camera);

      camera.updateProjectionMatrix();

      frameReq = window.requestAnimationFrame(animate);
    })();

    return () => {
      window.cancelAnimationFrame(frameReq);
      render.dispose();
    }
  }, [])

  return (
    <>
      <Canvas camera={camera} ref={canva} ></Canvas>
    </>
  )
}

export default App