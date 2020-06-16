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
function Contact(firstName, lastName, phoneNumber, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.address = address;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(home, work, parents){
  this.home = home;
  this.work = work;
  this.parents = parents;
}

// User Interface Logic
function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li class=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId, addressBook) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email").html(contact.email);
  $(".home-address").html(contact.address.home);
  $(".work-address").html(contact.address.work);
  $(".parents-address").html(contact.address.parents);
  if(contact.address.work) {
    $(".show-work").show();
  } else {
    $(".show-work").hide();
  }
  if(contact.address.parents) {
    $(".show-parents").show();
  } else {
    $(".show-parents").hide();
  }
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners(addressBook) {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.className, addressBook);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function(){
  let addressBook = new AddressBook();
  attachContactListeners(addressBook);
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    let firstName = $("#new-first-name").val();
    let lastName = $("#new-last-name").val();
    let phoneNumber = $("#new-phone-number").val();
    let email = $("#new-email").val();
    let homeAddress = $("#new-home-address").val();
    let workAddress = $("#new-work-address").val();
    let parentsAddress = $("#new-parents-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email").val("");
    $("input#new-home-address").val("");
    $("input#new-work-address").val("");
    $("input#new-parents-address").val("");

    let newAddress = new Address(homeAddress, workAddress, parentsAddress);
    let contact = new Contact(firstName, lastName, phoneNumber, email, newAddress);
    addressBook.addContact(contact);
    displayContactDetails(addressBook);

    $(".show-work-input").hide();
    $(".show-parents-input").hide();

  });
  $("button#add-work-field").click(function(){
    $(".show-work-input").show();
  });
  $("button#add-parents-field").click(function(){
    $(".show-parents-input").show();
  });
});