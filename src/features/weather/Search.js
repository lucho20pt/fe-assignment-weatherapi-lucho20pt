import { Fragment, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Search = () => {
  //
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState('')

  // show search
  const showSearchHandler = () => {
    console.log('show')
    setShowSearch(true)
  }

  // on change
  const changeHandler = (event) => {
    // console.log('value ->', event.target.value)
    const val = event.target.value
    setSearch(val)
  }
  // on submit
  const submitHandler = async (event, data) => {
    event.preventDefault()
    console.log('submit ->', search)

    // clear form
    setSearch('')
    setShowSearch(!showSearch)
  }

  return (
    <header className="search | my-3 d-flex justify-content-between">
      {/* {cityResponse && cityResponse.name} */}
      {!showSearch && (
        <Button
          className=""
          size="lg"
          variant="outline-primary"
          onClick={showSearchHandler}
        >
          Add City
        </Button>
      )}

      {showSearch && (
        <Fragment>
          <Form
            className="w-100 d-flex justify-content-between"
            onSubmit={submitHandler}
          >
            <Button
              type="submit"
              className=""
              size="lg"
              variant="outline-primary"
            >
              +
            </Button>

            <Form.Control
              size="lg"
              className="w-75"
              type="text"
              placeholder="Enter Location..."
              value={search}
              onChange={changeHandler}
            />
          </Form>
        </Fragment>
      )}
    </header>
  )
}

export default Search
