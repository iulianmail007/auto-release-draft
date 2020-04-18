import * as core from '@actions/core'

import * as event from './event'
import * as version from './version'


// import {wait} from './wait'

export async function run(): Promise<void> {
  try {

    const tag = event.getCreatedTag()


    if (tag && version.isSemVer(tag)) {

    }


    core.setOutput('release-url','https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
