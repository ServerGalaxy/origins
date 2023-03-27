

# NOTE: to create project you must be able to enable billing 
data "google_billing_account" "acct" {
  display_name = "Firebase Payment"
  open         = true
}

resource "google_project" "projeto" {
  name            = "projeto-dev"
  project_id      = "projeto-dev-8452-81d5b1be11e0"
  billing_account = data.google_billing_account.acct.id
}

# NOTE: project var is for the project id not the name
resource "google_project_service" "enable_cloud_biuld" {
  project = "projeto-dev-8452-81d5b1be11e0"
  service = "cloudbuild.googleapis.com"
}
