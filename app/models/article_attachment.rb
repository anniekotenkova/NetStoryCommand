class ArticleAttachment < ApplicationRecord
  belongs_to :article
  has_many :attachments
end
