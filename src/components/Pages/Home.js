import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <>
        <h3>
          When I hear music, I fear no danger. I am invulnerable. I see no foe. I am related to the
          earliest times, and to the latest. -Henry David Thoreau
        </h3>
        <p>Solid Sounds for any occasion.</p>
        <div>
          <img src="../assets/norah1.jpeg" />
          <p>
            Norah Jones - 9 time Grammy award winning artist, flexes in multiple genres and was
            named the top jazz artist of the decade 2000-2009.
          </p>
          <navLink to="norah-jones">Learn More</navLink>
        </div>
        <div>
          <img src="../assets/billie1.jpeg" />
          <p>
            Billie Eilish - releasing her first single at age 15, she became the first artist born
            in the 2000s to have a number one album in the United States.
          </p>
          <navLink to="billie-eilish">Learn More</navLink>
        </div>
        <div>
          <img src="pic" />
          <p>Lake Street Dive - a multi-genre band founded in 2004.</p>
          <navLink to="lake-street-dive">Learn More</navLink>
        </div>
      </>
    )
  }
}

export default Home
