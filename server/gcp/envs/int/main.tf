


module "build_trigger" {
  source           = "../../modules/build_triggers"
  trigger_location = "global"
  trigger_name     = "deploy-dev"
  repo             = "origins"
  branch_name      = "main"
  project_id       = "projeto-dev-8452-81d5b1be11e0"
  substitutions    = { _PORT : "8080", _NODE_ENV : "development" }
}
