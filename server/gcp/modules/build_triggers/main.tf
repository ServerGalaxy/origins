
resource "google_cloudbuild_trigger" "gcp_trigger" {
  location = var.trigger_location
  name     = var.trigger_name
  project  = var.project


  trigger_template {
    branch_name = var.branch_name
    repo_name   = var.repo
  }

  substitutions = var.substitutions
  # Note: substitution vars need to be prefixed with _
  # substitutions = {
  #   _FOO = "bar"
  #   _BAZ = "qux"
  # }

  filename = var.build_file
}

