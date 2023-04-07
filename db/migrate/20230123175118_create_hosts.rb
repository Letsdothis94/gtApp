class CreateHosts < ActiveRecord::Migration[7.0]
  def change
    create_table :hosts do |t|
      t.string :username
      t.string :email
      t.integer :password
      
      t.timestamps
    end
  end
end
