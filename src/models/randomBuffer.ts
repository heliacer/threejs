import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from "three";


const geometry = new BufferGeometry()

const count = 50
const size = 5

const positionsArray = new Float32Array(3 * 3 * count) // Each triangle of 3 vertecies & 3 coordinates

positionsArray.forEach((_value, index) => {
  positionsArray[index] = (Math.random() - 0.5) * size // center it
})

console.log(positionsArray)


const positionsAttribute = new BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)

const material = new MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
const randomMesh = new Mesh(geometry, material)

export default randomMesh