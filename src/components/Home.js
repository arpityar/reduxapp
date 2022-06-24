import React from 'react'

const Home = () => {
  return (
    <>
      <div>
        <h1>Home Component</h1>
        <div className='add-to-cart'>
          <span className='cart-count'></span>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg'
            alt='cart'
          />
        </div>
        <div className='cart-wrapper'>
          <div className='img-wrapper item'>
            <img
              src='https://thumbs.dreamstime.com/b/iphone-most-recent-isolated-white-background-46056944.jpg'
              alt='img'
            />
          </div>
          <div className='text-wrapper item'>
            <span>I-Phone</span>
            <span>Price: $1000.00</span>
          </div>
          <div className='btn-wrapper item'>
            <button
            // onClick={() => {
            //   props.addToCartHandler({ pice: 1000, name: 'i phone 11' })
            // }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
