import BreadCrumb from "@/components/Common/BreadCrumb";
import FooterOne from "@/components/Footer/Footer-Two";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Eleven";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import ResetPassword from "@/components/resetpassword/Reset";
import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import BackToTop from "@/pages/backToTop";
import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";


const ResetPage = () => {
  return (
    <>
      <PageHead title="Reset Password - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Reset Password" text="Reset Password" />

          <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <div className="container">
              <div className="row gy-5 row--30">
                <ResetPassword />
              </div>
            </div>
          </div>

          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ResetPage;
