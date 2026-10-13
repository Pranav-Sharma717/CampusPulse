import { HealthStatus } from '../types';

const API_BASE_URL = '/api';

export const api = {
  async getHealth(): Promise<HealthStatus> {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (!response.ok) {
        throw new Error(`Health check failed with status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to connect to CampusPulse backend API:', error);
      return {
        status: 'offline',
        timestamp: new Date().toISOString(),
        project: 'CampusPulse',
        version: '1.0.0',
        environment: 'client-offline',
        database: {
          status: 'disconnected',
          dialect: 'none',
        },
        llm: {
          provider: 'Ollama',
          status: 'offline',
          configured_model: 'llama3.2',
          model_ready: false,
          fallback_active: true,
        },
      };
    }
  },
};
