class AddPartialNameToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :partial_name, :string
  end
end
