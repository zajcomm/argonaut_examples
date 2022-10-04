require 'sidekiq/web'

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  mount Sidekiq::Web => '/sidekiq'

  get "welcome/index"
  post "welcome/trigger_job"
  post "welcome/rake_job"

  # Defines the root path route ("/")
  # root "articles#index"
end
