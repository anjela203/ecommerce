import React, { useContext } from 'react'
import Layout, { LayoutContext } from '../layout'
import womenImg from '../../../assets/women.png'
import './SellOnline.css';
function SellOnline() {
    const { dispatch } = useContext(LayoutContext)
    const handleSignupModal = ()=>{
        dispatch({ type: "loginSignupModalToggle", payload: true })
    }
  return (
    <Layout>
        <div className="sell__online__wrapper">
            <div className="sell__online__info">
                <h1>Sell Online to Customers at <span>0% Commission</span> </h1>
                <p>We empower women to sell online and grow their professional career</p>
                {localStorage.getItem("jwt") ? null : <button
                onClick={handleSignupModal}
                style={{ background: "#303031" }}
                className="cursor-pointer box-border text-2xl text-white px-4 py-2 rounded"
              >
                Sell Now
              </button>}
            </div>
            <img src={womenImg} alt="img" />

        </div>
        <div className='w-layout-grid grid-12 align-items-center p-8'>
    <div className="max-width-460">
        <h2 className="heading">Why Suppliers Love Shopme</h2>
        <p className="font-size-v1">All the benefits that come with selling on Shopme are designed to help you sell more, and make it easier to grow your business.</p>
      </div>
        <div className="block-v5-wrap">
        <div className="block-v5">
          <div className="block-v5-icon"><img src="https://supplier.meesho.com/images/icon-10.svg" loading="lazy" alt="Icon 10"/></div>
          <div>
            <div className="block-v5-title">0% Commission Fee</div>
            <div className="block-v5-text">Suppliers selling on Shopme keep 100% of their profit by not paying any commission</div>
          </div>
        </div>
        <div className="block-v5">
          <div className="block-v5-icon"><img src="https://supplier.meesho.com/images/icon-16.svg" loading="lazy" alt="Icon 16"/></div>
          <div>
            <div className="block-v5-title">0 Penalty Charges</div>
            <div className="block-v5-text">Sell online without the fear of order cancellation charges with 0 Penalty for late dispatch or order cancellations.</div>
          </div>
        </div>
        <div className="block-v5">
          <div className="block-v5-icon"><img src="https://supplier.meesho.com/images/icon-11.svg" loading="lazy" alt="Icon 11"/></div>
          <div>
            <div className="block-v5-title">Growth for Every Supplier</div>
            <div className="block-v5-text">From small to large and unbranded to branded, and now open for Sellers who don't have a Regular GSTIN  too, Shopme fuels growth for all suppliers.
            </div>
          </div>
        </div>
        <div className="block-v5 border-none">
          <div className="block-v5-icon"><img src="https://supplier.meesho.com/images/icon-12.svg" loading="lazy" alt="Icon 12"/></div>
          <div>
            <div className="block-v5-title">Ease of Doing Business</div>
            <div className="flex-wrap wrap">
              <div className="flex-wrap margin-rb"><img src="https://supplier.meesho.com/images/tick.svg" loading="lazy" alt="tick" className="flex-wrap-image"/>
                <div className="block-v5-text">Easy Product Listing</div>
              </div>
              <div className="flex-wrap margin-rb"><img src="https://supplier.meesho.com/images/tick.svg" loading="lazy" alt="tick" className="flex-wrap-image"/>
                <div className="block-v5-text">Lowest Cost Shipping</div>
              </div>
              <div className="flex-wrap margin-rb margin-bottom-0"><img src="https://supplier.meesho.com/images/tick.svg" loading="lazy" alt="tick" className="flex-wrap-image"/>
                <div className="block-v5-text">7-Day Payment Cycle from the delivery date</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </Layout>
  )
}

export default SellOnline