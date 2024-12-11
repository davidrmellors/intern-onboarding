'use client';

import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "../_components/SortableItem"; // Custom component for sortable items
import { Clock, DollarSign, ClipboardList, Users } from "lucide-react";
import Link from "next/link";

export default function MonitoringControlPage() {

  const [progress, setProgress] = useState(60); // For time tracking
  const [budget, setBudget] = useState(50); // For budget reviews
  const [resources, setResources] = useState([
    { id: 1, name: "Developer", allocated: false },
    { id: 2, name: "Designer", allocated: false },
    { id: 3, name: "Tester", allocated: false },
  ]);
  const [tasks, setTasks] = useState([
    { id: "1", name: "Task A", priority: "High" },
    { id: "2", name: "Task B", priority: "Medium" },
    { id: "3", name: "Task C", priority: "Low" },
  ]);

  const toggleResource = (id: number) => {
    setResources(
      resources.map((resource) =>
        resource.id === id
          ? { ...resource, allocated: !resource.allocated }
          : resource
      )
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setTasks((prevTasks) => {
        const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
        const newIndex = prevTasks.findIndex((task) => task.id === over?.id);
        return arrayMove(prevTasks, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-6 sm:p-12">
      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-lg bg-white p-8 shadow-2xl">
          <h2 className="text-5xl font-extrabold text-teal-700 mb-6 font-serif">
            Monitoring & Control
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
            Project Monitoring & Control starts as soon as the project begins
            and is the process of tracking, reviewing, and reporting on progress
            to ensure zero whitespace exists.
          </p>

          <h3 className="text-3xl font-bold text-teal-600 mb-4 font-serif">
            Key Activities
          </h3>

          {/* Time Tracking */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 font-serif">
              <Clock className="text-blue-500 w-6 h-6" />
              <span>Time Tracking</span>
            </h4>
            <p className="text-gray-600 mb-2">
              Use the slider to track progress for time logged.
            </p>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-teal-600 font-bold">{progress}%</span>
            </div>
          </div>

          {/* Budget Reviews */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 font-serif">
              <DollarSign className="text-green-500 w-6 h-6" />
              <span>Budget Reviews</span>
            </h4>
            <p className="text-gray-600 mb-2">
              Adjust the slider to balance budget and scope effectively.
            </p>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-green-600 font-bold">{budget}%</span>
            </div>
          </div>

          {/* Backlog Grooming */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 font-serif">
              <ClipboardList className="text-purple-500 w-6 h-6" />
              <span>Backlog Grooming</span>
            </h4>
            <p className="text-gray-600 mb-2">
              Drag and drop tasks to prioritize them based on project goals.
            </p>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                <ul className="space-y-2">
                  {tasks.map((task) => (
                    <SortableItem key={task.id} id={task.id}>
                      <li className="bg-purple-50 border border-purple-200 rounded p-3 shadow hover:bg-purple-100 transition">
                        <span className="font-bold">{task.priority}:</span> {task.name}
                      </li>
                    </SortableItem>
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </div>

          {/* Resource Planning */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 font-serif">
              <Users className="text-orange-500 w-6 h-6" />
              <span>Resource Planning</span>
            </h4>
            <p className="text-gray-600 mb-2">
              Toggle to allocate resources to the project.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => toggleResource(resource.id)}
                  className={`p-4 rounded-lg shadow text-center font-medium transition ${
                    resource.allocated
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {resource.name}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
          <div className="flex justify-between">
            <Link
              href="/execution"
              className="rounded-md bg-gray-500 py-3 px-6 text-white font-medium hover:bg-gray-600 transition"
            >
              Previous Lesson
            </Link>
            <Link
              href="/monitoring-and-control"
              className="rounded-md bg-blue-500 py-3 px-6 text-white font-medium hover:bg-blue-600 transition"
            >
              Next Lesson
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}