import React, { useEffect, useState } from 'react'
import Banner from '../Home/Banner/Banner'



const Product = (props) => {
  const [card, setCard] = useState('');
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [price, setPrice] = useState('');

  const fetchData = () => {
    return fetch('https://fakestoreapi.com/products?limit=22')
      .then((response) => response.json())
      .then((data) => setCard(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterData(card);
  }, [card]);


const filterValues = [];
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
    // console.log('lowerCase', lowerCase)
    if (lowerCase.length > 0) {
      const filterValues = card.filter((item) => item.title.toLowerCase().includes(lowerCase));
      setFilterData(filterValues)
      // console.log('filterValuesssssssssss', filterValues)
    }
    else if (lowerCase.length === 0 && price === "LowToHigh") {
      const filterValues = card.sort((a, b) => a.price - b.price);
      setFilterData(filterValues)
      // setFilterData([...card])
      // priceHandler(filterData)
    }
    else if (lowerCase.length === 0 && price === "HighToLow") {
      const filterValues = card.sort((a, b) => b.price - a.price);
      setFilterData(filterValues)
      // setFilterData([...card])
      // priceHandler(filterData)
    }
  };

  // console.log("fliterdata", filterData);
  const priceHandler = (e) => {
    var pricevalue = e.target.value;
    setPrice(pricevalue);
    if (pricevalue === "LowToHigh") {
      const priceFilter = filterData.sort((a, b) => a.price - b.price)
      setFilterData(priceFilter)
      console.log("priceFilterrrrrr", filterData)
    }
    else if (pricevalue === "HighToLow") {
      const priceFilter = filterData.sort((a, b) => b.price - a.price)
      setFilterData(priceFilter)
      console.log("priceFilterrrrrr", filterData)
    }
    else {
      setFilterData([...card])
    }
    console.log("price Valueeeeeeeeee", pricevalue);
    console.log("priceeeeeeeeeee", price);
  };




  return (
    <>
      <Banner title="Products" />
      <div className='d-flex align-items-center justify-content-between bg-dark py-3 px-5'>

        <input
          type='text'
          label="Search"
          value={search}
          onChange={inputHandler}
        />
        <select onChange={priceHandler} value={price}>
          <option value="select">Select</option>
          <option value="HighToLow">High To Low</option>
          <option value="LowToHigh">Low To High</option>
        </select>
      </div>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <Button>React Bootstrap Button</Button> */}
      <div className='product_section'>
        <div className='container'>
          <div className='products'>
            {filterData && filterData.length > 0 && filterData.map((cardObj, index) => (

              <div className='product' key={cardObj.id}>
                <div className='product_wrapper'>
                  <div className='product_img'>
                    <img src={cardObj.image} />
                  </div>
                  <div className='product_meta'>
                    <div className='product_title'>
                      <h3>{cardObj.title}</h3>
                    </div>
                    <div className='price'>
                      <span>${cardObj.price}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}


          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default Product