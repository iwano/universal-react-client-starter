const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
const appIncludes = [resolveApp('src'), resolveApp('../core/src')]

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin',
  )
  config.module.rules[0].include = appIncludes
  config.module.rules[1] = null
  config.module.rules[2].oneOf[1].include = appIncludes
  config.module.rules = config.module.rules.filter(Boolean)
  return config
}
