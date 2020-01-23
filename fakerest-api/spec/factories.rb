require_relative "models/activity_model"
FactoryBot.define do
  factory :activity, class: ActivityModel do
    ID { "31" }
    Title { "Activity 31" }
    DueDate { "2020-01-23" }
    Completed { "true" }
  end

  factory :id_out_format, class: ActivityModel do
    ID { "XXXXXXXXX" }
    Title { "Activity XXXXX" }
    DueDate { "2020-01-23" }
    Completed { "true" }
  end
end
