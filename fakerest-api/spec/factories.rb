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

  factory :activity_exist, class: ActivityModel do
    ID { 29 }
    Title { "Activity 29" }
    DueDate { "2020-01-23" }
    Completed { false }
  end

  factory :activity_not_exist, class: ActivityModel do
    ID { 31 }
    Title { "Activity 31" }
    DueDate { "2020-01-23" }
    Completed { true }
  end
end
