// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.addContactsArray = function(arrayOfContacts) {
  arrayOfContacts.forEach(function(element) {
    this.addContact(element);
  });
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
  /*for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }                          
  };
  return false;*/
  if(this.findContact(id)) {
    delete this.findContact(id);
    return true;
  } else {
    return false;
  }
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

let addressBook = new AddressBook();

let contacts = [];

let contact1 = new Contact("Evgeniya", "Chernaya", "333333333");
let contact2 = new Contact("Vanessa", "Guerrero", "111111111");

//contacts.push(contact1, contact2);

addressBook.addContact(contact1);
addressBook.addContact(contact2);

//addressBook.addContactsArray(contacts);

addressBook.modifyContact(1, "Eva", "Cher", "22222222");

console.log(addressBook);

console.log(addressBook.deleteContact(1));

console.log(addressBook);

/*addressBook.deleteContact(1);

console.log(addressBook.findContact(2));
console.log(addressBook.findContact(3));

//console.log(addressBook.contacts[0]);

console.log(addressBook);*/


/*$(document).ready(function(){
  let addressBook = new AddressBook();
  const buttonModify = '<button class="btn" type="click" id="modify">Modify</button>';
  const buttonDelete = '<button class="btn" type="click" id="delete">Delete</button>';

  $("form#add-contact").submit(function(event){
    event.preventDefault();
    let lastName = $("#lastName").val();
    let firstName = $("#firstName").val();
    let phoneNumber = $("#phone").val();
    if(!lastName || !firstName || !phoneNumber){
      alert("Empty or incorrect input");
      return;
    }
    let contact = new Contact(firstName, lastName, phoneNumber);
    addressBook.addContact(contact);
    //$("ul#contacts").append('<li class="panel"/>' + contact.fullName() + " " + buttonModify + " " + buttonDelete + '</li>');  
    $("#lastName").val("");
    $("#firstName").val("");
    $("#phone").val("");
    console.log(addressBook.contacts);
  });
  $("button#show-contacts").click(function(){
    addressBook.contacts.forEach(function(element){
      $("ul#contacts").append('<li class="panel"/>' + element.fullName() + " " + buttonModify + " " + buttonDelete + '</li>');  
    });
    $(".address-book").show();
  });
  $("button#delete").click(function(){
    if(confirm("Do you want to delete the contact?")){
      addressBook.deleteContact(contact.id);
    }
  });
});*/