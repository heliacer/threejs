import { BoxGeometry, Clock, Group, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

// Canvas
const canvas = document.querySelector('canvas.webgl') as HTMLElement

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}


window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
})

// Focus
window.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    controls.target.copy(models[0].position)
    controls.reset()
    controls.update()
  }
})


// Scene
const scene = new Scene()

// Object
const makeBox = (x: number, y: number, z: number) => {
  const mesh = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: Math.floor(Math.random() * 0xffffff) })
  )
  mesh.position.set(x, y, z)
  return mesh
}

// Create models
const createModel = () => {
  const model = new Group().add(
    makeBox(2, 0, 0),
    makeBox(0, 0, 0),
    makeBox(-2, 0, 0),
    makeBox(0, 2, 0),
    makeBox(0, -2, 0),
    makeBox(0, 0, 2),
    makeBox(0, 0, -2)
  )
  return model
}

// Models array
const models: Group[] = []
const positions = [
  [0, 0, 0], [10, 0, 0], [0, 10, 0], [0, 0, 10],
  [-10, 0, 0], [0, -10, 0], [0, 0, -10]
]

const rootObject = new Group()

positions.forEach(([x, y, z]) => {
  const model = createModel()
  model.position.set(x, y, z)
  models.push(model)
  rootObject.add(model)
})

scene.add(rootObject)

// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 20
camera.lookAt(models[0].position)
scene.add(camera)


// Controls

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new Clock()

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