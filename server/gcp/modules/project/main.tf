

# NOTE: to create project you must be able to enable billing 
# current: display_name = "Firebase Payment"
data "google_billing_account" "acct" {
  display_name = var.billing_account_name
  open         = true
}

resource "google_project" "gcp_project" {
  name            = var.project_name
  project_id      = var.project_id
  billing_account = data.google_billing_account.acct.id
}


