import { DodecahedronGeometry, Group, Mesh, MeshBasicMaterial } from 'three'

const makeGeometry = (x: number, y: number, z: number) => {
  const mesh = new Mesh(
    new DodecahedronGeometry(1, 0),
    new MeshBasicMaterial({ color: Math.floor(Math.random() * 0xffffff), wireframe: true })
  )
  mesh.position.set(x, y, z)
  return mesh
}

const createCross = () => {
  const model = new Group().add(
    makeGeometry(2, 0, 0),
    makeGeometry(0, 0, 0),
    makeGeometry(-2, 0, 0),
    makeGeometry(0, 2, 0),
    makeGeometry(0, -2, 0),
    makeGeometry(0, 0, 2),
    makeGeometry(0, 0, -2)
  )
  return model
}

export const createCrossGroup = () => {
  const positions = [
    [0, 0, 0], [10, 0, 0], [0, 10, 0], [0, 0, 10],
    [-10, 0, 0], [0, -10, 0], [0, 0, -10]
  ]

  const modelGroup = new Group()

  positions.forEach(([x, y, z]) => {
    const model = createCross()
    model.position.set(x, y, z)
    modelGroup.add(model)
  })
  return modelGroup
}