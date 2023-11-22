export type User = {
  userId: string;
  username: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
  };
};

export type Orders = {
  orderId: string;
  productName: string;
  price: number;
  quantity: number;
};
