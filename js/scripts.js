// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }                          
  };
  return false;
}

AddressBook.prototype.modifyContact = function(id, firstName, lastName, phoneNumber) {
  /*for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     
      if (this.contacts[i].id == id) {
        this.contacts[i].firstName = firstName;
        this.contacts[i].lastName = lastName;
        this.contacts[i].phoneNumber = phoneNumber;
      }
    }                          
  };
  return false;*/
  if(this.findContact(id)) {
    this.findContact(id).firstName = firstName;
    this.findContact(id).lastName = lastName;
    this.findContact(id).phoneNumber = phoneNumber;
  } else {
    return false;
  }
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }                          
  };
  return false;
}


// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic
let addressBook = new AddressBook();

$(document).ready(function(){
  $("form#add-contact").submit(function(event){
    event.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let phoneNumber = $("#phone").val();
    if(!lastName || !firstName || !phoneNumber){
      alert("Empty or incorrect input");
      return;
    }
    let contact = new Contact(firstName, lastName, phoneNumber);
    addressBook.addContact(contact);
    $("ul#contacts").append('<li class="panel"/>' + contact.fullName() + " (Phone: " + phoneNumber + ")" + '</li>');  
    $("#lastName").val("");
    $("#firstName").val("");
    $("#phone").val("");
  });
});