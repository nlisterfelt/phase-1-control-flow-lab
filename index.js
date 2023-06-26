
function scuberGreetingForFeet(someValue){
  let result;
  if(someValue <= 400){
    result = 'This one is on me!'
  } else if(someValue <= 2000){
    result = 'That will be twenty bucks.'
  } else if(someValue <= 2500){
    result = 'I will gladly take your thirty bucks.'
  } else {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  let response;
  city === 'NYC' ? (response = 'Ok, sounds good.') : (response = 'No go.')
  return response
}

function switchOnCharmFromTip(tip){
  let message
  switch (tip){
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.'
      break;
  }
  return message;
}