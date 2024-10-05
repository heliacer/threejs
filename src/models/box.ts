import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

const geometry = new BoxGeometry(1, 1, 1, 2, 2, 2)
const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true })
const simpleBox = new Mesh(geometry, material)

export default simpleBox