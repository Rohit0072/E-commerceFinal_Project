import React, { useState, useEffect } from 'react';
import Electronics from '../ProductsSection/electronics';
import Fashion from '../ProductsSection/fashion'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import { BlinkBlur } from 'react-loading-indicators';

function FashionPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5800);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full loading-container">
          <BlinkBlur color="#333333" size="medium" text="" textColor="" />
        </div>
      ) : (
        <>
          <Navbar />
          <Electronics />
          <Footer />
        </>
      )}
    </>
  );
}

export default FashionPage;
