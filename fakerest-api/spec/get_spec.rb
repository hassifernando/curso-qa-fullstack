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

  context "validate type according to documentation" do    
    
    let(:result) { ApiActivity.findAll }
    
      it 'validate types' do

          expect(result.parsed_response).to be_a_kind_of(Array)
          result.parsed_response.each do |activity|
            expect(activity).to be_a_kind_of(Object)
            expect(activity["ID"]).to be_a_kind_of(Integer)
            expect(activity["Title"]).to be_a_kind_of(String)
            expect(activity["DueDate"]).to be_a_kind_of(String)
          end
      end
  end
end
