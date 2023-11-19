import "./MainPage.css";
import CommentSection from "./CommentSection.jsx";
import Footer from "./Footer.jsx";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="row">
        {/* img section */}
        <div className="col-7 col-md-8 col-lg-8 p-0">
          <div className="blue-bg-img w-100">
            <img
              src="/public/product-img/keybord-img.png"
              alt="/"
              className="img-fluid p-4"
            />
          </div>

          <div className="row">
            <h1>hi</h1>
          </div>
        </div>

        {/* info section */}
        <div className="col-5 col-md-4 col-lg-4 p-lg-4 p-md-4 p-4">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <p className="collection-text mt-lg-2 mt-md-3 mt-2">
                فیزیکال > رسته > نام شرکت سازنده و محصول
              </p>
            </div>

            <div className="col-12 col-md-12 col-lg-12 mt-lg-4 mt-md-4 mt-4">
              <h4>Product Name Product Name</h4>
              <span>
                Product Description Product Description
                <br /> Product Description
              </span>
              <h5 className="mt-2 mt-md-2 mt-lg-2">100,000,000 تومان</h5>
            </div>

            <div className="col-12  col-md-12 col-lg-12 mt-lg-5 mt-md-5 mt-5 pe-4 pe-md-4 pe-lg-4">
              <ul className="list-box">
                <li>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم{" "}
                  </span>
                </li>
                <li>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم{" "}
                  </span>
                </li>{" "}
                <li>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-12 mt-5 mt-lg-5 mt-md-5">
            <p>پیشنهادات دیگر</p>
          </div>

          <div className="row gx-2 mt-3 mt-md-3 mt-lg-3">
            <div className="col-3 col-md-3 col-lg-3">
              <img
                src="/more-product-img/1 (2).png"
                alt="/"
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-md-6 col-lg-8">
              <span>Product Name Product Name 100,000,000 تومان</span>
            </div>
          </div>

          <div className="row gx-2 mt-3 mt-md-3 mt-lg-3">
            <div className="col-3 col-md-3 col-lg-3">
              <img
                src="/more-product-img/2.png"
                alt="/"
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-md-6 col-lg-8">
              <span>Product Name Product Name 100,000,000 تومان</span>
            </div>
          </div>

          <div className="row gx-2 mt-3 mt-md-3 mt-lg-3">
            <div className="col-3 col-md-3 col-lg-3">
              <img
                src="/more-product-img/1 (2).png"
                alt="/"
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-md-6 col-lg-8">
              <span>Product Name Product Name 100,000,000 تومان</span>
            </div>
          </div>

          <div className="col-10 col-md-10 col-lg-10 mt-4 mt-md-4 mt-lg-4">
            <div className="delivery-box d-flex flex-row-reverse gap-1">
              <img
                src="/public/icon/icon (2).png"
                alt="/"
                className="icon-img m-1"
              />
              <p>
                .تحویل اکسپرس{" "}
                <span className="delivery-text-blue">اِیمور </span>را رایگان
                تجربه کنید
              </p>
            </div>
          </div>

          <div className="col-9 col-md-9 col-lg-9">
            <div className="delivery-text-grey">
              ارسال بازه __ تا __ نام ماه
            </div>
          </div>
          <div className="col-10 col-md-10 col-lg-10 mt-5 mt-lg-5  mt-md-3">
            <button className="w-100 add-cart-btn">افزودن به سبد خرید</button>
          </div>
          <div className="commentSection-box">
            <CommentSection />
          </div>
        </div>
      </div>
      <div className="FooterSection-box">
        <Footer />
      </div>
    </div>
  );
}
