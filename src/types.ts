export type ApproachType = 'نمائي' | 'وقائي' | 'علاجي' | 'شراكة أسرية' | 'تمكين طلابي' | 'دعم نفسي';

export type FieldType = 'التوجيه الأخلاقي' | 'التوجيه التربوي' | 'التوجيه الاجتماعي' | 'التوجيه النفسي' | 'التوجيه الوقائي' | 'التوجيه المهني';

export interface GuidanceProgram {
  id: number;
  title: string;
  categoryTag: string;
  approach: ApproachType;
  primaryField: FieldType;
  colorScheme: {
    accent: string;       // e.g. '#D4A017'
    bgSoft: string;       // e.g. 'rgba(212, 160, 23, 0.12)'
    border: string;       // e.g. 'rgba(212, 160, 23, 0.3)'
    badgeBg: string;      // e.g. 'bg-amber-500/20 text-amber-300'
  };
  iconName: string;
  timing: string;
  description: string;
  goals: string[];
  targetAudience: string[];
  indicators: string[];
  documentation: string;
  steps: string[];
  achievementMetric: string;
  keyOutputs: string[];
}

export interface GuidanceField {
  id: string;
  title: string;
  icon: string;
  description: string;
  focalPoints: string[];
  gradient: string;
}

export interface GuidanceApproach {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  targetFocus: string;
  methods: string[];
  color: string;
}

export interface DailyTask {
  id: string;
  title: string;
  icon: string;
  timing: string;
  description: string;
  procedures: string[];
  badge: string;
}
