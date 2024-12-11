"use client";

import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { CheckCircle, ClipboardList, MessageCircle } from "lucide-react";
import Link from "next/link";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

export default function ExecutionPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [tasks, setTasks] = useState({
    todo: [
      { id: "1", title: "Plan Sprint" },
      { id: "2", title: "Define Acceptance Criteria" },
    ],
    inProgress: [{ id: "3", title: "Develop Feature A" }],
    done: [{ id: "4", title: "Review Code" }],
  });
  const [qaChecklist, setQaChecklist] = useState([
    { id: 1, text: "Validate against acceptance criteria", completed: false },
    { id: 2, text: "Ensure code quality meets standards", completed: false },
    { id: 3, text: "Test for performance and bugs", completed: false },
  ]);
  const [notes, setNotes] = useState("");
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumn = Object.keys(tasks).find((key) =>
      tasks[key as keyof typeof tasks].some((task) => task.id === active.id)
    );
    const destinationColumn = over.id;

    if (sourceColumn !== destinationColumn) {
      const sourceTasks = tasks[sourceColumn as keyof typeof tasks].filter(
        (task) => task.id !== active.id
      );
      const draggedTask = tasks[sourceColumn as keyof typeof tasks].find(
        (task) => task.id === active.id
      );
      const destinationTasks = [
        ...tasks[destinationColumn as keyof typeof tasks],
        draggedTask!,
      ];

      setTasks({
        ...tasks,
        [sourceColumn!]: sourceTasks,
        [destinationColumn!]: destinationTasks,
      });
    }
  };

  const toggleChecklist = (id: number) => {
    setQaChecklist(
      qaChecklist.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleTimer = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    } else {
      setTimer(300); // 5-minute timer
      setIsTimerRunning(true);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer <= 0) {
      clearInterval(interval!);
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timer]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-12 font-sans">
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-lg bg-white p-8 shadow-2xl font-sans">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Execution
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The Execution phase is focused on delivering the project while
            iterating through planning, delivery, and review cycles.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Agile Methodologies
          </h3>
          <p className="text-gray-500 mb-2 flex items-center">
            <ClipboardList className="mr-2 text-blue-500" /> Plan sprints and move tasks across columns to simulate agile workflows.
          </p>
          {isClient && (
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.keys(tasks).map((column) => (
                  <DroppableColumn key={column} id={column} title={column}>
                    {tasks[column as keyof typeof tasks].map((task) => (
                      <DraggableTask key={task.id} id={task.id} title={task.title} />
                    ))}
                  </DroppableColumn>
                ))}
              </div>
            </DndContext>
          )}

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Daily Standups
          </h3>
          <p className="text-gray-500 mb-2 flex items-center">
            <MessageCircle className="mr-2 text-blue-500" /> Foster communication and resolve blockers with time-boxed discussions.
          </p>
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={handleTimer}
              className={`rounded-md py-3 px-6 text-white font-medium transition ${
isTimerRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
            >
              {isTimerRunning ? "Stop Timer" : "Start Standup Timer"}
            </button>
            <p className="text-lg font-bold text-gray-700">
              Time Remaining: {Math.floor(timer / 60)}:
              {`${timer % 60}`.padStart(2, "0")}
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Quality Assurance
          </h3>
          <ul className="space-y-2 mb-8">
            {qaChecklist.map((item) => (
              <li
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`flex items-center p-3 rounded-lg shadow cursor-pointer transition ${
item.completed ? "bg-green-100 hover:bg-green-200" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                <CheckCircle
                  className={`mr-3 transition ${
item.completed ? "text-green-500" : "text-gray-400"}`}
                />
                <span
                  className={`text-gray-600 transition ${
item.completed ? "line-through" : ""}`}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Knowledge Sharing
          </h3>
          <p className="text-gray-500 mb-2 flex items-center">
            <MessageCircle className="mr-2 text-blue-500" /> Conduct retrospectives to reflect on lessons learned.
          </p>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your retrospective notes here..."
            className="w-full rounded-lg border-gray-300 p-4 shadow focus:ring focus:ring-blue-300 mb-8"
          />

          <div className="flex justify-between">
            <Link
              href="/planning"
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
  );
}

function DroppableColumn({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="bg-gray-100 rounded-lg p-4 shadow">
      <h4 className="text-xl font-bold mb-2 capitalize font-sans text-gray-800">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function DraggableTask({ id, title }: { id: string; title: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-lg p-3 shadow hover:bg-gray-50 font-sans text-gray-700"
    >
      {title}
    </div>
  );
}
