variable "project_id" {
  description = "GCP project id"
  type        = string
}

variable "repo_id" {
  description = "Artifact repository id"
  type        = string
}

variable "repo_description" {
  description = "Describe artifact repostitory"
  type        = string
}
variable "repo_format" {
  default     = "DOCKER"
  description = "Artifact repo format"
  type        = string
}

variable "location" {
  description = "Repo location"
  type        = string
}
