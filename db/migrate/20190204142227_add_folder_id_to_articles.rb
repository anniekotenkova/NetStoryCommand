class AddFolderIdToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :folder_id, :integer
  end
end
