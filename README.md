# Frontend Coding Test: serological-testing v0.0.0

## Video

[Video-if suffers package installing issue](too large will be send by email)

1. For simplicity, I record the reult with my sample credentials in the video.
2. Also, I delete the keys/secret in the video.

## Introduction

1. After logging in with your Google account, you will be redirected to the query webpage.
2. You can also skip the logging part and visit as a user. As a guest, you can get the result from the first 100 results from the Device API. All the data fields and values are stored in a dynamic table.
3. Enter the sample_id(i.e., C0048) and you will get the exact query from the API.
   (Assuming that the users will always enter the correct result or the field is empty).
4. Hit the add button and you can increase the results limit by 100 each time, up to 10,000.
5. You can also sort the data by hitting and sort label, I remain it as a default value at this stage.
6. As for UI design, I developed two different webpages for essential routing, as well as footers with copyright disclaimer and data source.

### references:

1. COVID-19 Serological Testing Evaluations: https://open.fda.gov/apis/device/covid19serology/

#### important !

2. Get the authentication key: https://open.fda.gov/apis/authentication/

#### to expand the request limit per day

3. Searchable Fields: file:///Users/yue/Downloads/fields.pdf

## Scripts

1. Get into the directory `cd v0.0.0`
2. Run `yarn start`

## Objectives

1. As a user, I can have a brief introduction of the COVID-19 serological tests.
2. As a user, I can do basic search in the table.
3. As a user, I can use a filter in the table.
4. As a user, I can login in with the social media account.
5. As a developer, I can do coverage test for the main features.

## Technical Details

### frontend framework

1. React16 with Hooks and reusable components
2. Material-UI for CSS styling

### sub-packages

1. react-router-dom
2. @material-ui/core
3. react-google-login

### installation

1. Run `npm i`
2. Add your API_KEY in `./src/pages/Dashboard`file line 17 (mandantory)
   [get api credential](https://open.fda.gov/apis/authentication/)
3. Add your credential info at Login.js and Logout.js(optional)
   [get google credential](https://console.developers.google.com/apis/credentials?pli=1)

### testing

1. Run `yarn test` to test the author

## What's next? - new version at branch v1.0.0

### How to improve and support the backend by building a secure and efficiency node.js and Django server

### How to refractor the code for by React-Saga in a large scale system?

### How to improve the proformance by applying necessary algorithms in searching and sorting?
