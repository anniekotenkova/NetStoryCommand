class AddPartialNameToFolders < ActiveRecord::Migration[5.2]
  def change
    add_column :folders, :partial_name, :string
  end
end
