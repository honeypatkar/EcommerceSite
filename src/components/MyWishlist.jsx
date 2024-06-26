import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "@mui/material";

export default function MyWishlist(props) {
  const { fav, removeFromFav, addToCart, isCart } = props;

  const handleRemoveFromFav = (imageUrl) => {
    removeFromFav(imageUrl);
    toast.success("Removed from WishList");
  };

  const handleCartClick = (title, imageUrl, price) => {
    addToCart({
      title,
      imageUrl,
      price,
    });
    toast.success("Added to Cart");
  };

  return (
    <div>
      <h1 className="pt-3 text-2xl text-center bg-gray-100 pb-3">
        My Wishlist ❤
      </h1>
      {fav.length === 0 ? (
        <div className=" text-center">
          <h2 className="pt-10 text-4xl">No Item Yet</h2>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 container">
          {fav.map((element, index) => (
            <div className="group relative" key={index}>
              <div className="card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <ul className="absolute top-2 right-2">
                    <Tooltip title="Remove Product" placement="right">
                      <button
                        className="navItem"
                        onClick={() => handleRemoveFromFav(element.imageUrl)}
                      >
                        <DeleteIcon sx={{ fontSize: "30px", color: "red" }} />
                      </button>
                    </Tooltip>
                  </ul>
                  <img
                    src={element.imageUrl}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">$ {element.price}</p>
                </div>
                <button
                  className="btn btn-outline-dark m-2"
                  onClick={() =>
                    handleCartClick(
                      element.title,
                      element.imageUrl,
                      element.price
                    )
                  }
                  disabled={isCart(element.imageUrl)}
                >
                  {isCart(element.imageUrl) ? "Added To Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
