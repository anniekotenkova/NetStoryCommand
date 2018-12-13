class AddVideoToSpam < ActiveRecord::Migration[5.2]
  def change
    add_column :spams, :video, :string
  end
end
