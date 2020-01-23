describe "get" do
  context "when i search info about activity id exists" do
    
    let(:activity) { build(:activity_exist) }
    let(:result) { ApiActivity.find(activity.ID) }
    
    it { expect(result.response.code).to eql "200" }
    it { expect(result.parsed_response["ID"]).to eql activity.ID}
    it { expect(result.parsed_response["Title"]).to eql activity.Title}
    
  end

  context "when i search info about activity not exists" do
    let(:activity) { build(:activity_not_exist) }
    let(:result) { ApiActivity.find(activity.ID) }

    it { expect(result.response.code).to eql "404" }
    
  end
end
