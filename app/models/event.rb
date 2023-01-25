class Event < ApplicationRecord
    # belongs_to :host
    belongs_to :user

    validates :title, presence: true, length: { minimum: 6}
    validates :about, presence: true, length: { in: 10..200 }
    validates :location, presence: true
    # validates :date, format: { with: /\d{2}\/\d{2}\/\d{4}/ }
    validates :date, numericality: { only_integer: true}, length: { is: 8 }
end
