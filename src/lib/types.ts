export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskFormData {
  title: string;
}

export interface CreateTaskRequest {
  title: string;
}

export interface UpdateTaskRequest {
  id: number;
  title?: string;
  completed?: boolean;
}

export interface DeleteTaskRequest {
  id: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
} 