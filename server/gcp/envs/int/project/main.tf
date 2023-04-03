# TODO: Define variables for each env
module "project" {
  source               = "../../../modules/project"
  project_id           = "mocseven-dev-ji32972480"
  project_name         = "mocseven-dev"
  billing_account_name = "Firebase Payment"
}
