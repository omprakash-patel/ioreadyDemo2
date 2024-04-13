import React, { useState, useEffect, useMemo, useCallback } from "react";
// import './App.css'; // Import CSS file for styling
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { category } from "../../store/Data";
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import { setDataStore } from "../../reducers/filteresreducer";

const App = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [offset, setOffset] = useState(0);
  // const [limit, setLimit] = useState(4);
  const [firstCall, setFirstCall] = useState([]);

  const { offset, price_min, price_max, categoryId, limit } = useSelector(
    (state) => state.persistedReducer.filterData
  );
  const filterData = useSelector((state) => state.persistedReducer.filterData);

  useEffect(() => {
    fetchProducts();
  }, [offset]);
  useEffect(() => {
    fetchProducts();
    dispatch(
      setDataStore({
        offset: 0,
      })
    );
  }, [ price_min, price_max, categoryId]);
  const makeUrlString = useCallback(() => {
    let str = "";
    let urlObj = {
      ...filterData,
    };
    for (var key in urlObj) {
      if (filterData[key] !== null) {
        if (str != "") {
          str += "&";
        }
        str += key + "=" + encodeURIComponent(urlObj[key]);
      }
    }
    return str;
  }, [filterData]);
  // -------------Product list api-----------------
  const fetchProducts = async () => {
    let urlString = await makeUrlString();
    axios
      .get(`https://api.escuelajs.co/api/v1/products?${urlString}`)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  const handlePrevPage = () => {
    if (offset >= limit) {
      dispatch(
        setDataStore({
          offset: offset - limit,
        })
      );
    }
  };
// const images = [
//   "[\"https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg\"]",
//   // "[\"https://media.gcflearnfree.org/ctassets/topics/246/share_flower1_fullsize.jpg\"]"
// ]
function opi(params) {
  const om = JSON.parse(params)
return om
}

  const handleNextPage = () => {
    dispatch(
      setDataStore({
        offset: offset + limit,
      })
    );
  };

  return (
    <Container>
      <Row>
        <Col lg={3} className="mb-md-0 mb-5">
          {/*  -------------Filters----------------- */}
          <Filters products={products} />
        </Col>
        <Col lg={9}>
          <div className="">
            <h1>Product List</h1>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <SingleProduct products={products} opi={opi}/> //  -------------Product card-----------------
            )}
          </div>
          {/* //  -------------pagination -----------------  */}
          <div className="pagination justify-content-between mb-3">
            <button
              className="btn_pre_next"
              onClick={handlePrevPage}
              disabled={offset === 0}
            >
              Previous
            </button>
            <button className="btn_pre_next" onClick={handleNextPage}>
              Next
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
