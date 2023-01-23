class User < ApplicationRecord
    has_many :events
    has_many :hosts, through: :events
end
