class CreateFolders < ActiveRecord::Migration[5.2]
  def change
    create_table :folders do |t|
      t.string :type
      t.string :name
      t.string :icon

      t.timestamps
    end
  end
end
