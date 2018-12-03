class CreateSpams < ActiveRecord::Migration[5.2]
  def change
    create_table :spams do |t|
      t.string :image

      t.timestamps
    end
  end
end
