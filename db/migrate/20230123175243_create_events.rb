class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.integer :date
      t.string :about
      t.string :location
      t.integer :going, default: 1
      t.integer :host_id
      t.integer :user_id
      
      t.timestamps
    end
  end
end
