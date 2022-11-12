# Data

## Data layer

- ui

  - isLoading: boolean
  - showModal: boolean
  - modalInformation
    - isError: boolean
    - modalText: string

- user

  - isLogged: boolean
  - token: string
  - username: string
  - id: string

- profiles
  - list: array
  - filterBy: all | friends | enemies

## Data modifications

- ui
  - showLoading
  - hideLoading
  - showModal - payload with type and text
  - hideModal
- user
  - loginUser
  - logoutUser
- profiles
  - changeFilter
  - loadProfiles
  - loadProfileById
  - addToFriends
  - addToEnemies
  - editProfile

---

# Components

## App

### Show data

- show register form on navigate to /register
- show login form on navigate to /login

### Receive interactions

## RegisterForm

### Show data

- Show a heading level 2 with 'Sign up for Feisbuk'
- Show an input with label 'Username'
- Show an input with label 'Password'
- Show an input with label 'Confirm Password'
- Show a button with text sign up

### Receive interactions

- Submit form on enter or click signup

## LoginForm

### Show data

- Show a heading level 2 with 'Log in to Feisbuk'
- Show an input with label 'Username'
- Show an input with label 'Password'
- Show a button with text sign up

### Receive interactions

- submit form on enter or click

## EditProfileForm

### Show data

- Show an input with label name
- show an input with label birthday
- show an input with label location
- show an input with label bio
- show an input with label upload avatar
- show a button with text save

### Receive interactions

- submit form on enter or click

## Button

### Show data

- Show the received text/icon/emoji

### Receive interactions

- Invoke the received action on click

## Profile

### Show data

- show an image with alt text of the received profile
- show a heading level 2 with the name of the received profile
- show a span with the age of the received profile
- show a span with the location of the received profile
- show a p with the bio of the received profile
- show buttons 👎 and ♥️

### Receive interactions

- add to friends or enemies on click

## ProfileCard

### Show data

- Show a heading level 3 with the user's name
- Show a span with the user's age
- show a span with the user's location
- show two buttons, one with 👎, the other with ♥️
- show the user's image with an alt text with their name
  - or show a placeholder avatar

### Receive interactions

- navigate to user profile on click (heading or image)
- add user to enemies on 👎 click
- add user to friends on ♥️ click

## ProfileList

### Show data

- show a profile card for each profile received
- Show a span with the number of profiles found

### Receive interactions

## ProfileFilter

### Show data

- Show a dropdown with options
  - friends, enemies, everybody

### Receive interactions

- change the filter on click

## Header

### Show data

- show a heading level 1 with "Feisbuk"
- show a navigation

### Receive interactions

## Navigation

### Show data

- show a login link when no logged
- show a register link when not logged
- show a logout link when logged

### Receive interactions

- navigate to the corresponding page on click
