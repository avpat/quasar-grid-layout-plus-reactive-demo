export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Widget {
  id: number;
  title: string;
  subtitle: string;
  actionText: string;
  actionUrl: string;
  backgroundColor?: string;
  textColor?: string;
  image?: string;
  isStatic?: boolean;
}

export interface LayoutGrid {
  x: number;
  y: number;
  w: number;
  h: number;
  i: number;
  static?: boolean;
}
