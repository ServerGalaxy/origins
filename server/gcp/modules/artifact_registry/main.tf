

# artifactregistry.googleapis.com
# TODO: Decide when and where to enable services
resource "google_project_service" "enable_cloud_biuld" {
  project = var.project_id
  service = "artifactregistry.googleapis.com"
}

resource "google_artifact_registry_repository" "artifact-repo" {
  project       = var.project_id
  location      = var.location
  repository_id = var.repo_id
  description   = var.repo_description
  format        = var.repo_format
}
