
module "prvder" {
  source = "../.."

}

resource "google_cloudbuild_trigger" "filename-trigger" {
  location = "global"
  name     = "terraform-build-trigger"


  trigger_template {
    branch_name = "main"
    repo_name   = "loop_3"

  }

  substitutions = {
    _FOO = "bar"
    _BAZ = "qux"
  }

  filename = "cloudbuild.yaml"
}

