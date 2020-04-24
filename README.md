# ICAV-Tech-challenges
*************************
Technical challenges for Software Engineer position
------------------------------------------------------

## Basics
==========

1. What is "N + 1" problem in REST APIs and how would you solve it?

ANS:- "N + 1" means API is not returning enough information / context to the client. 
So the client application must need more information and make N more requests. 
Basically this will happen when we use RDBMS, because each table relates with some other table.
Querying from one table and N queries for data in a related tables.

By moving away from RDBMS, freed ourselves from the schema limitation. In the NoSQL, we can
store the parent along with ites children. One query turns into n+1 query to return all related documents.

2. When do you stop writing unit tests?

ANS:- 	a). When unit test cover more ethan 90 percentage code.
	b). When code is trivial.
	c). When code pass through the API call.
	d). The code interact with other third-party library.


3. Why would one use monorepos?

ANS:- Monorepo is mean all the software's, shared libraries and services are placed in one location.
Monorepo provides easy access and code reuse, simplify dependency and flexible code ownership.

4. What is Liskov substitution principle?

ANS:- States that every subclass/derived class should be substitutable for their base/parent class.
If S is a sub type of T, the objects of T may be replaced with objects of S without altering any of the
desirable properties.

5. How do you avoid race conditions?

ANS:- 1. We can save the last request and cancel it if next call is same request.
      2. You can create a session object on every new request and save it, 
	and on response check the saved one is still the same as the old one.

6. What is the first thing you do when you encounter a bug?

ANS:- Log the bug in backlog items with priority.

## Future of lawn mowing endeavours
====================================

1. What other features would you like to add?

ANS:-
	a). Authentication - Only register users can view and book the appointment.
	b). Allocation - Dashboard should show the available time on the basis of availability and location
	c). Cost Calculation - System should provides fair cost estimation for their users.
	d). Price Comparision - User can view the rate cards of different lawn cutting servcies.
	e). Notification - System should send notification for user confirmations.


2. How would you handle user authentication?

ANS:- Authentication depends on its particular application requirements.I beleive, we can use JWT Authentication with Passport.js. 
It is familier for NodeJS application and used by many production applications. It provides well known community support.
Straightformard integration to the Nest application using the @nestjs/passport module.

	
3. How would you deploy the solution in an enterprise environment?

Ans:- Build the application using command "npm build".

Follow these steps to deploy application to AWS using Docker.
	1. Creating a Docker file
	2. Copy file from source to destination.
	3. Building a Docker image.
	4. Running a Docker container.
	5. Create Registry(ECR) and upload the app image to it.
		a. Sign in AWS console.
		b. Select the EC2 container service and get started
		c. configure aws
		d. create a new repository and enter a name.
		e. authenticate docker client.
		f. run the docker login.
		g. build the Docker image.
		h. push image to newly craeted AWS repository.
		i. Create a new task definition
		j. Create a cluster.
		k. Craete a service to run it.


mow-the-lawn-app
*************************

Clone:
git clone

Install:
npm install

Run:
npm start

Database:
---------------
MongoDB Compass and database name is "TestDB". You can change the DB configuration in '\src\app.module.ts'

APIs:

METHOD	PATH			DESC
------	----			-----
POST	/user/register		Register a user
POST    /booking/appointment	Booking appointment

APIs format:
---------------
1. /user/register - This api used to register the user. If the user register in first time coupon should be set 'true'.
	{
		"firstName":"Fred",
		"lastName":"John",
		"email":"john.fred@gmail.com",
		"password":"password",
		"contactNo": 1234567890,
		"city":"London",
		"coupon":true
	}
2. /booking/appointment - This api used to booking the appointment. Discount value set based on AreaInMeter value. Please refer \src\schemas\booking.schema.ts
	{
		"contactPerson":"Dinesh",
		"contactNo":9786645624,
		"appointmentDateAndTime":"2020-04-24T06:55:48.771Z",
		"areaInMeter":"10",
		"discount": 0, 
		"coupon":true,
		"userLog":[
        			{
            				"userId" : "5ea1d581792b6c51fcedf539",
            				"updatedAt" : "2020-04-24T06:55:48.771Z"
			        }
			]
	}