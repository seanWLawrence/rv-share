Rails.application.routes.draw do
  resources :listings
  get 'listings', to: 'listings#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "listings#index"
end
