host1 = Host.create(username: 'hostOne', email: 'host1@email.com', password: 12345)
user1 = User.create(email: 'userOne@email.com', password: 12345)
event1 = Event.create(title: 'Coding & Cookies', date: '2023-01-01', about:"We get together to talk about code and eat cookies", location: '11 Broadway 2nd floor, New York, NY 10004', going: 1, user_id: 1)
