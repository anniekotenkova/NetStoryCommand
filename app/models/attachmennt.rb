class Attachmennt < ApplicationRecord
  has_many :article_attachments
  has_many :article, through: :article_attachments
  mount_uploader :cover, CoverUploader
end
