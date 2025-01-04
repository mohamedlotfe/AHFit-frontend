import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "ys2djas1",
  dataset: "production",
  title: "Ahmed Hussien",
  apiVersion: "2024-12-28",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config