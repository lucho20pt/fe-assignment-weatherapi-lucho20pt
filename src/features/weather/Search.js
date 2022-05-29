import { Fragment, useState } from 'react'
import { useGetCityByNameMutation } from 'features/api/weatherApi'
import { Form, Button } from 'react-bootstrap'

const Search = () => {
  //
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState('')
  const [getCityByName] = useGetCityByNameMutation()

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
  const submitHandler = async (event) => {
    event.preventDefault()
    console.log('submit ->', search)

    // not empty field
    if (search === '') {
      return true
    }

    // request / result / verify
    try {
      // get response
      const cityResponse = await getCityByName(search).unwrap()
      console.log(cityResponse)
    } catch (error) {
      console.log('error -> ', error.status)
      console.log('error -> ', error.data.message)
    }
  }

  return (
    <Fragment>
      <header className="search | my-3 d-flex justify-content-between | position-relative">
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
    </Fragment>
  )
}

export default Search
