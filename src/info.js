//display character information based on data name and data
export default function Info({ name, data }) {
  return !data || !name ? (
    <div></div> //empty so no box appears before an input is displayed
  ) : !data?.name ? (
    <p>No data for {name}</p>//displayed when a search is given for no character in the api
  ) : (
    <div>
      <h2>{data.name}</h2>
      <p>Birth Year: {data.birth_year}</p>
      <p>Eye Color: {data.eye_color}</p>
      <p>Gender: {data.gender}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Height: {data.height} cm</p>
      <p>Mass: {data.mass} kg</p>
      <p>Skin Color: {data.skin_color}</p>
    </div>
  )
}