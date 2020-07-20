function basicTeenager(age) {
 if ( age >= 13 || age <= 19)
 
return "You are a teenager!"
  else (age < 13 || age > 19)
  return "You are not a teenager!"
}

function teenager(age) {
 
  if (age < 13 || age > 19)
  return "You are not a teenager"

}

function ageChecker(age) {
   if (age > 20)
  return "You are a grownup"
  else if (age < 13 )
  return "You are a kid"
  else (age >= 13 || age <= 19 )
  return "You are a teenager!"
}

function ternaryTeenager(age) {
   if (age >= 13 || age <= 19 )
  return "You are a teenager!"
  else if (age < 13 )
  return "You are a kid"
  else (age > 20)
  return "You are a grownup"
}

function switchAge(age) {
 switch(age){
   case ""
   return "You have an age"
   default
 }
}
