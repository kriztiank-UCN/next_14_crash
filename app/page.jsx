'use client';
import { useEffect, useState } from 'react';
import Courses from "./components/Courses";
import LoadingPage from './loading';

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
      {/* pass courses prop from state to the Courses component */}
      <Courses courses={courses} />
    </>
  )
}
export default HomePage
