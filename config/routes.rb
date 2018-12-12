Rails.application.routes.draw do
  # get 'welcome/index'
  root 'articles#index'
  resources :spams
  resources :article_attachments
  resources :attachmennts
  resources :years
  resources :articles
  resources :designs


  get 'designs/index' do
resources :designs
end

root 'designs#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
