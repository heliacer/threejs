import { Object3D } from "three";
import customMesh from "./models/customBuffer";
import simpleBox from "./models/box";
import { createCrossGroup } from "./models/cross";
import randomMesh from "./models/randomBuffer";

export const addModels = (models: { [key: string]: Object3D }) => {
  // Models

  models.simpleBox = simpleBox
  models.randomMesh = randomMesh
  models.customMesh = customMesh
  models.crossCollection = createCrossGroup()
}