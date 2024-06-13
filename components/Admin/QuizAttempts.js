import { useState, useEffect } from "react";
import Select, { components } from "react-select";
import {
  createCourse,
  updateCourse,
  getAllCourses,
  getCourseById,
  deleteCourseById,
  updateCourseApprovalStatus,
  updateCourseRating,
  addReviewToCourse
} from '@/API/course/endpoints';

const QuizAttempts = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await getAllCourses();
        if (response.data && Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []); 

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Courses Panel</h4>
          </div>

          <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Instructor</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th>Enrollment Count</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.instructorId.name}</td>
                    <td>{course.total_duration}</td>
                    <td>${course.price}</td>
                    <td>{course.enrollment_count}</td>
                    <td>{course.rating}</td>
                    <td>{course.approved ? 'Approved' : 'Pending'}</td>
                    <td>
                      <div className="rbt-button-group justify-content-end">
                        <a
                          className="rbt-btn btn-xs bg-primary-opacity radius-round"
                          href="#"
                          title="Edit"
                        >
                          <i className="feather-edit pl--0" />
                        </a>
                        <a
                          className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                          href="#"
                          title="Delete"
                        >
                          <i className="feather-trash-2 pl--0" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizAttempts;

const ValueContainer = ({ children, ...props }) => {
  const { getValue, hasValue } = props;
  const nbValues = getValue().length;
  if (!hasValue) {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  }
  return (
    <components.ValueContainer {...props}>
      {`${nbValues} items selected`}
    </components.ValueContainer>
  );
};

const MultiValue = (props) => {
  return "3 Selected";
};
