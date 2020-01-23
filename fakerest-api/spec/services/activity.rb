class ApiActivity
  include HTTParty
  base_uri "https://fakerestapi.azurewebsites.net/api"
  headers "Content-Type" => "application/json"

  def self.save(activity)
    post("/Activities", body: activity.to_json)
  end
end
