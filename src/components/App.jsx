import Product from './Product.jsx'
import BookList from './BookList.jsx'
import Alert from './Alert.jsx'
import { Mailbox } from './Mailbox.jsx'
import PropTypes from 'prop-types';


const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
	];

export default function App() {

  return (
    <div>
		  <h1 className={'alert'}>Products</h1>
		  <BookList books={favouriteBooks} />
		  
     <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
		  />
		  
		  <Mailbox username="Alex" messages={["firstmessege", "secondmessege"]} />

		    <Alert variant="info" outlined elevated>
        Would you like to browse our recommended products?
   	  </Alert>
  		    <Alert variant="error">
  	      There was an error during your last transaction
  		    </Alert>
  		    <Alert variant="success" outlined >
  	      Payment received, thank you for your purchase
  		    </Alert>
  		    <Alert variant="warning" elevated>
   	     Please update your profile contact information
   	   </Alert>
	  </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};