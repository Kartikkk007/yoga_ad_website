import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Clock, Video, Home } from 'lucide-react';
import { io } from 'socket.io-client'; // Import socket.io-client

function ScheduleSection() {
  const [scheduleData, setScheduleData] = useState([]);

  // Dummy data to display initially
  const initialDummyData = [
    {
      _id: 'dummy1',
      time: '06:00 AM - 07:00 AM',
      classes: {
        Mon: { name: 'Morning Hatha', location: 'Studio', type: 'Personal' },
        Tue: { name: 'Vinyasa Flow', location: 'Studio', type: 'Personal' },
        Wed: { name: 'Morning Hatha', location: 'Studio', type: 'Personal' },
        Thu: { name: 'Vinyasa Flow', location: 'Studio', type: 'Personal' },
        Fri: { name: 'Morning Hatha', location: 'Studio', type: 'Personal' },
        Sat: { name: 'Sunrise Yoga', location: 'Studio', type: 'Personal' },
        Sun: { name: 'Gentle Flow', location: 'Studio', type: 'Personal' },
      },
    },
    {
      _id: 'dummy2',
      time: '07:30 AM - 08:30 AM',
      classes: {
        Mon: { name: 'Power Yoga', location: 'Studio', type: 'Online' },
        Tue: { name: 'Prenatal Yoga', location: 'Studio', type: 'Special Program' },
        Wed: { name: 'Power Yoga', location: 'Studio', type: 'Online' },
        Thu: { name: 'Prenatal Yoga', location: 'Studio', type: 'Special Program' },
        Fri: { name: 'Power Yoga', location: 'Studio', type: 'Online' },
        Sat: { name: 'Family Yoga', location: 'Studio', type: 'Special Program' },
        Sun: { name: 'Meditation', location: 'Studio', type: 'Personal' },
      },
    },
    {
      _id: 'dummy3',
      time: '06:00 PM - 07:00 PM',
      classes: {
        Mon: { name: 'Evening Flow', location: 'Zoom', type: 'Online' },
        Tue: { name: 'Restorative', location: 'Zoom', type: 'Online' },
        Wed: { name: 'Evening Flow', location: 'Zoom', type: 'Online' },
        Thu: { name: 'Restorative', location: 'Zoom', type: 'Online' },
        Fri: { name: 'Evening Flow', location: 'Zoom', type: 'Online' },
        Sat: { name: 'Rest', location: 'Rest', type: 'Rest' },
        Sun: { name: 'Rest', location: 'Rest', type: 'Rest' },
      },
    },
    {
      _id: 'dummy4',
      time: '07:30 PM - 08:30 PM',
      classes: {
        Mon: { name: 'Yin Yoga', location: 'Studio', type: 'Personal' },
        Tue: { name: 'Beginner Flow', location: 'Studio', type: 'Personal' },
        Wed: { name: 'Yin Yoga', location: 'Studio', type: 'Personal' },
        Thu: { name: 'Beginner Flow', location: 'Studio', type: 'Personal' },
        Fri: { name: 'Yin Yoga', location: 'Studio', type: 'Personal' },
        Sat: { name: 'Rest', location: 'Rest', type: 'Rest' },
        Sun: { name: 'Rest', location: 'Rest', type: 'Rest' },
      },
    },
  ];

  // Function to fetch schedule data from the backend
  const fetchSchedule = async () => {
    try {
      const response = await fetch('/api/schedule');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Only update state if data is not empty, otherwise keep dummy data
      if (data.length > 0) {
        setScheduleData(data);
      } else {
        setScheduleData(initialDummyData);
      }
    } catch (error) {
      console.error('Failed to fetch schedule data:', error);
      setScheduleData(initialDummyData);
    }
  };

  useEffect(() => {
    // Initial data fetch
    fetchSchedule();

    // Connect to the Socket.IO server
    const socket = io('http://localhost:5000'); // Replace with your server URL

    // Listen for the 'scheduleUpdated' event from the server
    socket.on('scheduleUpdated', () => {
      console.log('Schedule updated via WebSocket! Refetching data...');
      fetchSchedule(); // Re-fetch the data when the event is received
    });

    // Cleanup function: disconnect the socket when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once

  const getCardColorClass = (classType) => {
    switch (classType) {
      case 'Personal':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Online':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Special Program':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-500 border-gray-200';
    }
  };

  const handleJoinClass = (classDetails) => {
    alert(`Joining class: ${classDetails.name}. This would typically redirect to the booking section.`);
    const element = document.getElementById('book-appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const headingWordVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: 50,
      transformOrigin: "bottom center",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Weekly Schedule
        </motion.h2>

        <motion.div
          className="overflow-x-auto rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Table className="min-w-full bg-white border border-gray-200">
            <TableHeader className="rounded-t-lg bg-purple-600">
              <TableRow className="text-white hover:bg-none">
                <TableHead className="py-3 px-4 text-left text-sm font-semibold rounded-tl-lg w-28">
                  <div style={{ perspective: '1000px' }}>
                    <motion.span
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       variants={headingWordVariants}
                       className="inline-block"
                    >
                       Time
                    </motion.span>
                  </div>
                </TableHead>
                {daysOfWeek.map((day) => (
                  <TableHead key={day} className="py-3 px-4 text-center text-sm font-semibold">
                    <div style={{ perspective: '1000px' }}>
                      <motion.span
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         variants={headingWordVariants}
                         className="inline-block"
                      >
                         {day}
                      </motion.span>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((timeSlot, index) => (
                <TableRow
                  key={index}
                  className={`border-b border-gray-200 last:border-b-0 hover:bg-gray-50`}
                >
                  <TableCell className="py-3 px-4 text-gray-700 font-semibold w-28">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      {timeSlot.time}
                    </div>
                  </TableCell>
                  {daysOfWeek.map((day) => {
                    const classInfo = timeSlot.classes[day];
                    const isRest = classInfo && classInfo.type === 'Rest';
                    const isClassAvailable = classInfo && classInfo.name && !isRest;
                    
                    return (
                      <TableCell key={day} className="py-3 px-4">
                        {isClassAvailable ? (
                          <div
                            className={`flex flex-col items-center justify-center p-3 rounded-lg border text-sm font-medium shadow-sm h-full cursor-pointer transition-transform duration-200 hover:scale-105 ${getCardColorClass(classInfo.type)}`}
                            onClick={() => handleJoinClass(classInfo)}
                          >
                            <span className="mb-1 text-center">{classInfo.name}</span>
                            <div className="flex items-center text-xs text-gray-600">
                              {classInfo.location === 'Zoom' ? (
                                <Video className="w-3 h-3 mr-1" />
                              ) : (
                                <Home className="w-3 h-3 mr-1" />
                              )}
                              <span>{classInfo.location}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center text-gray-400 italic text-sm p-3">
                            {isRest ? 'Rest' : 'N/A'}
                          </div>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
        <p className="mt-8 text-center text-sm text-gray-500">
          *Weekly schedule is updated by Mansi's administration panel.
        </p>
      </div>
    </section>
  );
}

export default ScheduleSection;
