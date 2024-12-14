"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [notes, setNotes] = useState("");
  const [completedCourses, setCompletedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = [
          {
            id: 1,
            title: "Course 1",
            description: "Description for Course 1",
            videoLink: "https://www.youtube.com/watch?v=your-video-id-1",
            image:
              "data:image/jpeg;base64,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",
          },
          {
            id: 2,
            title: "Course 2",
            description: "Description for Course 2",
            videoLink: "https://www.youtube.com/watch?v=your-video-id-2",
            image: "",
          },
          {
            id: 3,
            title: "Course 3",
            description: "Description for Course 3",
            videoLink: "https://www.youtube.com/watch?v=your-video-id-2",
            image: "",
          },
          {
            id: 4,
            title: "Course 4",
            description: "Description for Course 4",
            videoLink: "https://www.youtube.com/watch?v=your-video-id-2",
            image: "",
          },
          {
            id: 5,
            title: "Course 5",
            description: "Description for Course 5",
            videoLink: "https://www.youtube.com/watch?v=your-video-id-2",
            image: "",
          },
          {
            id: 6,
            title: "Course 5",
            description: "Description for Course 6",
            videoLink: "https://www.youtube.com/watch?v=your-video-id-2",
            image: "",
          },
        ];
        setCourses(response);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleOpenCourse = (course) => {
    setSelectedCourse(course);
    const fetchNotes = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const savedNotes = localStorage.getItem(`notes_${course.id}`);
        setNotes(savedNotes || "");
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  };

  const handleMarkAsCompleted = () => {
    if (selectedCourse && !completedCourses.includes(selectedCourse.id)) {
      setCompletedCourses([...completedCourses, selectedCourse.id]);
      toast.success(`${selectedCourse.title} marked as completed!`);
    }
  };

  const handleUnmarkModule = () => {
    if (selectedCourse && completedCourses.includes(selectedCourse.id)) {
      const updatedCompletedCourses = completedCourses.filter(
        (id) => id !== selectedCourse.id
      );
      setCompletedCourses(updatedCompletedCourses);
      toast.success(`${selectedCourse.title} module unmarked!`);
    }
  };

  const handleVideoLinkClick = () => {
    const markAsCompleted = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        handleMarkAsCompleted();
        window.open(selectedCourse.videoLink, "_blank");
      } catch (error) {
        console.error("Error marking course as completed:", error);
      }
    };
    markAsCompleted();
  };

  const handleSaveNotes = () => {
    const saveNotes = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        localStorage.setItem(`notes_${selectedCourse.id}`, notes);
        toast.success("Notes saved successfully!");
      } catch (error) {
        console.error("Error saving notes:", error);
      }
    };
    saveNotes();
  };

  const handleClearNotes = () => {
    const clearNotes = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        localStorage.removeItem(`notes_${selectedCourse.id}`);
        setNotes("");
        toast.success("Notes cleared successfully!");
      } catch (error) {
        console.error("Error clearing notes:", error);
      }
    };
    clearNotes();
  };

  const handleAddToFavorites = () => {
    if (selectedCourse && !favorites.includes(selectedCourse.id)) {
      setFavorites([...favorites, selectedCourse.id]);
      toast.success(`${selectedCourse.title} added to favorites!`);
    }
  };

  const handleRemoveFromFavorites = () => {
    if (selectedCourse && favorites.includes(selectedCourse.id)) {
      const updatedFavorites = favorites.filter(
        (id) => id !== selectedCourse.id
      );
      setFavorites(updatedFavorites);
      toast.success(`${selectedCourse.title} removed from favorites!`);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    return () => {
      clearInterval(timerId);
    };
  }, [timerId]);

  const handleStartTimer = () => {
    if (timerId === null) {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const handleStopTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
  };
  return (
    <div className="container mx-auto py-8 font-josefin bg-blue-100">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 font-Montserrat text-teal-400">
        Our,{" "}
        <span className="relative inline-block">
          <span className="bg-clip-text text-transparent text-gradient-darks">
            Courses
          </span>
          <img
            src="/highlight.svg"
            alt="highlight"
            className="absolute bottom-[-7px] left-0 w-full"
          />
        </span>
        ✨
      </h1>
      <div className="flex justify-center items-center mb-6">
        <div className="mr-2">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full font-Josefin"
            onClick={handleStartTimer}
            disabled={timer > 0}
          >
            Start Timer
          </button>
        </div>
        <div className="ml-2">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full font-Josefin" 
            onClick={handleStopTimer}
            disabled={timer === 0}
          >
            Stop Timer
          </button>
        </div>
      </div>
      {timerId !== null && (
        <div
          className="fixed bottom-4 right-4 text-xl font-bold text-center bg-transparent px-4 py-2 rounded-lg shadow-md text-black font-Josefin"
          style={{ zIndex: 9999 }}
        >
          Timer: {timer} seconds
        </div>
      )}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search by course title"
          className="border border-violet-500 rounded-md p-2 mr-4 ml-4 font-Josefin text-gray-700 focus:outline-none focus:border-blue-500 bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full font-Josefin"
          onClick={() => setSearchTerm("")}
        >
          Clear Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 font-Josefin">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "12px", // Adjusted border radius
            }}
          >
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <img
              src="./1111mountain-33077.webp"
              alt={course.title}
              className="w-full h-32 object-cover mb-4 rounded-md"
              style={{ filter: "blur(2px)", opacity: "0.8" }}
              width={400} // Adjust according to your design
              height={250} // Adjust according to your design
            />
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-2"
              onClick={() => handleOpenCourse(course)}
            >
              Open Course
            </button>
            {completedCourses.includes(course.id) && (
              <p className="text-green-500 font-bold bg-white px-2 py-1 rounded-lg">
                Completed
              </p>
            )}
            <div className="flex items-center mt-2">
              <button
                className={`${
                  favorites.includes(course.id)
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-gray-300 hover:bg-gray-400"
                } text-white font-bold py-2 px-4 rounded-full mr-2`}
                onClick={() =>
                  favorites.includes(course.id)
                    ? handleRemoveFromFavorites()
                    : handleAddToFavorites()
                }
              >
                {favorites.includes(course.id)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>
              <button
                className={`${
                  completedCourses.includes(course.id)
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                } text-white font-bold py-2 px-4 rounded-full`}
                onClick={() =>
                  completedCourses.includes(course.id)
                    ? handleUnmarkModule()
                    : handleMarkAsCompleted()
                }
              >
                {completedCourses.includes(course.id)
                  ? "Unmark Module"
                  : "Mark as Completed"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4 font-Josefin">
          <h2 className="text-xl font-bold mb-2">{selectedCourse.title}</h2>
          <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
          <div className="mb-4">
            <a
              href={selectedCourse.videoLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVideoLinkClick}
            >
              Watch on YouTube
            </a>
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your notes here..."
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-400 mb-4"
            rows={4}
          />
          <div className="flex justify-between">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-2"
              onClick={handleSaveNotes}
            >
              Save Notes
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleClearNotes}
            >
              Clear Notes
            </button>
            {completedCourses.includes(selectedCourse.id) ? (
              <p className="text-green-500 font-bold">Completed</p>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleMarkAsCompleted}
              >
                Mark as Completed
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
