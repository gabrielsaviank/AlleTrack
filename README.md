# ALLESYS Track

No more problems with Strava, now you have your own customisable app. 

## Contributing 

* WARNING
_I made the mistake of not putting node_modules into my .gitignore, because of this cloning using SSH become painful, I highly recommend you to clone using HTTP because is faster_

* First Step 
_Clone the Repository using git clone ....._

* Adding a new feature
_git checkout -b awesomeFeature_

* Never capitalise first letters. 


### Connecting the Back end to the Front End 

* First Step
_Navigate to the BackEnd Directory and use the command nodemon index.js on the terminal_

* Second Step 
_Navigate to where you extracted the Ngrok File and use the command ./ngrok http: <the port that you selected on the backend> in this case I used the 3000 always have to change the axiox base URL_ 

* Third Step 
_Copy the forwarding port name that ngrok provided to you_

* Fourth Step 
_Paste the name provider into your API file in YOUR FRONT END_

* Fifth Step 
_Navigate to FrontEnd and run the command expo start_ 

### Checklist

#### BackEnd (Track-Server, {NodeJs, Mongo})

* Mongo Wired       => DONE
* Models            => DONE
* Controllers       => DONE
* Routes            => DONE 
* JWT's             => DONE 
* Salting Passwords => DONE
* Test Using Insomnia => DONE
* Mongo Pipeline Filtering => PENDING (Feature that will be implemented later, easy task, done before)

#### FrontEnd (Track, {React Native, Expo Cli})

* Registering Users                 => DONE
* Signin Users                      => DONE
* Persisting Users                  => DONE (Different from SmartBath App here I used JWT instead uuid).
* Destroying Users Sessions         => DONE
* Map Rendering                     => DONE
* Fake Api                          => DONE (I don't want to run around the block everytime to test my Application).
* Poing implementation              => DONE (and moving around according to our api)
* Separate useLocation hook         => DONE (Obs: There are some bugs here. Need to be fixed, NOT COMMITED).
* Disable Location Tracking         => PENDING
* Automatic Disable                 => PENDING
* Track Forms                       => PENDING 
* Polyline on the track             => PENDING
* Auto Authenticate                 => PENDING
* Fetch Created Tracks              => PENDING
* List Created Tracks               => PENDING

#### Future Features? 

* Firebase Notifications (Already done in other apps, so no mistery here or since this is an expo app I can use Expo Notifications (far easier HAHA)).
* More Styling and better layouts.
* More Settings (What? Don't know yet).
* Pictures? Like Strava? (Multer {BackEnd} and React Native Image Picker {FrontEnd}, Already done in other apps).
* Graphs! (Mongo Pipeline Aggregations to separate de periods and use Victory Native for the Grapgs, or I could be ambitious and dissect SVG)

#### New Knowledges? 

* Redux (It's amazing and will definitely be implemented in SmartBath V2)
* Working With Maps in RN. 


###Author 

Gabriel Savian 2020-2021.
