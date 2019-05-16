class AddTitleEnToArticle < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :title_en, :text
  end
end
