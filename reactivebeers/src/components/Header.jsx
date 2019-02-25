import React from "react";
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div>
      <Link to="/"><div>Home</div></Link>
    </div>
  );
};

export default header;
