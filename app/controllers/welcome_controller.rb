class WelcomeController < ApplicationController
  def index
    #@folders = Folder.all.reject { |f| f.parent_id == "" || f.parent_id == nil }
    @folders = Folder.where(parent_id: nil)

    respond_to do |format|
      format.html
      format.js
    end
  end
end
