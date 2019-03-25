import React from 'react'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fib2hpbXNlbGYiLCJhIjoiY2pzcHgxeXJjMDBpbTQ5czljNHQ4dXVzMCJ9.7KpwLwJFWkQOC_RZo9jc6g'

const getSuggestionValue = suggestion => {
  const newSuggestion = suggestion.Location.Address.Label
  return newSuggestion
}

const renderSuggestion = suggestion => (
  <div>
    {suggestion.Location.Address.Label}
  </div>
)

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      suggestions: [],
      value: ''
    }

    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  onSuggestionsFetchRequested({ value }) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength < 6 ? [] : axios.get('https://geocoder.api.here.com/6.2/geocode.json?', {
      params: {
        searchtext: `${this.props.value}`,
        mapview: '51.7131,-0.5775;51.2685,0.2905',
        gen: '9',
        app_id: '5apWzP0clCrbF54oEcxF',
        app_code: '3CQW9J_Jau4pIb7U7U2J-g'
      }
    }
    )
      .then(res => {
        this.props.lnglatChange(res.data.Response.View[0].Result[0].Location.DisplayPosition)
        this.setState({suggestions: res.data.Response.View[0].Result })
      })
      .catch(error => {
        console.log(`Error Message ${error}`)
      })
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    })
  }

  readingInput(){
    const searchBox = document.querySelector('#root > div > div > div > input')
    searchBox.value = this.props.value
    searchBox.addEventListener('change', this.props.change)
  }

  render() {
    const { value } = this.props
    const {  suggestions } = this.state

    const inputProps = {
      placeholder: 'Search...',
      value,
      onChange: this.props.change
    }

    return (
      <Autosuggest
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        inputProps={inputProps}
        suggestions={suggestions}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
      />
    )
  }
}

export default Search
