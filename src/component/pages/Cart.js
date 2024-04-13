import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartstore } from "../../reducers/cartreducer";
import { Container } from "react-bootstrap";

function Cart() {
    const dispatch = useDispatch()
    const { cartList } = useSelector((state) => state?.persistedReducer?.cartData);
    const removeFromCart = (item) => {
        const isCart = cartList.filter(i => i.id !== item.id)
        console.log('isCart', isCart);

        dispatch(setCartstore(
            {
                cartList: isCart,
            }))

    }
    return (
        <>
        <Container>

            {cartList.length < 1 ?
                <h2>No cart data Found</h2>:
                cartList.map((item) => (
                    <div class="row justify-content-center mb-3">
                        <div class="col-md-12">
                            <div class="card shadow-0 border rounded-3">
                                <div class="card-body">
                                    <div class="row m-0">
                                        <div class="col-xl-3 col-md-4 d-flex justify-content-center">
                                            <div class="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                                                <a href={`/productdetails/${item.id}`}>
                                                    <img src={item?.images} class="w-100" />
                                                </a>
                                                <a href={`/productdetails/${item.id}`}>
                                                    <div class="hover-overlay">
                                                        <div
                                                            class="mask"
                                                            style={{
                                                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                                                            }}
                                                        ></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-md-5 col-sm-7">
                                            <h5>{item.title}</h5>
                                            <p class="text mb-4 mb-md-0">{item.discription}</p>
                                        </div>
                                        <div class="col-xl-3 col-md-3 col-sm-5">
                                            <div class="d-flex flex-row align-items-center mb-1">
                                                <h4 class="mb-1 me-1">${item.price}</h4>
                                                {/* <span class="text-danger"><s>{products.price}</s></span> */}
                                            </div>
                                            <h6 class="text-success">Free shipping</h6>
                                            <div class="mt-4">
                                                <button class="btn btn_blue shadow-0" type="button" onClick={() => removeFromCart(item)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                        </Container>
        </>
    );
}

export default Cart;
