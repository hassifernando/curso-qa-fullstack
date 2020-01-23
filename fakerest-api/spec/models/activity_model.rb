class ActivityModel
  attr_accessor :ID, :Title, :DueDate, :Completed

    def to_hash
        {
            ID: @ID,
            Title: @Title,
            DueDate: @DueDate,
            Completed: @Completed
        }

    end

end
