# Address book

#### HTML, CSS, JavaScript files, 06/15/2020

#### By **Evgeniya Chernaya**, **Vanessa Guerrero**, **Ian Scott**

## Description

Webpage that creates address book.

## Setup/Installation Requirements

* Clone/download the repository
* Click on index.html file and see the result in the browser

## Specifications

| Behavior | Input | Output|
|----------|-------|-------|
| Takes User input and returns it | Text | Text |
| Checks if input is not empty | empty input | "Empty or incorrect input" |
| Add contact to the address book (First Name, Last Name, Phone Number, Email, Home Address, Work Address, Parents Address)| "Dana", "Abcd", "999999999", "someemail@email.com", "home", "work", "parents" | Contacts: Dana Abcd |
| Click on contact will show full contact details with delete button | Dana Abcd | First Name: Dana, Last Name: Abcd, Phone Number: 999999999, Email: someemail@email.com, Home Address: home, Work Address: work, Parents Address: parents |
| Do not show work and parents addresses if they were not inputted | "Dana", "Abcd", "999999999", "someemail@email.com", "home" | First Name: Dana, Last Name: Abcd, Phone Number: 999999999, Email: someemail@email.com, Home Address: home |
| Delete button removes the contact from contacts | Dana Abcd | _No Dana ABCD in the contact list |

## Known Bugs

_{No known bugs}_


## Technologies Used

  * HTML
  * CSS
  * JavaScript
  * JQuery
  * Bootstrap

### License

_This software is licensed under the MIT license_

Copyright (c) 2020 **Evgeniya Chernaya**, **Vanessa Guerrero**, **Ian Scott**.
