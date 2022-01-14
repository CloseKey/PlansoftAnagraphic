import React, { useState, useContext, useEffect } from "react";

const url = "https://localhost:44326/api";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [attendances, setAttendances] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/Students`);
      const students = await response.json();
      if (students) {
        const newStudents = students.map((item) => {
          const {
            address,
            birthDate,
            birthMuni,
            codeFisc,
            firstName,
            id,
            lastName,
            phoneNumb,
          } = item;
          return {
            id,
            lastName,
            firstName,
            birthDate,
            birthMuni,
            codeFisc,
            phoneNumb,
            address,
          };
        });
        setStudents(newStudents);
      } else {
        setStudents([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/Courses`);
      const courses = await response.json();
      if (courses) {
        const newCourses = courses.map((item) => {
          const { dateEnd, dateStart, description, id, profName } = item;
          return {
            id,
            description,
            profName,
            dateStart,
            dateEnd,
          };
        });
        setCourses(newCourses);
      } else {
        setCourses([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchAttendances = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/Attendances`);
      const attendances = await response.json();
      if (attendances) {
        const newAttendances = attendances.map((item) => {
          const { id, studentId, courseId } = item;
          return {
            id,
            studentId,
            courseId,
          };
        });
        setAttendances(newAttendances);
      } else {
        setAttendances([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchAttendances();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        students,
        courses,
        attendances,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
