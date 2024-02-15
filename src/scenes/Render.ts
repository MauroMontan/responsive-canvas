import { WebGLRenderer } from "three";

export class Render extends WebGLRenderer {

  constructor(target : HTMLCanvasElement) {
    super({
      antialias: true,
      canvas:target,
      alpha:true
    });
   
  }
}