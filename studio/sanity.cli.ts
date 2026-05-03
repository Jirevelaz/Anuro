import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '05wa67le',
    dataset: 'production'
  },
  deployment: {
    appId: 'qe62tcli2mj7w9wyv3r6yheg',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
