import { BoxGeometry, Mesh, MeshBasicMaterial} from "three";



// Cube
export class Cube extends Mesh {
  
  constructor(){
    // Creates Mesh geometry
    const geometry = new BoxGeometry(1, 1, 1);

    // Creates Mesh material
    const material = new MeshBasicMaterial({ color: "#6E897D", wireframe:true });
    super(geometry, material);
  }
}