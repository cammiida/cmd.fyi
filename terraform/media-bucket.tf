resource "aws_s3_bucket" "media-bucket" {
  bucket = "${local.application_name}-media"
}

resource "aws_s3_bucket_policy" "allow_public_read_access" {
    bucket = aws_s3_bucket.media-bucket.id
    policy = data.aws_iam_policy_document.allow_public_read_access.json
}

data "aws_iam_policy_document" "allow_public_read_access" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    effect = "Allow"

    actions = [
      "s3:GetObject",
      "s3:ListBucket",
    ]

    resources = [
      aws_s3_bucket.media-bucket.arn,
      "${aws_s3_bucket.media-bucket.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_versioning" "enable-versioning" {
    bucket = aws_s3_bucket.media-bucket.id
    versioning_configuration {
        status = "Enabled"
    }
}