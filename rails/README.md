# README

Welcome to the example rails application by Argonaut. Follow the instructions below and you will get your rails app up and running in no time.

## Ruby version

v3.1.2

## System dependencies

- ruby
- rails
- gem
- foreman

- The `bundle install` command, included in the Dockerfile, will automatically install all other dependencies.

## Deployment instructions

- Deploy redis in your cluster using Argonaut's Custom App Deployment feature. Use [https://artifacthub.io/packages/helm/bitnami/redis](https://artifacthub.io/packages/helm/bitnami/redis). Set `auth.enabled` and `auth.sentinel` in the values.yaml to `false`.
![image](https://user-images.githubusercontent.com/9110203/193815264-bef2218c-4929-441d-911b-4e3fa5854738.png)

- We are using foreman to run our app and by default it listens on port `5000`. So, in Argonaut we need to specify that under Network Services section.

- The UI to launch jobs is available at `<domain>/welcome/index`

![image](https://user-images.githubusercontent.com/9110203/193814855-f1e3422e-53ee-48c9-960c-8078455f03d4.png)
![image](https://user-images.githubusercontent.com/9110203/193814875-13613315-3030-4077-8993-af3007545517.png)
![image](https://user-images.githubusercontent.com/9110203/193814862-cef2feb9-bc30-4867-b1cd-c813b3b3f08f.png)


## Sidekiq

- Sidekiq jobs can be configured in `app/sidekiq`

- Sidekiq requires Redis to be available and running on its default port 6379. Redis url can be overridden with the env variable `REDIS_URL`
  Example: `REDIS_URL=redis://redis-master:6379/1`

- Sidekiq's web UI is available at `<domain>/sidekiq`

## Rake

- It is convention to put rake tasks in `lib/tasks` in rails projects.

- The rake task included with the examples here (`lib/tasks/orange.rake`) prints a message in the console. The task is executed through sidekiq but can also be executed using foreman run.

- To observe the task being run, open pod logs in your cluster for the rails app and click on the `"Launch Rake Job"` button.

## Why Procfile

- We need to run rails server and sidekiq on different threads which is why we use foreman to launch two different services.
