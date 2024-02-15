import { LegacyRef, forwardRef, useEffect } from "react";
import { PerspectiveCamera } from "three";

interface DomNode {
  current: HTMLCanvasElement;
}

const updateAspectRatio = (ref: DomNode, camera: PerspectiveCamera) => {
  camera.aspect = ref.current.clientWidth / ref.current.clientHeight;
  camera.updateProjectionMatrix();
}

const Canvas = forwardRef(function Canvas({ camera }: { camera: PerspectiveCamera }, ref) {
  const domNode = ref as DomNode;
  useEffect(() => {

    updateAspectRatio(domNode, camera);

    window.addEventListener("resize", () => updateAspectRatio(domNode, camera));

    return () => window.removeEventListener("resize", () => { });

  }, [ref])

  return (
    <>
      <canvas ref={ref as LegacyRef<HTMLCanvasElement>} ></canvas>
    </>
  )
})

export default Canvas;