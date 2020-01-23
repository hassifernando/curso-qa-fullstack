describe "post" do
  context "when add new activity" do
    before do
      @new_activity = build(:activity).to_hash
      @result = ApiActivity.save(@new_activity)
    end

    it { expect(@result.response.code).to eql "200" }
  end

  context "when add new activity with ID out of format" do
    before do
      @new_activity = build(:id_out_format).to_hash
      @result = ApiActivity.save(@new_activity)
    end

    it { expect(@result.response.code).to eql "200" }
    it { expect(@result.parsed_response["ID"]).to eql 0 }
  end
end
