"use client";


const PriceRange = () => {
  return (
    <div className="widget ltn__price-filter-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border">
        Filter dengan Harga
      </h4>
      <div className="price_filter">
        <div className="price_slider_amount">
          <input type="submit" value="Rentang Anda:" />
          <input
            type="text"
            className="amount"
            name="price"
            placeholder="Add Your Price"
          />
        </div>
        <div className="slider-range"></div>
      </div>
    </div>
  );
};

export default PriceRange;
