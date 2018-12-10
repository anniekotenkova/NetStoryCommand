class Article < ApplicationRecord
  has_many :article_attachments
  has_many :attachments, through: :article_attachments
  mount_uploader :pic, PicUploader
  #belongs_to :design
  #belongs_to :year
  belongs_to :folderfolder
end
