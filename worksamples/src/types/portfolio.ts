/**
 * Portfolio data type definitions
 */

export interface CoreCompetency {
  capacity: string;
  description: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface TableRow {
  [key: string]: string | number;
}

export interface CaseStudyData {
  period: string;
  company: string;
  topic: string;
  results: {
    summary: string;
    metrics?: Array<{
      label: string;
      value: string;
      trend?: 'up' | 'down' | 'neutral';
    }>;
    chartData?: ChartDataPoint[];
    chartType?: 'bar' | 'line' | 'pie' | 'area';
    tableData?: {
      headers: string[];
      rows: TableRow[];
    };
  };
}

export interface PortfolioData {
  positioning: string;
  coreCompetencies: CoreCompetency[];
  caseStudies: CaseStudyData[];
}
