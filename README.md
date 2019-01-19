# Safeboda promotion code API
The following API is developed using Node Js and 
MYSQL as the database for the project. To run it first create a MYSQL database
called _'safeboda'_. You can change the database username and password 
in the default.json file in the config folder. The needed tables 
will automatically be generated when you start the node server. 

### Promotion code endpoints

#### Test the validity of the promo code:
**http://.../api/promocode/validate**<br>
Send input values using GET method:
<br>
_"code" - The promotion code can be used_.<br>
_"start" - Start location coordinates of the ride [ Longitude, Latitude]_.<br>
_"destination" - Destination location coordinates of the ride [ Longitude, Latitude]_.<br>
`{
 	"code": "QWE098",
 	"start": [ 36.80728912353516, -1.2732792781077635 ],
 	"destination": [  36.81913375854493, -1.2676158452083304  ] 
 }`

#### Generate/create promo code
**http://.../api/promocode/new**<br>
Send input values using POST method, _'area_id'_  is an optional field :
<br>
_"area_id" - Area in which the promotion code can be used_.<br>
_"amount" - Amount promotion is worth_.<br>
_"active_days" - Amount of days promotion will be active_.<br>
`{
 	"area_id": 3,
 	"amount": 600,
 	"active_days": 15
 }`

#### View/list all promo codes:
**http://.../api/promocode/all**<br>
Get list using GET method.

#### View/list all active promo codes:
**http://.../api/promocode/active**<br>
Get list using GET method.

#### Edit  promo code (activate/deactivate promo code):
**http://.../api/promocode/edit/**<br>
send input values using POST method, _'area_id'_  is an optional field :
<br>
_"area_id" - Area in which the promotion code can be used_.<br>
_"state" - Change promo code to either 'active' or 'inactive' state_.<br>
_"id" - Unique row/record id number in database of promo code to be edited_.<br>
 `{
  	"area_id": 1,
    "state": "active",
    "id": 1
  }`
  
#### View/list all map radius set:
**http://.../api/promocode/radius**<br>
Get list using GET method.

