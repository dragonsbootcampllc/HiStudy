import PageHead from "../Head";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Eleven";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Shop from "@/components/Shop/Shop";
import FooterOne from "@/components/Footer/Footer-Two";
import Wishlist from "@/components/wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <>
      <PageHead title="Wishlist - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Wishlist />

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default WishlistPage;
