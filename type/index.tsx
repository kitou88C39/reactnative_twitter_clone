type User = {
  id: string;
  name: string;
  username: string;
  image: string;
};

type TweetType = {
  content: string;
  user: User;
};
