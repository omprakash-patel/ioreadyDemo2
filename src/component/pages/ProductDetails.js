import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const [productsdetails, setProductsdetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   productDetail();
  }, [params]);

  // -------------------productDetail------------------
  const productDetail = async () => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${params.id}`
      );
      const data = await response.json();
      setProductsdetails(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  return (
    <>
      <div>
        <Row>
          <Col>
            <section class="py-5">
              <div class="container">
                <div class="row gx-5">
                  <aside class="col-lg-6">
                    <div class="border rounded-4 mb-3 d-flex justify-content-center">
                      <a
                        data-fslightbox="mygalley"
                        class="rounded-4"
                        target="_blank"
                        data-type="image"
                      >
                        <img
                          class="rounded-4 fit img_1 w-100"
                          src={productsdetails.images}
                        />
                      </a>
                    </div>
                  </aside>
                  <main class="col-lg-6">
                    <div class="ps-lg-3">
                      <h4 class="title text-dark">
                        Quality Men's Hoodie for Winter, Men's Fashion <br />
                        Casual Hoodie
                      </h4>
                      <div class="d-flex flex-row my-3">
                        <div class="text-warning mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                          <span class="ms-1">4.5</span>
                        </div>
                        <span class="text-muted">
                          <i class="fas fa-shopping-basket fa-sm mx-1"></i>154
                          orders
                        </span>
                        <span class="text-success ms-2">In stock</span>
                      </div>

                      <div class="mb-3">
                        <span class="h5"> ${productsdetails.price}</span>
                      </div>
                      <p>{productsdetails.description}</p>
                      <hr />
                      <Link to="#" class="btn me-2 btn-warning shadow-0">
                        {" "}
                        Buy now{" "}
                      </Link>
                      <Link to="#" class="btn me-2 btn-primary shadow-0">
                        {" "}
                        <i class="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                      </Link>
                    </div>
                  </main>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProductDetails;
