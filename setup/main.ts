import { defineAppSetup } from '@slidev/types'
import { asset } from './asset'
export default defineAppSetup(({ app }) => {
  app.config.globalProperties.$asset = asset
})
