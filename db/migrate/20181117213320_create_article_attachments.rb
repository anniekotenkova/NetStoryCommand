class CreateArticleAttachments < ActiveRecord::Migration[5.2]
  def change
    create_table :article_attachments do |t|
      t.integer :attachment_id
      t.integer :article_id

      t.timestamps
    end
  end
end
