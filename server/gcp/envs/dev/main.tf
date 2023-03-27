# module "run" {
#   source = "../../modules/run"
# }

module "build_trigger" {
  source           = "../../modules/build_triggers"
  trigger_location = "global"
  trigger_name     = "deploy-dev"
  repo             = "origins"
  branch_name      = "main"
  project          = "origins-dev"
  substitutions    = { _PORT : "8080", _NODE_ENV : "development" }
}
