import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { Clock, Video, Home } from 'lucide-react';

function AdminScheduleSection() {
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

  const [scheduleData, setScheduleData] = useState(initialDummyData); // Use dummy data for initial state
  const [isSaving, setIsSaving] = useState(false);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  useEffect(() => {
    // Simulating a fetch request with a promise and setTimeout
    const fetchSchedule = async () => {
      try {
        const data = await new Promise(resolve => setTimeout(() => resolve(initialDummyData), 500));
        setScheduleData(data);
      } catch (error) {
        console.error('Failed to fetch schedule data:', error);
        alert('Failed to load schedule data from the backend. Displaying dummy data.');
      }
    };
    fetchSchedule();
  }, []);

  // Handle changes to input fields
  const handleInputChange = (slotIndex, day, field, value) => {
    setScheduleData(prevData => {
      const updatedData = [...prevData];
      if (day) {
        if (!updatedData[slotIndex].classes[day]) {
          updatedData[slotIndex].classes[day] = {};
        }
        updatedData[slotIndex].classes[day][field] = value;
      } else {
        updatedData[slotIndex].time = value;
      }
      return updatedData;
    });
  };

  // Handle changes to select fields
  const handleSelectChange = (slotIndex, day, value) => {
    setScheduleData(prevData => {
      const updatedData = [...prevData];
      if (!updatedData[slotIndex].classes[day]) {
        updatedData[slotIndex].classes[day] = {};
      }
      updatedData[slotIndex].classes[day].type = value;
      return updatedData;
    });
  };

  // Save changes to the backend
  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Temporarily use a simulated save until the backend connection is stable
      setTimeout(() => {
        alert('Simulated save successful! The data is updated on the frontend.');
        setIsSaving(false);
      }, 1500);
    } catch (error) {
      console.error('Error updating schedule:', error);
      alert('Error updating schedule.');
      setIsSaving(false);
    }
  };

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
  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Admin Schedule Editor
        </motion.h2>

        <motion.div
          className="overflow-x-auto rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Table className="min-w-full bg-white border border-gray-200">
            <TableHeader className="rounded-t-lg bg-purple-600">
              <TableRow className="text-white hover:bg-none">
                <TableHead className="py-3 px-4 text-left text-sm font-semibold rounded-tl-lg w-32">Time</TableHead>
                {daysOfWeek.map((day) => (
                  <TableHead key={day} className="py-3 px-4 text-center text-sm font-semibold">
                    {day}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((timeSlot, slotIndex) => (
                <TableRow key={timeSlot._id || slotIndex} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <TableCell className="py-3 px-4 text-gray-700 font-semibold w-32">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <input
                        type="text"
                        value={timeSlot.time}
                        onChange={(e) => handleInputChange(slotIndex, null, 'time', e.target.value)}
                        className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </TableCell>
                  {daysOfWeek.map((day) => {
                    const classInfo = timeSlot.classes[day] || {};
                    const isRest = classInfo.type === 'Rest';

                    return (
                      <TableCell key={day} className="py-3 px-4">
                        <div className={`flex flex-col items-center justify-center p-3 rounded-lg border text-sm font-medium shadow-sm h-full ${getCardColorClass(classInfo.type)}`}>
                          <input
                            type="text"
                            placeholder="Class Name"
                            value={isRest ? 'Rest' : classInfo.name || ''}
                            onChange={(e) => handleInputChange(slotIndex, day, 'name', e.target.value)}
                            disabled={isRest}
                            className="w-full text-center bg-transparent border-b border-gray-300 focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:border-transparent transition-all mb-1"
                          />
                          <input
                            type="text"
                            placeholder="Location"
                            value={isRest ? 'Rest' : classInfo.location || ''}
                            onChange={(e) => handleInputChange(slotIndex, day, 'location', e.target.value)}
                            disabled={isRest}
                            className="w-full text-center bg-transparent border-b border-gray-300 focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:border-transparent transition-all mb-1"
                          />
                          <select
                            value={classInfo.type || ''}
                            onChange={(e) => handleSelectChange(slotIndex, day, e.target.value)}
                            className="w-full text-center bg-transparent border-b border-gray-300 focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:border-transparent transition-all"
                          >
                            <option value="">Select Type</option>
                            <option value="Personal">Personal</option>
                            <option value="Online">Online</option>
                            <option value="Special Program">Special Program</option>
                            <option value="Rest">Rest</option>
                          </select>
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
        
        <div className="mt-8 flex justify-center">
          <Button onClick={handleSave} disabled={isSaving} className="px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 transition-all transform hover:scale-105">
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AdminScheduleSection;
