import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from "three";

/*
  x, y, z,
  x, y, z,
  x, y, z,

  -> Triangle
*/

const positionsArray = new Float32Array([
  0, 0, 1,
  0, 1, 1,
  1, 0, 0,
])

const positionsAttribute = new BufferAttribute(positionsArray, 3)
const geometry = new BufferGeometry()
geometry.setAttribute('position', positionsAttribute)

const material = new MeshBasicMaterial({ color: 0xffff00, wireframe: true })
const customMesh = new Mesh(geometry, material)

export default customMesh