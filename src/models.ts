import { BoxGeometry, Group, Mesh, MeshBasicMaterial } from 'three'

const makeBox = (x: number, y: number, z: number) => {
  const mesh = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: Math.floor(Math.random() * 0xffffff) })
  )
  mesh.position.set(x, y, z)
  return mesh
}

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

export const createModels = () => {
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

  return { rootObject, models }
}
