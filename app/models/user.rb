class User < ApplicationRecord
    has_many :events
    has_many :hosts, through: :events

    # validates :email, presence: true, uniqueness: true
    # validates :password, presence: true, length: { in 3..20 }
end
