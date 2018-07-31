json.extract! listing, :id, :model, :year, :price_per_day, :rules, :email, :street_adress, :city, :state, :postal_code, :created_at, :updated_at
json.url listing_url(listing, format: :json)
