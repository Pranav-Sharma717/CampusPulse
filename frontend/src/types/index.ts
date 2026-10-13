export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'offline';
  timestamp: string;
  project: string;
  version: string;
  environment: string;
  database: {
    status: string;
    dialect: string;
  };
  llm: {
    provider: string;
    status: 'online' | 'offline';
    configured_model: string;
    model_ready: boolean;
    fallback_active: boolean;
  };
}

export interface StudentProfile {
  id: number;
  email: string;
  full_name: string;
  student_id: string;
  semester: number;
  department: string;
  current_stress_level: 'low' | 'moderate' | 'high';
  energy_level: number;
  daily_study_target_hours: number;
  weekly_budget_target: number;
  skills: string[];
  interests: string[];
}

export interface Assignment {
  id: number;
  subject_code: string;
  title: string;
  description: string;
  deadline: string;
  estimated_duration_minutes: number;
  academic_weight: number;
  progress_percent: number;
  urgency_level: 'Low' | 'Medium' | 'High' | 'Critical';
  is_completed: boolean;
  completed_at?: string;
}

export interface Course {
  id: number;
  course_code: string;
  course_name: string;
  instructor: string;
  attendance_percentage: number;
  status: string;
  color_code: string;
}

export interface Opportunity {
  id: number;
  title: string;
  organization: string;
  category: 'internship' | 'hackathon' | 'scholarship' | 'contest' | 'workshop' | 'opensource';
  location: string;
  stipend_or_grant: string;
  description: string;
  required_skills: string[];
  match_percentage: number;
  missing_skills: string[];
  deadline_days: number;
  is_saved?: boolean;
}

export interface MarketplaceItem {
  id: number;
  category_num: number;
  category_name: string;
  title: string;
  condition_or_tag: string;
  description: string;
  reason: string;
  price: number;
  original_price: number;
  location_or_voucher: string;
  action_label: string;
  contact: string;
}

export interface RecommendationResult {
  top_action: string;
  estimated_duration_minutes: number;
  rationale: string;
  academic_directive: string;
  financial_directive: string;
  career_directive: string;
  input_vector: {
    exam_horizon: string;
    available_budget: string;
    free_time_tonight: string;
    energy_level: string;
  };
  factors: {
    urgency_weight: number;
    importance_weight: number;
    duration_fit: number;
    energy_alignment: number;
    budget_impact: number;
  };
  alternatives: string[];
}
