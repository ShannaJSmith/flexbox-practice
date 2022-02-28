import React from 'react';
import vaporeon from '../images/vaporeon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <h1>Flexbox Sample Styling</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            reprehenderit iste unde, sed molestias alias vel quaerat hic ducimus
            placeat fugiat saepe consequuntur necessitatibus rerum praesentium.
            Itaque recusandae sapiente magni temporibus soluta. Rem nostrum
            distinctio magni et reiciendis animi! Ut quaerat fuga neque
            doloremque distinctio eos nihil, ducimus dolorum vel.
          </p>
        </div>
        <img src={vaporeon} alt="vaporeon" />
      </div>
    </header>
  );
};

export default Header;
