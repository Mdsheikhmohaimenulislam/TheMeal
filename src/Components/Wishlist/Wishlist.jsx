const Wishlist = ({ whitelist }) => {
  console.log(whitelist);

  // that component wishlist
  //   const [wishlistItems, setWishlistItems] = useState([]);
  //   const handleAddToWishlist = (meal) => {
  //     const newItems = [...]
  //   };

  return (
    <div>
      <h1 className="text-lg font-bold">WishList</h1>
      <hr className="mb-10 mt-5" />

      <div>

        {
            whitelist.map(list => )
        }
        
        <div className="card bg-base-100 w-50 shadow-sm">
          <figure>
            <img
              src={whitelist}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
