export type User = {
  id: string;
  name: string;
  username: string;
  image: string;
};

export type TweetType = {
  content: string;
  user: User;
};
