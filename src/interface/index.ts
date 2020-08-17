export interface IContacts {
  name: string;
  avatar: string;
  lastMessage: string;
  timeLastMessage: string;
  lastSeen: string;
  pinned?: boolean;
  mute?: boolean;
  unreadMessages?: number;
}
