import { BoxGeometry, Color, Mesh, MeshBasicMaterial } from "three";
import { gui } from "../gui";
import gsap from "gsap";

const geometry = new BoxGeometry(1, 1, 1, 2, 2, 2)
const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true })
const simpleBox = new Mesh(geometry, material)

const debugObject: any = {}

gui.title('Simple Cube')
gui.add(simpleBox.rotation, 'x', 0, Math.PI, Math.PI / 8).name('X-Rotation')
gui.add(simpleBox.rotation, 'y', 0, Math.PI, Math.PI / 8).name('Y-Rotation')
gui.add(simpleBox.rotation, 'z', 0, Math.PI, Math.PI / 8).name('Z-Rotation')
gui.add(simpleBox, 'visible')
gui.add(material, 'wireframe')

debugObject.spin = () => {
  gsap.to(simpleBox.rotation, { duration: 1, y: simpleBox.rotation.y + Math.PI * 2 })
}

debugObject.reset = () => {
  simpleBox.position.normalize()
  simpleBox.rotation.set(0, 0, 0)
}

gui
  .addColor(material, 'color')
  .onChange((value: Color) => {
    material.color.set(value.getHex())
  })

gui.add(debugObject, 'spin')
gui.add(debugObject, 'reset')


export default simpleBox

