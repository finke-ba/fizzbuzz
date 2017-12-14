# FizzBuzz
FizzBuzz game with REST API and WebUI

## Run Application

For build application with tests

     $ maven clean install

For launch application

     $ maven spring-boot:run

After that go to a browser at [http://localhost:8080](http://localhost:8080).

### Tests
In this project are presented both backend and frontend unit tests.
Frontend tests runs with Karma in Chrome browser. So, you need to have this browser on your 
computer in order to run tests. But also you could change browser in karma.conf.js file and
add karma-launcher for your browser in package.json.

### Documentation
Documentation based on spring rest docs. It is auto generated docs with some manual comments.
Controller unit tests are perform the role of manual comments.

After launch maven task

     $ maven package

You can find api-doc.html file in target\classes\docs package.
And also you can find this file on frontend in Documentation menu.

### What can be improved
* Building project only by maven, without nodejs(Can`t use karma from Maven webjars due to errors with this package).
* Save evaluated numbers to cache or to DB to prevent calculating already existing values. Don`t do this because in 
current case it is more productive to calculate every time than save to DB or cache.
* Fix css styles for Documentation menu.
