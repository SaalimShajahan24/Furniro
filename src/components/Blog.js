import React from "react";
import "./styles/Blog.css";
import FeaturesRow from "./FeaturesRow"; // Import FeaturesRow component
import Footer from "./Footer";
import { Link } from "react-router-dom"; // Import Link


const Blog = () => {
  return (
    <div className="shop-page">
    {/* Header Section */}
    <header
      style={{
        backgroundImage: `url("/images/sh1.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "316px",
      }}
      className="shop-header"
    >
      <div className="shop-header-content">
        <h1>Blog</h1>
        <nav>
          <span>Home</span> <span>&gt;</span> <span>Blog</span>
        </nav>
      </div>
    </header>

      {/* Blog Content */}
      <div className="blog-content">
        {/* Main Blog Section */}
        <div className="blog-main">
          {/* Blog Post 1 */}
          <div className="blog-post">
            <img src="/images/blgimg1.png" alt="Blog 1" className="blog-img" />
            <div className="blog-meta">
              <span>
                <img src="/svgs/Admin.svg" alt="Admin" className="svg-icon" />
                Admin
              </span>
              <span>
                <img src="/svgs/Calender.svg" alt="Calendar" className="svg-icon" />
                14 Oct 2022
              </span>
              <span>
                <img src="/svgs/Tag.svg" alt="Tag" className="svg-icon" />
                Wood
              </span>
            </div>
            <h2>Going all-in with millennial design</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-post">
            <img src="/images/blgimg2.png" alt="Blog 2" className="blog-img" />
            <div className="blog-meta">
              <span>
                <img src="/svgs/Admin.svg" alt="Admin" className="svg-icon" />
                Admin
              </span>
              <span>
                <img src="/svgs/Calender.svg" alt="Calendar" className="svg-icon" />
                14 Oct 2022
              </span>
              <span>
                <img src="/svgs/Tag.svg" alt="Tag" className="svg-icon" />
                Handmade
              </span>
            </div>
            <h2>Exploring new ways of decorating</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>

          {/* Blog Post 3 */}
          <div className="blog-post">
            <img src="/images/blgimg3.png" alt="Blog 3" className="blog-img" />
            <div className="blog-meta">
              <span>
                <img src="/svgs/Admin.svg" alt="Admin" className="svg-icon" />
                Admin
              </span>
              <span>
                <img src="/svgs/Calender.svg" alt="Calendar" className="svg-icon" />
                14 Oct 2022
              </span>
              <span>
                <img src="/svgs/Tag.svg" alt="Tag" className="svg-icon" />
                Wood
              </span>
            </div>
            <h2>Handmade pieces that took time to make</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <Link to="/blog/post-name" className="read-more">
Read more
</Link>
          </div>

          {/* Pagination */}
          
          <div className="pagination-container"></div>
          <div className="pagination">
            <span className="page-number active">1</span>
            <span className="page-number">2</span>
            <span className="page-number">3</span>
            <span className="page-next">Next</span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="blog-sidebar">
          
          {/* Sidebar */}
<div className="blog-sidebar">
  {/* Search Box */}
  <div className="search-box">
    <input type="text" placeholder="Search"  />
    {/* <button className="search-icon-btn">
      <img src="/svgs/akar-icons_search.svg" alt="Search Icon" />
    </button> */}
  </div>

  {/* Categories */}
  <div className="categories">
    <h3>Categories</h3>
    <ul>
      <li>
        <span>Crafts</span> <span>2</span>
      </li>
      <li>
        <span>Design</span> <span>8</span>
      </li>
      <li>
        <span>Handmade</span> <span>7</span>
      </li>
      <li>
        <span>Interior</span> <span>1</span>
      </li>
      <li>
        <span>Wood</span> <span>6</span>
      </li>
    </ul>
  </div>
</div>

          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <ul>
              <li>
                <img src="/images/rpimg1.png" alt="Recent 1" />
                <div>
                  <p>Going all-in with millennial design</p>
                  <span>03 Aug 2022</span>
                </div>
              </li>
              <li>
                <img src="/images/rpimg2.png" alt="Recent 2" />
                <div>
                  <p>Exploring new ways of decorating</p>
                  <span>03 Aug 2022</span>
                </div>
              </li>
              <li>
                <img src="/images/rpimg3.png" alt="Recent 3" />
                <div>
                  <p>Handmade pieces that took time to make</p>
                  <span>03 Aug 2022</span>
                </div>
              </li>
              <li>
                <img src="/images/rpimg4.png" alt="Recent 4" />
                <div>
                  <p>Modern home in Milan</p>
                  <span>03 Aug 2022</span>
                </div>
              </li>
              <li>
                <img src="/images/rpimg5.png" alt="Recent 5" />
                <div>
                  <p>Colorful office redesign</p>
                  <span>03 Aug 2022</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <FeaturesRow />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Blog;
