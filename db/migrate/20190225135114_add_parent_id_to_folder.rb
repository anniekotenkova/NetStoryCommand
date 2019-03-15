class AddParentIdToFolder < ActiveRecord::Migration[5.2]
  def change
    add_column :folders, :parent_id, :integer
  end
end
