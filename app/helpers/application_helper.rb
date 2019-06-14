module ApplicationHelper
  def current_url
    "http://#{request.host}:#{request.port.to_s + request.fullpath}"
  end
end
