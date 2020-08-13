export interface IContacts {
  name: string;
  avatar: string;
  lastMessage: string;
  timeLastMessage: string;
  pinned?: boolean;
  mute?: boolean;
  unreadMessages?: number;
}
