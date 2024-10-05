import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { gui } from "../gui";

const geometry = new BoxGeometry(1, 1, 1, 2, 2, 2)
const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true })
const simpleBox = new Mesh(geometry, material)


gui.add(simpleBox.rotation, 'y', 0, Math.PI / 2, 0.1)

export default simpleBox