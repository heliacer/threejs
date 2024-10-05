import { Group, PerspectiveCamera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const handleWindowResize = (camera: PerspectiveCamera, renderer: WebGLRenderer, sizes: { width: number, height: number }) => {
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
}

export const handleFullScreen = (canvas: HTMLElement) => {
  window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
      canvas.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  })
}

export const handleFocus = (controls: OrbitControls, models: Group[]) => {
  window.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
      controls.target.copy(models[0].position)
      controls.reset()
      controls.update()
    }
  })
}
