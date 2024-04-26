import { BaseHTMLAttributes, ReactNode } from "react";

export type PropBaseT<T = any> = {
  className?: string;
  children?: ReactNode;
  ref?: any;
} & Partial<BaseHTMLAttributes<T>>

export type UserDataT = {
  name: string;
  position: string;
  company: string;
  jobDesc: string;
  relation: string;
}

export type ChatState = 'understanding' | 'recognizing' | 'advice';

export type ChatDataT = {
  name: string;
  message: ReactNode;
  isBot?: boolean;
  state?: ChatState;
  noPadding?: boolean;
  order?: number;
}

export type ChatGrouppedT = {
  isBot?: boolean;
  name: string;
  messages: ChatDataT[];
}