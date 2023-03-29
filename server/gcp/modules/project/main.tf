

# NOTE: to create project you must be able to enable billing 
data "google_billing_account" "acct" {
  display_name = "Firebase Payment"
  open         = true
}

resource "google_project" "projeto" {
  name            = var.project_name
  project_id      = var.project_name
  billing_account = data.google_billing_account.acct.id
}


