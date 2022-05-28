import { Form, Button } from 'react-bootstrap'

const Search = () => {
  return (
    <header className="my-3 d-flex justify-content-between">
      <Button className="" size="lg" variant="outline-primary">
        +
      </Button>

      <Form.Control
        size="lg"
        className="w-75" 
        type="text"
        placeholder="Enter Location..."
        // value={newCity}
        // onChange={(event) => setNewCity(event.target.value)}
        // onKeyPress={searchLocation}
      />

      {/* <Button className="" size="lg" variant="outline-primary">
        :
      </Button> */}
    </header>
  )
}

export default Search
