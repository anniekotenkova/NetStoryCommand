class AddPreviewPartialToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :preview_partial, :string
  end
end
