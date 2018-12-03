class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.integer :design_id
      t.text :title
      t.text :body
      t.string :cover
      t.integer :year_id
      t.boolean :published

      t.timestamps
    end
  end
end
