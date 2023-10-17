function processData(input) {
  if(input.toLowerCase() === input){
      console.log(input)
  }
  else if(input === input.toUpperCase()){
      console.log(input.toLowerCase()) 
  }
  else if(input[0] === input[0].toLowerCase() && input.substring(1) === input.substring(1).toUpperCase()){
       console.log(input[0].toUpperCase() + input.substring(1).toLowerCase())
  }
  else{
      console.log(input)
  }
}