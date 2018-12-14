class Article < ApplicationRecord
  has_many :article_attachments
  has_many :attachments, through: :article_attachments
  mount_uploader :pic, PicUploader
  belongs_to :folderfolder
  #belongs_to :design
  #belongs_to :year
<<<<<<< HEAD
  #belongs_to :folderfolder
=======
>>>>>>> d3de11b225a71fc4930756a26356a779443fe11a
end
