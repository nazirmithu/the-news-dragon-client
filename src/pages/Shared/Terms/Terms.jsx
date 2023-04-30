import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum, quam labore eum repellendus soluta voluptatibus praesentium est porro consequuntur quisquam asperiores velit, iste minima odio voluptatum architecto tempore saepe!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;