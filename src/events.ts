import { Object3D, PerspectiveCamera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const handleWindowResize = (camera: PerspectiveCamera, renderer: WebGLRenderer, sizes: { width: number, height: number }) => {
  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

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

export const handleFocus = (controls: OrbitControls, models: Object3D[]) => {
  window.addEventListener('keydown', (event) => {
    if (event.key === 'f') {
      controls.reset()
      controls.target.copy(models[0].position)
      controls.update()
    }
  })
}
