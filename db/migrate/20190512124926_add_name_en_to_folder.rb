class AddNameEnToFolder < ActiveRecord::Migration[5.2]
  def change
    add_column :folders, :name_en, :string
  end
end
