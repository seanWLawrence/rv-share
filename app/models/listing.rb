class Listing < ApplicationRecord
  # use ActiveStorage api to save image
  has_one_attached :image

  # validate user inputs

  validates :year, presence: true, length: { maximum: 4 }, numericality: { only_integer: true, greater_than: 2010, less_than: 2019 }
  
  validates :model, presence: true, length: { maximum: 50 }

  validates :price_per_day, presence: true, length: { maximum: 5 }, numericality: { only_integer: true, greater_than: 1, less_than: 5000 } 
  
  validates :image, presence: true

  validates :description, presence: true, length: { maximum: 500 }  

  validates :email, presence: true, length: { maximum: 50 }

  validates :city, presence: true, length: { maximum: 50 }

  validates :state, presence: true, length: { maximum: 2 }

  validates :postal_code, presence: true, length: { maximum: 7 }

  validates :rules, length: { maximum: 500 }, allow_blank: true

end
