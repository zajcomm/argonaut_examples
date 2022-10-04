class WelcomeController < ApplicationController
  def trigger_job
    HardJob.perform_async('bob', 5)
  end
end