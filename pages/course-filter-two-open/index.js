import { useEffect, useState } from "react";
import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Eleven";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHeadTwo from "@/components/Category/CategoryHeadTwo";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";
import Pagination from "@/components/Common/Pagination";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-Two";
import BackToTop from "../backToTop";

import CourseDetails from "../../data/course-details/courseData.json";

const CourseFilteTwoOpen = () => {
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  let getAllCourse = JSON.parse(
    JSON.stringify(CourseDetails.courseDetails.slice(0, 12))
  );

  const startIndex = (page - 1) * 6;

  const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCourse(getAllCourse);
    setTotalPages(Math.ceil(getAllCourse.length / 6));
  }, [setTotalPages, setCourse]);

  return (
    <>
      <PageHead title="Course Filter Two Open - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHeadTwo category={getAllCourse} />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseFilterOneToggle course={getSelectedCourse} />

                {getAllCourse.length > 6 ? (
                  <div className="row">
                    <div className="col-lg-12 mt--60">
                      <Pagination
                        totalPages={totalPages}
                        pageNumber={page}
                        handleClick={handleClick}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CourseFilteTwoOpen;
