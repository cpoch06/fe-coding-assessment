"use client";

import { useState, useEffect } from 'react';
import { Task, TaskFormData } from '../../../../lib/types';

const API_BASE_URL = '/api/todos';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isListOpen, setIsListOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Load tasks from API on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const fetchedTasks = await response.json();
      setTasks(fetchedTasks);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
      setIsInitialLoad(false);
    }
  };

  const addTask = async (formData: TaskFormData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: formData.title.trim() }),
      });
      if (!response.ok) throw new Error('Failed to create task');
      const newTask = await response.json();
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      setError('Failed to create task');
      console.error('Error creating task:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id: number, formData: TaskFormData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, title: formData.title.trim() }),
      });
      if (!response.ok) throw new Error('Failed to update task');
      const updatedTask = await response.json();
      setTasks(prev => prev.map(task => task.id === id ? updatedTask : task));
    } catch (err) {
      setError('Failed to update task');
      console.error('Error updating task:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const currentTask = tasks.find(task => task.id === id);
      if (!currentTask) return;
      const response = await fetch(API_BASE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, completed: !currentTask.completed }),
      });
      if (!response.ok) throw new Error('Failed to toggle task');
      const updatedTask = await response.json();
      setTasks(prev => prev.map(task => task.id === id ? updatedTask : task));
    } catch (err) {
      setError('Failed to toggle task');
      console.error('Error toggling task:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error('Failed to delete task');
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
      console.error('Error deleting task:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const clearError = () => {
    setError(null);
  };

  return {
    tasks,
    isListOpen,
    loading,
    error,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    toggleList,
    clearError,
    refetch: fetchTasks,
    isInitialLoad,
  };
}; 