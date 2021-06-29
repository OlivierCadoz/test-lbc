import { User } from "./users.model";

export interface Message {
  id: number;
  authorId: number;
  message: string;
  user?: User
}

export interface Chat {
  id: number;
  authorId: number;
  messages: Message[];
  private: boolean;
  user?: User;
}
