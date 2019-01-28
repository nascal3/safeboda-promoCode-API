# Safeboda promotion code API
The following API is developed using Node Js and 
MYSQL as the database for the project. To run it first create a MYSQL database
called _'safeboda'_. You can change the database name, username and password 
in the default.json file in the config folder. The needed tables 
will automatically be generated when you start the node server. 
<p>
A sample SQL database with some values already inserted is under the database folder. 
You may import it to your databse to test run the API project.  
</p>

### Promotion code endpoints

#### Test the validity of the promo code:
**http://.../api/promocode/validate**<br>
Send input values using GET method.
<br>
_"code" - The promotion code can be used_.<br>
_"start" - Start location coordinates of the ride [ Longitude, Latitude]_.<br>
_"destination" - Destination location coordinates of the ride [ Longitude, Latitude]_.<br>
`{
 	"code": "QWE098",
 	"start": [ 36.80728912353516, -1.2732792781077635 ],
 	"destination": [  36.81913375854493, -1.2676158452083304  ] 
 }`

#### Generate/create promo code:
**http://.../api/promocode/new**<br>
Send input values using POST method, _'area_id'_  is an optional field.
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
**http://.../api/promocode/edit/1**<br>
Send input values using POST method, _'area_id'_  is an optional field.
<br>
_"area_id" - Area in which the promotion code can be used_.<br>
_"state" - Change promo code to either 'active' or 'inactive' state_.<br>
 `{
  	"area_id": 3,
    "state": "active"
  }`
  
#### View/list all map radius set:
**http://.../api/promocode/radius**<br>
Get list using GET method.

### Map radius endpoints

#### Create new map location radius:
**http://.../api/radius/new**<br>
Send input values using POST method.
<br>
_"area_name" - Area name in which the promotion code can be used_.<br>
_"radius" - The polygon coordinate of the area radius_.<br>
<br>
 `{
  	"area_name": "Nairobi Area",
  	"radius": [
                    [
                       36.75598,
                       -1.21925
                    ],
                    [
                       36.74644,
                       -1.21005
                    ],
                    [
                       36.74858,
                       -1.20017
                    ]
                 ]
  }`
  
  #### Edit/configure a map location radius:
  **http://.../api/radius/edit/3**<br>
  Send input values using POST method,  _'area_name'_  is an optional field.
  <br>
  _"area_name" - Area name in which the promotion code can be used_.<br>
  _"radius" - The polygon coordinate of the area radius_.<br>
  <br>
  `{
   	"area_name": "Ruaka Area",
   	"radius": [
                 [
                    36.75598,
                    -1.21925
                 ],
                 [
                    36.74644,
                    -1.21005
                 ],
                 [
                    36.74858,
                    -1.20017
                 ]
              ]    
   }`
   
 ### Run tests
 
 To run tests on the project run on terminal the `npm jest`   command. Make sure the server 
 is connected to the database to run the tests.
