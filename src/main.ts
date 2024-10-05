import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { handleWindowResize, handleFullScreen, handleFocus } from './events'
import { createModels } from './models'

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
const { rootObject, models } = createModels()
scene.add(rootObject)

// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 20
camera.lookAt(models[0].position)
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

  models.forEach((model) => {
    model.rotation.y = elapsedTime
  })

  rootObject.rotation.z = -elapsedTime / 2
  rootObject.rotation.y = -elapsedTime / 2

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
handleFocus(controls, models)
