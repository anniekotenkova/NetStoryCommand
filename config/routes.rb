Rails.application.routes.draw do
  resources :spams
  resources :articles

  resources :subscriptions, only: [:new, :create]

  resources :folders do
    member do
      get :back
    end
  end

  #root 'folders#index'
  root 'subscriptions#new'
end
