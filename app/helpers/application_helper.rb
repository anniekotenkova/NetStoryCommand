module ApplicationHelper
  def current_url
    "http://#{request.host + request.fullpath}"
  end
end
