import { Fragment, useState } from 'react'
import { useGetCityByNameMutation } from 'features/api/weatherApi'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { weatherActions } from 'features/weather/weatherSlice'

const Search = () => {
  //
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState('')
  const [getCityByName] = useGetCityByNameMutation()
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const timeout = 1500

  // show search
  const showSearchHandler = () => {
    // console.log('show')
    setShowSearch(!showSearch)
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
    const city = search.trimEnd()

    // not empty field
    if (city === '') {
      onErrorHandler()
      return true
    }

    // request / result / verify
    try {
      // get response
      const cityResponse = await getCityByName(city).unwrap()
      console.log('obj ->', cityResponse)
      dispatch(weatherActions.addCity(cityResponse))
      onSuccessHandler()
    } catch (error) {
      // console.log('error -> ', error.status)
      // console.log('error -> ', error.data.message)
      onErrorHandler()
    }
  }

  // Error
  const onErrorHandler = () => {
    setError(true)
    setTimeout(() => {
      setError(false)
    }, timeout)
  }
  // Success
  const onSuccessHandler = () => {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      // clear form
      setSearch('')
      setShowSearch(!showSearch)
    }, timeout)
  }

  return (
    <Fragment>
      <header className="search | my-3 d-flex justify-content-between | position-relative">
        <Button
          className=""
          size="lg"
          variant="outline-primary"
          onClick={showSearchHandler}
        >
          {!showSearch ? '+' : 'x'}
        </Button>

        {showSearch && (
          <Form className="w-75" onSubmit={submitHandler}>
            <Form.Control
              size="lg"
              className=""
              type="text"
              placeholder="Enter Location..."
              value={search}
              onChange={changeHandler}
            />
          </Form>
        )}

        {error && (
          <div
            role="alert"
            className="alert alert-danger | position-absolute | py-0"
          >
            City Not Found or Empty Field
          </div>
        )}
        {success && (
          <div
            role="alert"
            className="alert alert-success | position-absolute | py-0"
          >
            <strong>{search === '' ? null : search}</strong> added to favourites
          </div>
        )}
      </header>
    </Fragment>
  )
}

export default Search
