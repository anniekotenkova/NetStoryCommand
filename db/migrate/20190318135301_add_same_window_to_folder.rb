class AddSameWindowToFolder < ActiveRecord::Migration[5.2]
  def change
    add_column :folders, :same_window, :boolean, default: false
  end
end
