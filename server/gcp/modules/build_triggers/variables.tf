variable "project" {
  description = "GCP project"
  type        = string
}

variable "trigger_location" {
  default     = "global"
  description = "Tigger location within the supported GCP range"
  type        = string
}

variable "trigger_name" {
  description = "Name of trigger"
  type        = string
}

variable "branch_name" {
  default     = "main"
  description = "Branch that build trigger will listen to"
  type        = string
}

variable "repo" {
  description = "Source repository"
  type        = string
}

variable "substitutions" {
  description = "Source repository"
  type        = map(any)
}

variable "build_file" {
  default     = "cloudbuild.yaml"
  description = "Name of build yaml file"
  type        = string
}
