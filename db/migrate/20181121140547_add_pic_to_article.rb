class AddPicToArticle < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :pic, :string
  end
end
