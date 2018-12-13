class AddCoverToAttachmennt < ActiveRecord::Migration[5.2]
  def change
    add_column :attachmennts, :cover, :string
  end
end
