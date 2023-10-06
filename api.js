//function to fetch the character data
const getCharacter = async Name => {
  const character = encodeURIComponent(Name.toLowerCase())
  const url = `https://swapi.dev/api/people/?search=${character}`
  console.log(url)


//make a request to the swapi api
  const response = await fetch(url)
  const json = await response.json()

//check if the results were found and display it or an error message
  if (json.results && json.results.length > 0) {
    return json.results[0]
  } else {
    return { error: 'Character not found' }
  }
}

export { getCharacter }
