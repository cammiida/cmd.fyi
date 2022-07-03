terraform {
  required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket = "cmd.fyi-tfstate"
    key = "cmd.fyi.tfstate"
    region = "eu-west-1"
    encrypt = true
    dynamodb_table = "cmd.fyi-tf-state-lock"
  }

  required_version = ">= 1.0.0"
}


# Configure the AWS Provider
provider "aws" {
  region = "eu-west-1"
  allowed_account_ids = ["792810412032"]

  default_tags {
    tags = {
      terraform   = "true"
      environment = local.environment
      application = local.application_name
    }
  }
}

locals {
  environment      = "prod"
  application_name = "cmd.fyi"
}