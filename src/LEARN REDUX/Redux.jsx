import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addList, removeList, toggleComplete } from "./listSlice";
import { useState } from "react";
import Todo from "./todo";
import { products } from "./product";
import { addToCart, removeFromCart, resetCart } from "./cartSlice";

const Redux = () => {
  const lists = useSelector((state) => state.list.lists);
  // const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  const numb = Math.round(Math.random() * 1000);

  const handleAddList = (e) => {
    e.preventDefault();
    dispatch(
      addList({
        id: numb,
        text: text,
        completed: completed,
      })
    );
    listForm.reset();
  };

  const handleCompleted = (id) => {
    setCompleted(!completed);
    dispatch(
      toggleComplete({
        ...lists,
        id: id,
        completed: completed,
      })
    );
  };
  {
    /* 
      THIS
      IS
      THE
      END
      OF
      EVERYTHING
      
    */
  }

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    event.preventDefault();

    dispatch(
      addToCart({
        id: item.id,
        nameProduct: item.nameProduct,
        price: item.price,
        quantity: 1,
      })
    );
  };

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  const handleDeleteProduct = (item) => {
    dispatch(
      removeFromCart({
        id: item.id,
        price: item.price,
      })
    );
  };

  return (
    <div className="form">
      <div className="store flex flex-wrap flex-row gap-5 justify-items-center items-center ">
        {products.map((item) => (
          <form
            onSubmit={() => handleSubmit(item)}
            key={item.id}
            className="product flex flex-col  justify-items-center "
          >
            <img src="/vite.svg" alt="photo" className="w-14 h-14" />
            <div className="details flex justify-items-between">
              {item.nameProduct}{" "}
              <span className="font-bold text-2xl">${item.price}</span>
            </div>
            <button>Add</button>
          </form>
        ))}
      </div>

      <div className="cart my-10">
        <span className="font-bold text-3xl">
          TOTAL BELANJA {cart.totalQuantity} item, TOTAL $ {cart.totalPrice}
        </span>

        <ul>
          {cart.products.map((item) => (
            <li key={item.id}>
              <span>{item.nameProduct}</span>
              <span className="font-bold text-2xl">
                {item.quantity} x ${item.price}
              </span>
              <button
                className="bg-red-300"
                onClick={() => handleDeleteProduct(item)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <button className="bg-red-500" onClick={handleResetCart}>
          RESET CART{" "}
        </button>
      </div>

      {/* 
        THIS
        IS
        THE
        END
        OF
        EVERYTHING
        
      */}

      <hr />
      <hr />
      <h2>Add Form</h2>
      <form id="listForm">
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
          className=" border"
        />
        <input type="submit" value="add" onClick={(e) => handleAddList(e)} />
      </form>
      <ul>
        {lists.length === 0
          ? ""
          : lists.map((list) => (
              <li key={list.id} onClick={() => handleCompleted(list.id)}>
                <Todo {...list} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Redux;
