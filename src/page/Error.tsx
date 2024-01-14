import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className='page'>
      <h1>404 error</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim sit
        temporibus unde facere dolorum nisi velit dolore. Dolorem, doloribus
        asperiores consequatur deserunt, magni dicta voluptas omnis odit
        delectus aspernatur quaerat?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        provident fugit recusandae voluptas est tempore odit ipsum explicabo
        doloremque a!
      </p>
      <Link to='/' className='btn back-to-home-btn'>
        back to home
      </Link>
    </div>
  );
};

export default Error;
