import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa';

const categories = [
  {
    name: 'Food Product and Beverages',
    subcategories: {
      'DAIRY PRODUCTS': ['Milk', 'Cheese', 'Ice Cream', 'Paneer', 'Butter'],
      'Cooking Spices and Masala': ['Cinnamon', 'Tamarind', 'Coriander', 'Mustard', 'Clove'],
      'Preserved Vegetables': ['Mushroom', 'Dehydrated Red Onions', 'Fresh Vegetables', 'Onions', 'Sweet Potato'],
    },
  },
  { name: 'Agriculture' },
  { name: 'Electronics and Electrical' },
  { name: 'Furniture and Home Decoration' },
  { name: 'Apparel and Fashion Accessories' },
  { name: 'Health and Beauty' },
  { name: 'Construction and Real Estate' },
  { name: 'Automobile Auto Parts and Accessories' },
];

const HomeCategoryWithOffcanvas = () => {
  const [show, setShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const handleClose = () => {
    setShow(false);
    setActiveCategory(null);
    setActiveSubCategory(null);
  };
  const handleShow = () => setShow(true);

  const currentCategory = categories[activeCategory];
  const subcategories = currentCategory?.subcategories || {};

  return (
    <>
      {/* Desktop layout */}
      <div className="d-none d-md-flex border shadow-sm" style={{ minHeight: '400px' }}>
        {/* Left Menu */}
        <div className="bg-primary text-white p-3" style={{ width: '250px' }}>
          <h5 className="mb-3 text-uppercase">Browse Categories</h5>
          <ul className="list-unstyled">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className={`py-2 px-3 category-item ${activeCategory === idx ? 'bg-primary-dark' : ''}`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {cat.name}
                {cat.subcategories && <FaAngleRight className="float-end" />}
              </li>
            ))}
          </ul>
          <Button variant="dark" className="w-100 mt-3">
            All Categories
          </Button>
        </div>

        {/* Right Panel */}
        <div className="flex-grow-1 bg-white p-4">
          {activeCategory !== null && currentCategory.subcategories && (
            <div className="row">
              {Object.entries(subcategories).map(([group, items], i) => (
                <div className="col-md-3 col-sm-6 mb-3" key={i}>
                  <strong className="text-uppercase small">{group}</strong>
                  <ul className="list-unstyled mt-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="text-muted small mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Button */}
      <div className="d-md-none p-2 bg-light">
        <Button variant="primary" onClick={handleShow} className="w-100">
          All Categories
        </Button>
      </div>

      {/* Offcanvas Drawer for Mobile */}
      <Offcanvas show={show} onHide={handleClose} scroll backdrop>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {activeSubCategory
              ? activeSubCategory
              : activeCategory !== null
              ? categories[activeCategory].name
              : 'All Categories'}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* If viewing products */}
          {activeSubCategory ? (
            <>
              <Button variant="link" onClick={() => setActiveSubCategory(null)} className="mb-3 p-0">
                <FaArrowLeft /> Back to Subcategories
              </Button>
              <ul className="list-unstyled">
                {subcategories[activeSubCategory].map((product, idx) => (
                  <li key={idx} className="p-2 border-bottom" style={{ cursor: 'pointer' }}>
                    {product}
                  </li>
                ))}
              </ul>
            </>
          ) : activeCategory !== null && currentCategory.subcategories ? (
            <>
              <Button variant="link" onClick={() => setActiveCategory(null)} className="mb-3 p-0">
                <FaArrowLeft /> Back to Categories
              </Button>
              <ul className="list-unstyled">
                {Object.keys(subcategories).map((subName, idx) => (
                  <li
                    key={idx}
                    className="d-flex justify-content-between align-items-center p-2 border-bottom"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveSubCategory(subName)}
                  >
                    {subName} <FaAngleRight />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="list-unstyled">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="d-flex justify-content-between align-items-center p-2 border-bottom"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveCategory(idx)}
                >
                  {cat.name} {cat.subcategories && <FaAngleRight />}
                </li>
              ))}
            </ul>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HomeCategoryWithOffcanvas;
