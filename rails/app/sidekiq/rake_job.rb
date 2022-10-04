class RakeJob
  include Sidekiq::Job

  queue_as :default

  def perform(*args)
    RubyOnRails::Application.load_tasks
    Rake::Task['orange'].invoke
  end
end
