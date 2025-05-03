type BlogType = {
  id: string;
  titleen: string;
  descriptionen: string;
  image: string;
};

type BlogTypePayload = {
  titlemm: string;
  titleen: string;
  descriptionmm: string;
  descriptionen: string;
  category?: string;
  tag?: string;
  // image?: string;
};
