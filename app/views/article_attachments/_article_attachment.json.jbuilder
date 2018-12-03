json.extract! article_attachment, :id, :attachment_id, :article_id, :created_at, :updated_at
json.url article_attachment_url(article_attachment, format: :json)
