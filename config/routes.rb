Rails.application.routes.draw do
  scope "/:locale", locale: /ru|en/ do
      resources :spams
      resources :articles

      resources :folders do
        member do
          get :back
        end
      end

    resources :subscriptions, only: [:new, :create]

    #root 'folders#index'
    root 'subscriptions#new'
  end

  #root 'folders#index'
  root 'subscriptions#new'
end
