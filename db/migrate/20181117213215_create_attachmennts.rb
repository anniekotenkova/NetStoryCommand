class CreateAttachmennts < ActiveRecord::Migration[5.2]
  def change
    create_table :attachmennts do |t|
      t.string :type
      t.string :url

      t.timestamps
    end
  end
end
