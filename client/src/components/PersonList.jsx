import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/users/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul data-testid="name">
        {
          this.state.persons
            .map(person =>
              <>
                <li className={person._id}>Name: {person.name}</li>
                <li className={person._id}>Languages: {person.languages}</li>
                <li className={person._id}>Bio: {person.bio}</li>
                <br></br>
              </>
            )
        }
      </ul>
    )
  }
}
