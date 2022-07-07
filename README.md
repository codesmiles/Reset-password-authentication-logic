# USER RESET PASSWORD implementation on mobile app

## Issues
- User forget password
- User verify token
- User reset password

## solutions
- created endpoints for forget password, verify token and reset password
- set up a schema for token collection
- set up google API Oauth for emailing a token to the user

## Environment variables

- USERTOKEN
- EMAIL
- SECOND_EMAIL
- PASSWORD
- EMAIL_PORT
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_REFRESH_TOKEN

## Pre-Merge Checklist

### Manual

- run $npm install - to install added packages
- run $npm run dev - to start up project
- Have a user already exist in your database

consume API from the following endpoint URL

- http://localhost:3000/forget-password
- http://localhost:3000/verify-token
- http://localhost:3000/:id/reset-password

## PROOF

![forget password](https://user-images.githubusercontent.com/52099372/177762093-56a8a704-321e-4d9c-8f01-c0cd8a57f79b.PNG)
![verify token](https://user-images.githubusercontent.com/52099372/177762548-3a43265d-5e9b-48ef-bf52-6754d2f72d54.PNG)
![reset password](https://user-images.githubusercontent.com/52099372/177763398-cdeb1c84-f86a-4091-b865-ac8ca5729343.PNG)

## DEPENDENT PR

User registration endpoint


If you need any info feel free to contact me at [mikedbchi@gmail.com](mailto:mikedbchi@gmail.com),
or you can also [contact me on github](https://www.github.com/codesmiles),twitter:[@codesmiles](https://twitter.com/codesmiles_) or [linkedin](https://www.linkedin.com/in/michael-nwogu-974547150/)