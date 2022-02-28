import React from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

const Content = () => {
  return (
    <section className="boxes">
      <div className="content-container">
        <div className="box">
          <h2>
            <MdOutlineCatchingPokemon
              className="icon"
              style={{ color: 'red' }}
            />
            Pokemon
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis ea debitis aspernatur tempore illo quo deserunt quidem
            necessitatibus accusantium.
          </p>
        </div>
        <div className="box">
          <h2>
            <MdOutlineCatchingPokemon
              className="icon"
              style={{ color: 'red' }}
            />
            Description
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis ea debitis aspernatur tempore illo quo deserunt quidem
            necessitatibus accusantium.
          </p>
        </div>
        <div className="box">
          <h2>
            <MdOutlineCatchingPokemon
              className="icon"
              style={{ color: 'red' }}
            />
            Games
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            veritatis ea debitis aspernatur tempore illo quo deserunt quidem
            necessitatibus accusantium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
