class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :year
      t.string :make
      t.string :model
      t.string :description
      t.integer :price_per_day
      t.string :email
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :rules

      t.timestamps
    end
  end
end
