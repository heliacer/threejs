import { Clock, Object3D, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { handleWindowResize, handleFullScreen, handleFocus } from './events'
import { createCrossGroup } from './models/cross'
import simpleBox from './models/box'

// Canvas
const canvas = document.querySelector('canvas.webgl') as HTMLElement

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Scene
const scene = new Scene()

// Models
const models: { [key: string]: Object3D } = {}

models.simpleBox = simpleBox
models.crossCollection = createCrossGroup()

Object.values(models).forEach((model, index) => {
  model.position.x += index * 30
  scene.add(model)
})

// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 5, 10)
camera.lookAt(models.simpleBox.position)
scene.add(camera)

// Renderer
const renderer = new WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Clock
const clock = new Clock()

// Animation Loop
const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  models.crossCollection.children.forEach((model) => {
    model.rotation.y = elapsedTime
  })

  models.crossCollection.rotation.z = -elapsedTime / 2
  models.crossCollection.rotation.y = -elapsedTime / 2

  // Render
  controls.update()
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()

// Events
handleWindowResize(camera, renderer, sizes)
handleFullScreen(canvas)
handleFocus(controls, models.simpleBox)
