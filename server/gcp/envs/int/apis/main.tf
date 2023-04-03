resource "google_project_service" "enable_cloud_biuld" {
  project = "mocseven-dev-ji32972480"
  service = "cloudbuild.googleapis.com"
}

resource "google_project_service" "enable_artifact_registry" {
  project = "mocseven-dev-ji32972480"
  service = "artifactregistry.googleapis.com"
}
