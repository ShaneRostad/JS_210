function isValidEmail(email) {
  if (!hasAtSign(email)) { return false; }
  var localPart = email.split('@')[0];
  var domainPart = email.split('@')[1];

  if (validLocalPart(localPart) && validDomainPart(domainPart)) {
    console.log(true);
  } else { console.log(false); }

}

function validLocalPart(localPart) {
  return !localPart.match(/[^a-zA-Z0-9]/);
}

function validDomainPart(domainPart) {
  return !!domainPart.match(/[a-z]\.[a-z]/i) &&
          !domainPart.match(/[^a-z]\.[^a-z]/i)
}

function hasAtSign(email) {
  return email.match('@');
}





isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false
