"use client";

import { useState } from 'react';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { DeleteModal } from './DeleteModal';
import { useTasks } from './useTasks';
import { Task, TaskFormData } from '../../../../lib/types';

export const TaskManager = () => {
  const { tasks, isListOpen, loading, error, addTask, updateTask, toggleTask, deleteTask, toggleList, clearError } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteModalTask, setDeleteModalTask] = useState<Task | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSubmit = (formData: TaskFormData) => {
    if (isEditing && editingTask) {
      updateTask(editingTask.id, formData);
      setEditingTask(null);
      setIsEditing(false);
    } else {
      addTask(formData);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setIsEditing(false);
  };

  const handleDeleteClick = (task: Task) => {
    setDeleteModalTask(task);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (deleteModalTask) {
      await deleteTask(deleteModalTask.id);
      setIsDeleteModalOpen(false);
      setDeleteModalTask(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setDeleteModalTask(null);
  };

  return (
    <div className="space-y-6">
      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-800 dark:text-red-200 text-sm sm:text-base">{error}</p>
            </div>
            <button
              onClick={clearError}
              className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <TaskForm
        onSubmit={handleSubmit}
        initialData={editingTask ? { title: editingTask.title } : undefined}
        isEditing={isEditing}
        onCancel={handleCancelEdit}
        loading={loading}
      />
      
      <TaskList
        tasks={tasks}
        isOpen={isListOpen}
        onToggleList={toggleList}
        onToggleTask={toggleTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteClick}
        loading={loading}
      />

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        task={deleteModalTask}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        loading={loading}
      />
    </div>
  );
}; 