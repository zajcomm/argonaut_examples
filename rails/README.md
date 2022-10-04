# README

## Ruby version

v3.1.2

## System dependencies

ruby
rails
gem
foreman

`bundle install` will automatically install all other dependencies.

## Sidekiq

- Sidekiq job can be configured in app/sidekiq/hard_job.rb

- Sidekiq requires Redis to be available and running on its default port 6379. Redis url can be overridden with the env variable `REDIS_URL`
  Example: `REDIS_URL=redis://redis-instance:6379/1`

- Sidekiq's web UI is available at <domain>/sidekiq

## Deployment instructions

- Deploy redis in your cluster using Argonaut's Custom App Deployment feature. Use [https://artifacthub.io/packages/helm/bitnami/redis](https://artifacthub.io/packages/helm/bitnami/redis)
