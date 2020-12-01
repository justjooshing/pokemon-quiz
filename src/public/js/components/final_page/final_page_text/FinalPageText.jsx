import React, { Component } from 'react'

export class FinalPageText extends Component {

  state = {
    under_four: ["Oh no!", "You're going to have to train a lot more to become the best"] ,
    under_seven: ["Close!", "You know your stuff, but still need some training"],
    seven_and_up: ["Well done!", "You are truly on your way to becoming a pokemon master"]
  }

  render() {
    const {score, setMode} = this.props;
    return (
      <div>
        <p className="final_page_text_paragraph">{score <4 ? this.state.under_four[0] : score <7 ? this.state.under_seven[0] :
            this.state.seven_and_up[0]}</p>
        <p className="final_page_text_paragraph">{score <4 ? this.state.under_four[1] : score <7 ? this.state.under_seven[1] :
            this.state.seven_and_up[1]}</p>
      </div>
    )
  }
}

export default FinalPageText
