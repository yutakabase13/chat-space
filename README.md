# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
#chat space
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups,through: :group_users


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image||string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false,foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|strings|null: false|
### Association
- has_many :users,through: :group_users


## groups_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key:true|

###Association
- belongs_to :group
- belongs_to :user