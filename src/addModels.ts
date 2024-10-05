import { Object3D } from "three";
import customMesh from "./models/customBuffer";
import simpleBox from "./models/box";
import { createCrossGroup } from "./models/cross";
import randomMesh from "./models/randomBuffer";

export const addModels = (models: { [key: string]: Object3D }) => {
  // Models

  models.randomMesh = randomMesh
  models.customMesh = customMesh
  models.simpleBox = simpleBox
  models.crossCollection = createCrossGroup()
}