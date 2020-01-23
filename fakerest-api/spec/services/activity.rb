class ApiActivity
  include HTTParty
  base_uri "https://fakerestapi.azurewebsites.net/api"
  headers "Content-Type" => "application/json"

  def self.save(activity)
    post("/Activities", body: activity.to_json)
  end

  def self.find(activity_id)
    get("/Activities/" + activity_id.to_s)
  end

  def self.findAll
    get("/Activities")
  end
end
