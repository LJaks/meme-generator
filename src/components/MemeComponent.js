import React from "react";

function MemeComponent(props) {
  return (
    <main>
      <form className="meme-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="topText"
          value={props.data.topText}
          onChange={props.handleChange}
          placeholder="Add Top Text"
        />

        <input
          type="text"
          name="bottomText"
          value={props.data.bottomText}
          onChange={props.handleChange}
          placeholder="Add Bottom Text"
        />

        <button>Generate</button>
      </form>

      <div id="capture" className="meme">
        <img src={props.data.randomImg} alt="" />
        <h2 className="top">{props.data.topText}</h2>
        <h2 className="bottom">{props.data.bottomText}</h2>
      </div>
    </main>
  );
}

export default MemeComponent;
