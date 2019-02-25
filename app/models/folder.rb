class Folder < ApplicationRecord
  has_many :articles
  has_many :folders, class_name: "Folder", foreign_key: "parent_id"
end
