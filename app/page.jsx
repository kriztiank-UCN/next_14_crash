'use client';
import { useEffect, useState } from 'react';
import LoadingPage from './loading';
import Courses from "./components/Courses";
import CourseSearch from './components/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome to Traversy Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      {/* pass courses prop from state to the Courses component */}
      <Courses courses={courses} />
    </>
  )
}
export default HomePage
