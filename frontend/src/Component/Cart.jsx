import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div>
        <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div>
          <div className="card-body">
            {/* Single item */}
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* Image */}
                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fHCZGFcYVMXDZIXtB2pJGvyLB_EGFO5cDg&sp"
                    className="w-100"
                    alt="Blue Jeans Jacket"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
                {/* Image */}
              </div>
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* Data */}
                <p>
                  <strong>Flower vase</strong>
                </p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-sm me-1 mb-2 "
                  data-mdb-tooltip-init=""
                  title="Remove item"
                >
                  <i className="fas fa-trash" />
                </button>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-danger btn-sm mb-2 "
                  data-mdb-tooltip-init=""
                  title="Move to the wish list"
                >
                  <i className="fas fa-heart" />
                </button>
                {/* Data */}
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* Quantity */}
                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                  <button
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary px-3 me-2 mt-3"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <div data-mdb-input-init="" className="form-outline">
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={1}
                      type="number"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form1">
                      Quantity
                    </label>
                  </div>
                  <button
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary px-3 ms-2 mt-3"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  >
                    <i className="fas fa-plus" />
                  </button>
                </div>
                {/* Quantity */}
                {/* Price */}
                <p className="text-start text-md-center">
                  <strong>Rs 700.00</strong>
                </p>
                {/* Price */}
              </div>
            </div>
            {/* Single item */}
            <hr className="my-4" />
            {/* Single item */}
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* Image */}
                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
                {/* Image */}
              </div>
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* Data */}
                <p>
                  <strong>Wood craft</strong>
                </p>
                <p>Color: red</p>
                <p>Size: M</p>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-sm me-1 mb-2"
                  data-mdb-tooltip-init=""
                  title="Remove item"
                >
                  <i className="fas fa-trash" />
                </button>
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-danger btn-sm mb-2"
                  data-mdb-tooltip-init=""
                  title="Move to the wish list"
                >
                  <i className="fas fa-heart" />
                </button>
                {/* Data */}
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* Quantity */}
                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                  <button
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary px-3 me-2 mt-3"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <div data-mdb-input-init="" className="form-outline">
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={1}
                      type="number"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form1">
                      Quantity
                    </label>
                  </div>
                  <button
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary px-3 ms-2 mt-3"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  >
                    <i className="fas fa-plus" />
                  </button>
                </div>
                {/* Quantity */}
                {/* Price */}
                <p className="text-start text-md-center">
                  <strong>Rs 700.00</strong>
                </p>
                {/* Price */}
              </div>
            </div>
            {/* Single item */}
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p>
              <strong>Expected shipping delivery</strong>
            </p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p>
              <strong>We accept</strong>
            </p>
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark"
            />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>Rs 1400.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>India</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>Rs 1400.00</strong>
                </span>
              </li>
            </ul>
            <button
              type="button"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-primary btn-lg btn-block"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Cart